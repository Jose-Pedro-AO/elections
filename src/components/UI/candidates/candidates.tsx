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
  ContainerCards,
  Footer,
  Span,
  Button,
} from './candidates.styles';
import { CandidatesProps } from './candidates.types';
import { FiArrowDownCircle, FiArrowUpCircle, FiPlus } from 'react-icons/fi';
import {
  IoWater,
  IoFlash,
  IoSkull,
  IoAlertCircleOutline,
} from 'react-icons/io5';
import { IconType } from 'react-icons';
// import fetchAPI, { Data } from '@/services/expenses';
import { AuthContext } from '../../../contexts/auth';
import api from '../../../services/api';
import { Candidate } from './candidate';
import image from '../../../assets/image.jpg';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  debt: number;
}

interface CandidateCardProps {
  image: any;
  name: string;
  party: string;
  votes: number;
}

export function Candidates({}: CandidatesProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await api.get<User[]>('/users');
    //   setUsers(response.data);
    // }
    // fetchData();
  }, []);

  const candidates: CandidateCardProps[] = [
    {
      name: 'Candidato 1',
      party: 'Partido A',
      votes: 40,
      image: image,
    },
    {
      name: 'Candidato 2',
      party: 'Partido B',
      votes: 25,
      image: image,
    },
    {
      name: 'Candidato 3',
      party: 'Partido C',
      votes: 35,
      image: image,
    },
  ];

  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleCandidateSelect = (candidateName: string) => {
    setSelectedCandidate(candidateName);
  };

  return (
    <Container>
      <ContainerCards>
        {candidates.map(candidate => (
          <Candidate
            key={candidate.name}
            name={candidate.name}
            party={candidate.party}
            votes={candidate.votes}
            image={candidate.image}
            selected={selectedCandidate === candidate.name}
            onSelect={handleCandidateSelect}
            selectedName={selectedCandidate}
          />
        ))}
      </ContainerCards>
      <Footer>
        <Box>
          <IoAlertCircleOutline size={64} />
          <Span>
            Tenha muita atenção antes de clicar em votar! Só podera faze-lo uma
            vez.
          </Span>
        </Box>
        <Button>Votar em {selectedCandidate}</Button>
      </Footer>
    </Container>
  );
}
