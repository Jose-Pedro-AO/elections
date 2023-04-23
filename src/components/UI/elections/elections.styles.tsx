import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../../styles/styles';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  /* background: red; */

  @media screen and (max-width: 780px) {
    /* grid-template-columns: 1fr; */
  }
`;
