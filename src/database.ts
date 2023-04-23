import sqlite from 'better-sqlite3';

export const db = sqlite(':memory:');

const createUserTable = () => {
  db.prepare(
    `
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        numPhone TEXT,
        password TEXT,
        admin BOOLEAN
      )
    `
  ).run();
};

const createAccountTable = () => {
  db.prepare(
    `
      CREATE TABLE account (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          numAccount TEXT,
          iban TEXT,
          balance DECIMAL,
          userId INTEGER,
          FOREIGN KEY(userId) REFERENCES users(id)
        )
      `
  ).run();
};

const createExpenseTable = () => {
  db.prepare(
    `
      CREATE TABLE expense (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descri TEXT,
          value DECIMAL,
          accountId INTEGER,
          FOREIGN KEY(accountId) REFERENCES account(id)
        )
      `
  ).run();
};

const createPaymentRecordTable = () => {
  db.prepare(
    `
      CREATE TABLE paymentRecord (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          idExpense INTEGER,
          idResident INTEGER,
          datePayment DATE,
          FOREIGN KEY(idExpense) REFERENCES expense(id),
          FOREIGN KEY(idResident) REFERENCES users(id)
        )
      `
  ).run();
};

export {
  createUserTable,
  createAccountTable,
  createExpenseTable,
  createPaymentRecordTable,
};
