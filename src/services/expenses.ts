import axios from 'axios';
import api from './api';

export interface Data {
  descri: string;
  value: number;
  accountId: string;
  userId: number;
  icon?: any;
  number?: number;
  status?: boolean;
  newExpense?: boolean;
}

export default async function fetchAPI(): Promise<Data[]> {
  const res = await api.get<Data[]>('/expense');
  return res.data;
}
