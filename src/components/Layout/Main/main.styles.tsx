import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from '../../../styles/styles';

export const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  box-sizing: border-box;
  /* padding: ${theme.space.md}; */
  /* margin-left: ${theme.space.sidebar}; */
  /* z-index: 999; */
  /* overflow-y: auto; */
  /* flex: 1; */
  margin-inline: auto;
  /* min-width: 60%; */
  width: 60%;
  /* background-color: beige; */

  @media screen and (max-width: 1300px) {
    width: 80%;
  }

  @media screen and (max-width: 780px) {
    width: 90%;
    margin: 0px auto;
  }
`;

export const Container = styled.div`
  /* width: 100%; */
  /* display: flex; */
  /* flex: 1; */
  box-sizing: border-box;
  margin: 3rem;
  flex: 1;
`;
