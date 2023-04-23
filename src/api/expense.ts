import { db } from '../database';
import { Router } from 'express';

interface Expense {
  id?: number;
  descri: string;
  value: number;
  accountId: number;
}

// const createExpense = (expense: Expense): Expense => {
//   const stmt = db.prepare(
//     'INSERT INTO expense (descri, value, accountId) VALUES (?, ?, ?)'
//   );
//   const result = stmt.run(expense.descri, expense.value, expense.accountId);
//   return {
//     id: result.lastInsertRowid as number,
//     ...expense,
//   };
// };

// const getExpenses = (): Expense[] => {
//   const stmt = db.prepare('SELECT * FROM expense');
//   return stmt.all() as Expense[];
// };

// const getExpenseById = (id: number): Expense => {
//   const stmt = db.prepare('SELECT * FROM expense WHERE id = ?');
//   return stmt.get(id) as Expense;
// };

// const updateExpense = (id: number, updatedExpense: Expense): Expense => {
//   const stmt = db.prepare(
//     'UPDATE expense SET descri = ?, value = ?, accountId = ? WHERE id = ?'
//   );
//   const result = stmt.run(
//     updatedExpense.descri,
//     updatedExpense.value,
//     updatedExpense.accountId,
//     id
//   );
//   return {
//     id,
//     ...updatedExpense,
//   };
// };

// const deleteExpense = (id: number): boolean => {
//   const stmt = db.prepare('DELETE FROM expense WHERE id = ?');
//   const result = stmt.run(id);
//   return result.changes > 0;
// };

// export {
//   createExpense,
//   getExpenses,
//   getExpenseById,
//   updateExpense,
//   deleteExpense,
// };

const expenseRouter = Router();

// Rota para criar uma nova despesa
expenseRouter.post('/', async (req, res) => {
  const { descri, value, accountId } = req.body;
  const stmt = db.prepare(
    'INSERT INTO expense (descri, value, accountId) VALUES (?, ?, ?)'
  );
  const result = stmt.run(descri, value, accountId);
  const id = result.lastInsertRowid;
  res.status(201).json({ id });
});

// Rota para listar todas as despesas
expenseRouter.get('/', async (req, res) => {
  const expenses: Expense[] = db
    .prepare('SELECT * FROM expense')
    .all() as Expense[];
  res.status(200).json(expenses);
});

export default expenseRouter;
