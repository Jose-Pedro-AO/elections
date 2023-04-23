import { useContext, useEffect, useState } from 'react';
import { Container } from './elections.styles';
import { ElectionsProps } from './elections.types';
import { FiArrowDownCircle, FiArrowUpCircle, FiPlus } from 'react-icons/fi';
import { IoWater, IoFlash, IoSkull } from 'react-icons/io5';
import { IconType } from 'react-icons';
// import fetchAPI, { Data } from '@/services/expenses';
import { AuthContext } from '../../../contexts/auth';
import api from '../../../services/api';
import { Election } from './election';

interface Election {
  id: number;
  title: string;
  year: number;
  startDate: Date;
  endDate: Date;
}

interface Props {
  elections: Election[];
}

const elections: Election[] = [
  {
    id: 1,
    title: 'Eleição para presidente',
    year: 2023,
    startDate: new Date('2023-04-18'),
    endDate: new Date('2023-04-25'),
  },
  {
    id: 2,
    title: 'Eleição para governador',
    year: 2023,
    startDate: new Date('2023-04-19'),
    endDate: new Date('2023-04-20'),
  },
  {
    id: 3,
    title: 'Eleição para governador',
    year: 2023,
    startDate: new Date('2023-04-16'),
    endDate: new Date('2023-04-22'),
  },
  {
    id: 4,
    title: 'Eleição para governador',
    year: 2023,
    startDate: new Date('2023-04-19'),
    endDate: new Date('2023-04-20'),
  },
];

export function Elections({}: ElectionsProps) {
  // const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await api.get<User[]>('/users');
    //   setUsers(response.data);
    // }
    // fetchData();
  }, []);

  return (
    <Container>
      {elections.map(dodo => (
        <Election key={dodo.title} election={dodo} />
      ))}
    </Container>
  );
}
