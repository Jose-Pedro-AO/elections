import { useContext, useEffect, useState } from 'react';
import {
  CardWrapper,
  ImageWrapper,
  CandidateImage,
  CardContent,
  CandidateName,
  ProgressBarWrapper,
  PartyName,
  ProgressBar,
} from './candidate.styles';
import { CandidateProps } from './candidate.types';
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

export function Candidate({
  image,
  name,
  party,
  votes,
  selected,
  selectedName,
  onSelect,
}: CandidateProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await api.get<User[]>('/users');
    //   setUsers(response.data);
    // }
    // fetchData();
  }, []);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    onSelect(name);
    setIsSelected(true);
  };

  return (
    <CardWrapper onClick={handleSelect} isSelected={selectedName === name}>
      <ImageWrapper>
        <CandidateImage src={image} alt={name} />
      </ImageWrapper>
      <CardContent>
        <CandidateName>{name}</CandidateName>
        <PartyName>{party}</PartyName>
        <ProgressBarWrapper>
          <ProgressBar percentage={votes} />
        </ProgressBarWrapper>
      </CardContent>
    </CardWrapper>
  );
}
