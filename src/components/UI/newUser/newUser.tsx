import { useContext, useState } from 'react';
import {
  Container,
  Title,
  Subject,
  Head,
  Form,
  Label,
  Input,
  Button,
} from './newUser.styles';
import { NewExpenseProps } from './newUser.types';
import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiCheckSquare,
} from 'react-icons/fi';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import { IconType } from 'react-icons';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import api from '@/services/api';
import { useRouter } from 'next/router';
import { AuthContext } from '@/contexts/auth';

interface FormValues {
  image: any;
}

export function NewUser({}: NewExpenseProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numPhone, setNumPhone] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  // const { user, isAuthenticated } = useContext(AuthContext);

  // console.log(user);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      numPhone,
      admin: false,
    };

    try {
      // const response = await api.post('/user', data);
      // console.log(response);
      // router.push('/moradores');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Head>
        <Title>Adicionar morador</Title>
        <Subject>{}</Subject>
      </Head>
      {/* handleSubmit(handleExpense) */}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="image">Nome</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={event => setName(event.target.value)}
          required
        />
        <Label htmlFor="image">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={event => setEmail(event.target.value)}
          required
        />
        <Label htmlFor="image">Palavra Passe</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={event => setPassword(event.target.value)}
          required
        />
        <Label htmlFor="image">Numero de telefone</Label>
        <Input
          id="numPhone"
          name="numPhone"
          type="number"
          onChange={event => setNumPhone(event.target.value)}
          required
        />
        <Button type="submit">Adicionar</Button>
      </Form>
    </Container>
  );
}
