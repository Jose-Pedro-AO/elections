import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Container, Form, Input, Button } from './login.styles';
import { LoginProps } from './login.types';
import img from '../../../assets/fundo.png';
import { IoMail, IoLockClosed } from 'react-icons/io5';
import { FiBookOpen } from 'react-icons/fi';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import { AuthContext } from '@/contexts/auth';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export function Login({}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { signIn, user } = useContext(AuthContext);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // signIn(email, password);
      // router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      {/* Same as */}
      {/* <ToastContainer /> */}
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Apartamentos JAV</h1>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </>
  );
}
