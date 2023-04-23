import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../../styles/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: #212131; */
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  /* height: 160px; */
  /* min-width: 200px; */
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.gray};
  cursor: pointer;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 2rem;
`;

export const Subject = styled.p`
  font-size: ${theme.fontSize[24]};
  color: #e1e1e2;
`;

export const Title = styled.h2`
  /* margin-left: 10px; */
  font-size: ${theme.fontSize[32]};
  color: ${theme.colors.text_secondary};
  color: #fff;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #102f53;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0e3c70;
  }
`;
