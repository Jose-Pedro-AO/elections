import { db } from '../database';
import { Router } from 'express';
const accountRouter = Router();

interface Account {
  id?: number;
  numAccount: string;
  iban: string;
  balance: number;
  userId: number;
}

// const createAccount = (account: Account): Account => {
//   const stmt = db.prepare(
//     'INSERT INTO account (numAccount, iban, balance, userId) VALUES (?, ?, ?, ?)'
//   );
//   const result = stmt.run(
//     account.numAccount,
//     account.iban,
//     account.balance,
//     account.userId
//   );
//   return {
//     id: result.lastInsertRowid as number, // conversão explícita para number
//     ...account,
//   };
// };

// const getAccounts = (): Account[] => {
//   const stmt = db.prepare('SELECT * FROM account');
//   return stmt.all() as Account[]; // conversão explícita para Account[]
// };

// const getAccountById = (id: number): Account => {
//   const stmt = db.prepare('SELECT * FROM account WHERE id = ?');
//   return stmt.get(id) as Account; // conversão explícita para Account
// };

// const updateAccount = (id: number, updatedAccount: Account): Account => {
//   const stmt = db.prepare(
//     'UPDATE account SET numAccount = ?, iban = ?, balance = ?, userId = ? WHERE id = ?'
//   );
//   const result = stmt.run(
//     updatedAccount.numAccount,
//     updatedAccount.iban,
//     updatedAccount.balance,
//     updatedAccount.userId,
//     id
//   );
//   return {
//     id,
//     ...updatedAccount,
//   };
// };

// const deleteAccount = (id: number): boolean => {
//   const stmt = db.prepare('DELETE FROM account WHERE id = ?');
//   const result = stmt.run(id);
//   return result.changes > 0;
// };

// Rota para criar uma nova conta
accountRouter.post('/account', async (req, res) => {
  const { name, description } = req.body;
  const stmt = db.prepare(`
    INSERT INTO account (name, description)
    VALUES (?, ?)
  `);
  const result = stmt.run(name, description);
  const id = result.lastInsertRowid;
  res.status(201).json({ id });
});

// Rota para listar todas as contas
accountRouter.get('/account', async (req, res) => {
  const accounts = db
    .prepare(
      `
    SELECT * FROM account
  `
    )
    .all();
  res.status(200).json(accounts);
});

export default accountRouter;
