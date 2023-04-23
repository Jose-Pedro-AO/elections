import styled from 'styled-components';
import { theme } from '../../../styles/styles';
import Image from 'next/image';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #13131c;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #202030;
  border-radius: 8px;

  h1 {
    align-self: center;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #fff;
    font-size: 1.5rem;
  }

  padding: 3rem;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;

  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;
`;
