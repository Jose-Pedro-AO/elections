import { db } from '../database';
import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userRouter = Router();

interface User {
  id?: number;
  name: string;
  email: string;
  numPhone: string;
  password: string;
  admin: boolean;
}

// const createUser = (user: User): User => {
//   const stmt = db.prepare(
//     'INSERT INTO users (name, email, numPhone, password, admin) VALUES (?, ?, ?, ?, ?)'
//   );
//   const result = stmt.run(
//     user.name,
//     user.email,
//     user.numPhone,
//     user.password,
//     user.admin
//   );
//   return {
//     id: result.lastInsertRowid as number,
//     ...user,
//   };
// };

// const getUsers = (): User[] => {
//   const stmt = db.prepare('SELECT * FROM users');
//   return stmt.all() as User[];
// };

// const getUserById = (id: number): User => {
//   const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
//   return stmt.get(id) as User;
// };

// const updateUser = (id: number, updatedUser: User): User => {
//   const stmt = db.prepare(
//     'UPDATE users SET name = ?, email = ?, numPhone = ?, password = ?, admin = ? WHERE id = ?'
//   );
//   const result = stmt.run(
//     updatedUser.name,
//     updatedUser.email,
//     updatedUser.numPhone,
//     updatedUser.password,
//     updatedUser.admin,
//     id
//   );
//   return {
//     id,
//     ...updatedUser,
//   };
// };

// const deleteUser = (id: number): boolean => {
//   const stmt = db.prepare('DELETE FROM users WHERE id = ?');
//   const result = stmt.run(id);
//   return result.changes > 0;
// };
interface AuthRequest extends Request {
  user?: { id: number };
}

// Rota para cadastrar um novo usuário
userRouter.post(
  '/register',
  async (req: Request<{}, {}, User>, res: Response) => {
    const { name, email, numPhone, password } = req.body;
    const admin = false;
    const hashedPassword = await bcrypt.hash(password, 10);
    const stmt = db.prepare(
      'INSERT INTO users (name, email, numPhone, password, admin) VALUES (?, ?, ?, ?, ?)'
    );
    const result = stmt.run(name, email, numPhone, hashedPassword, admin);
    const id = result.lastInsertRowid as number;
    const token = jwt.sign({ id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    res.status(201).json({ token });
  }
);

// Rota para fazer login
userRouter.post(
  '/login',
  async (
    req: Request<{}, {}, { email: string; password: string }>,
    res: Response
  ) => {
    const { email, password } = req.body;
    const user = db
      .prepare('SELECT * FROM users WHERE email = ?')
      .get(email) as User;
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  }
);

// Rota para obter os dados do usuário logado
userRouter.get('/me', async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const user = db
    .prepare('SELECT * FROM users WHERE id = ?')
    .get(userId) as User;
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
  //   delete user.password;
  res.status(200).json(user);
});

export default userRouter;
