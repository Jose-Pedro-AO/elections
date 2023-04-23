import { useContext, useEffect, useState } from 'react';
import {
  Container,
  Box,
  Title,
  Menu,
  Item,
  Wrapper,
  ContainerCard,
  CardHead,
  CardAdd,
} from './residents.styles';
import { ResidentsProps } from './residents.types';
import { FiArrowDownCircle, FiArrowUpCircle, FiPlus } from 'react-icons/fi';
import { IoWater, IoFlash, IoSkull } from 'react-icons/io5';
import { IconType } from 'react-icons';
// import fetchAPI, { Data } from '@/services/expenses';
import { AuthContext } from '../../../contexts/auth';
import api from '../../../services/api';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  debt: number;
}

export function Residents({}: ResidentsProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await api.get<User[]>('/users');
    //   setUsers(response.data);
    // }
    // fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-medium mb-5">Lista de moradores</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="text-left px-8 py-4">Nome</th>
            <th className="text-left px-8 py-4">E-mail</th>
            <th className="text-left px-8 py-4">Telefone</th>
            <th className="text-left px-8 py-4">Dívida</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b">
              <td className="px-8 py-4">{user.name}</td>
              <td className="px-8 py-4">{user.email}</td>
              <td className="px-8 py-4">{user.phone}</td>
              <td className="px-8 py-4">{user.debt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
