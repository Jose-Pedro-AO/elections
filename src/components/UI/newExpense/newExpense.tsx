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
} from './newExpense.styles';
import { NewExpenseProps } from './newExpense.types';
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

export function NewExpense({}: NewExpenseProps) {
  const [descri, setDescri] = useState('');
  const [value, setValue] = useState('');
  const [payRange, setPayRange] = useState('');
  const [paymentDivision, setPaymentDivision] = useState('');
  const [type, setType] = useState('');

  const router = useRouter();

  // const { user, isAuthenticated } = useContext(AuthContext);

  // console.log(user);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // const data = {
    //   descri,
    //   value,
    //   accountId: descri,
    //   userId: user.id,
    //   payRange,
    //   paymentDivision,
    //   type,
    // };
    // try {
    //   const response = await api.post('/expense/create', data);
    //   console.log(response);
    //   router.push('/despesas');
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Container>
      <Head>
        <Title>Criar eleição</Title>
        <Subject>{}</Subject>
      </Head>
      {/* handleSubmit(handleExpense) */}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="image">Nome</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={event => setDescri(event.target.value)}
          required
        />
        <Label htmlFor="image">Valor</Label>
        <Input
          id="price"
          name="pricename"
          type="number"
          onChange={event => setValue(event.target.value)}
          required
        />
        <Label htmlFor="image">Intervalo de pagamento</Label>
        <Input
          id="payRange"
          name="payRange"
          type="number"
          onChange={event => setPayRange(event.target.value)}
          required
        />
        <Label htmlFor="image">Formas de pagamento</Label>
        <Input
          id="paymentDivision"
          name="paymentDivision"
          type="text"
          onChange={event => setPaymentDivision(event.target.value)}
          required
        />
        <Label htmlFor="image">Tipo de despesa</Label>
        <Input
          id="type"
          name="type"
          type="text"
          onChange={event => setType(event.target.value)}
          required
        />
        <Button type="submit">Adicionar</Button>
      </Form>
    </Container>
  );
}
