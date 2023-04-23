import { useState } from 'react';
import {
  CardContainer,
  Title,
  CardHead,
  CardBody,
  Subject,
  CardAdd,
  Box,
  Item,
  Container,
} from './expense.styles';
import { ExpenseProps } from './expense.types';
import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiCheckSquare,
} from 'react-icons/fi';
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoWater,
  IoFlash,
  IoSkull,
} from 'react-icons/io5';
import { IconType } from 'react-icons';

type ExpenseIcon = {
  [key: string]: any;
};

export function Expense({
  descri,
  icon,
  number,
  status,
  newExpense,
}: ExpenseProps) {
  const expenseIcons: ExpenseIcon = {
    Agua: <IoWater color={'#00adb3'} />,
    água: <IoWater color={'#00adb3'} />,
    Água: <IoWater color={'#00adb3'} />,
    Electricidade: <IoFlash color={'#f7e75a'} />,
    Luz: <IoFlash color={'#f7e75a'} />,
    Energia: <IoFlash color={'#f7e75a'} />,
    Gás: <IoSkull color={'#F75A68'} />,
    Gas: <IoSkull color={'#F75A68'} />,
  };
  // href={`/despesa/${encodeURIComponent(number)}`}

  return (
    <>
      <Container href={`/despesa/1`}>
        <CardContainer>
          {expenseIcons[descri] ? (
            <CardHead>{expenseIcons[descri]}</CardHead>
          ) : (
            <CardHead>{icon}</CardHead>
          )}

          <CardBody>
            <Title>{descri}</Title>
            {status ? (
              <Box>
                <Subject>Pago</Subject>
                <IoCheckmarkCircle color="#24b448" size={20} />
              </Box>
            ) : (
              <Box>
                <Item>Pagar</Item>
                <IoCloseCircle color="#ff5252" size={20} />
              </Box>
            )}
          </CardBody>
        </CardContainer>
      </Container>
    </>
  );
}
