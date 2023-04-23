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
} from './expenses.styles';
import { ExpensesProps } from './expenses.types';
import { Expense } from './expense/expense';
import { FiArrowDownCircle, FiArrowUpCircle, FiPlus } from 'react-icons/fi';
import { IoWater, IoFlash, IoSkull } from 'react-icons/io5';
import { IconType } from 'react-icons';
import fetchAPI, { Data } from '@/services/expenses';
import { AuthContext } from '@/contexts/auth';

type ExpenseInfo = {
  descri: string;
  icon?: any;
  number: number;
  status: boolean;
  newExpense: boolean;
};

type ExpenseData = {
  descri: string;
  value: number;
  accountId: string;
  userId: number;
  icon?: any;
  number?: number;
  status?: boolean;
  newExpense?: boolean;
};

export function Expenses({}: ExpensesProps) {
  const expenseData: ExpenseInfo[] = [
    {
      descri: 'Água',
      icon: <IoWater color={'#00adb3'} />,
      number: 1,
      status: false,
      newExpense: false,
    },
    {
      descri: 'Electricidade',
      icon: <IoFlash color={'#f7e75a'} />,
      number: 2,
      status: false,
      newExpense: false,
    },
    {
      descri: 'Gás',
      icon: <IoSkull color={'#F75A68'} />,
      number: 3,
      status: true,
      newExpense: false,
    },
  ];

  expenseData.push({
    descri: 'New',
    icon: <FiPlus color={'#545459'} />,
    number: -1,
    status: false,
    newExpense: true,
  });

  const { user, isAuthenticated } = useContext(AuthContext);

  console.log(user);

  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchAPI();
      setData(result);
    }
    fetchData();
  }, []);

  const newData = {
    descri: 'New',
    icon: <FiPlus color={'#545459'} />,
    number: -1,
    status: false,
    newExpense: true,
  };
  // setData([...data, newData]);

  const [expenses, setExpenses] = useState<ExpenseInfo[]>(expenseData);

  return (
    <Container>
      <Title>Despesas</Title>
      <Menu>
        <Item>Recorrentes</Item>
        <Item>Extraordinárias</Item>
      </Menu>
      <Wrapper>
        {data && data.map(card => <Expense key={card.descri} {...card} />)}
        {user && (
          <ContainerCard href="/nova-despesa">
            <CardAdd>
              <CardHead>
                <FiPlus color={'#545459'} />
              </CardHead>
            </CardAdd>
          </ContainerCard>
        )}
      </Wrapper>
    </Container>
  );
}
