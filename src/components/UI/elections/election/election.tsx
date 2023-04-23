import { useContext, useEffect, useState } from 'react';
import {
  ElectionCardWrapper,
  ElectionTitle,
  ElectionInfo,
  ElectionInfoItem,
  ProgressBarWrapper,
  ProgressBar,
  ButtonLink,
} from './election.styles';
import { ElectionProps } from './election.types';
import { FiArrowDownCircle, FiArrowUpCircle, FiPlus } from 'react-icons/fi';
import { IoWater, IoFlash, IoSkull } from 'react-icons/io5';
import { IconType } from 'react-icons';
// import fetchAPI, { Data } from '@/services/expenses';
// import { AuthContext } from '../../../contexts/auth';
// import api from '../../../services/api';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  debt: number;
}

export function Election({ election }: ElectionProps) {
  // const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await api.get<User[]>('/users');
    //   setUsers(response.data);
    // }
    // fetchData();
  }, []);
  let timeRemaining =
    (election.endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
  const timeElapsed =
    (Date.now() - election.startDate.getTime()) / (1000 * 60 * 60 * 24);
  const totalTime =
    (election.endDate.getTime() - election.startDate.getTime()) /
    (1000 * 60 * 60 * 24);
  let percentageComplete = (timeElapsed / totalTime) * 100;

  console.log(timeRemaining.toFixed(0));
  // timeRemaining = Math.min(-6, timeRemaining);
  if (election.startDate.getTime() > Date.now()) percentageComplete = 0;
  percentageComplete = Math.min(100, percentageComplete);

  return (
    <ElectionCardWrapper>
      <div>
        <ElectionTitle>{election.title}</ElectionTitle>
        <ElectionInfoItem>
          <span>Ano: </span> {election.year}
        </ElectionInfoItem>
        <ElectionInfo>
          <ElectionInfoItem>
            <span>Início:</span> {election.startDate.toLocaleDateString()}
          </ElectionInfoItem>
          <ElectionInfoItem>
            <span>Término:</span> {election.endDate.toLocaleDateString()}
          </ElectionInfoItem>
        </ElectionInfo>
      </div>
      <div>
        <ProgressBarWrapper>
          <ProgressBar percentage={percentageComplete} />
        </ProgressBarWrapper>
        <div>{`${timeRemaining.toFixed(0)} dia(s) restante(s)`}</div>
      </div>
      <ButtonLink href="/votar">Votar</ButtonLink>
    </ElectionCardWrapper>
  );
}
