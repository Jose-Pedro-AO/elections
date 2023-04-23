import { db } from '../database';

import { Router } from 'express';
const paymentRouter = Router();

interface PaymentRecord {
  id?: number;
  idExpense: number;
  idResident: number;
  datePayment: string;
}

// const createPaymentRecord = (paymentRecord: PaymentRecord): PaymentRecord => {
//   const stmt = db.prepare(
//     'INSERT INTO paymentRecord (idExpense, idResident, datePayment) VALUES (?, ?, ?)'
//   );
//   const result = stmt.run(
//     paymentRecord.idExpense,
//     paymentRecord.idResident,
//     paymentRecord.datePayment
//   );
//   return {
//     id: result.lastInsertRowid as number,
//     ...paymentRecord,
//   };
// };

// const getPaymentRecords = (): PaymentRecord[] => {
//   const stmt = db.prepare('SELECT * FROM paymentRecord');
//   return stmt.all() as PaymentRecord[];
// };

// const getPaymentRecordById = (id: number): PaymentRecord => {
//   const stmt = db.prepare('SELECT * FROM paymentRecord WHERE id = ?');
//   return stmt.get(id) as PaymentRecord;
// };

// const updatePaymentRecord = (
//   id: number,
//   updatedPaymentRecord: PaymentRecord
// ): PaymentRecord => {
//   const stmt = db.prepare(
//     'UPDATE paymentRecord SET idExpense = ?, idResident = ?, datePayment = ? WHERE id = ?'
//   );
//   const result = stmt.run(
//     updatedPaymentRecord.idExpense,
//     updatedPaymentRecord.idResident,
//     updatedPaymentRecord.datePayment,
//     id
//   );
//   return {
//     id,
//     ...updatedPaymentRecord,
//   };
// };

// const deletePaymentRecord = (id: number): boolean => {
//   const stmt = db.prepare('DELETE FROM paymentRecord WHERE id = ?');
//   const result = stmt.run(id);
//   return result.changes > 0;
// };

// export {
//   createPaymentRecord,
//   getPaymentRecords,
//   getPaymentRecordById,
//   updatePaymentRecord,
//   deletePaymentRecord,
// };

// Rota para criar um novo registro de pagamento
paymentRouter.post('/paymentRecord', async (req, res) => {
  const { idExpense, idResident, datePayment } = req.body;
  const stmt = db.prepare(`
    INSERT INTO paymentRecord (idExpense, idResident, datePayment)
    VALUES (?, ?, ?)
  `);
  const result = stmt.run(idExpense, idResident, datePayment);
  const id = result.lastInsertRowid;
  res.status(201).json({ id });
});

// Rota para listar todos os registros de pagamento
paymentRouter.get('/paymentRecord', async (req, res) => {
  const paymentRecords = db
    .prepare(
      `
    SELECT * FROM paymentRecord
  `
    )
    .all();
  res.status(200).json(paymentRecords);
});

export default paymentRouter;
