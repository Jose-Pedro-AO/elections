import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../../styles/styles';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  /* background: beige; */
  gap: 20px;
  height: 100%;

  @media screen and (max-width: 780px) {
    /* grid-template-columns: 1fr; */
  }
`;

export const ContainerCards = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  gap: 20px;
  /* margin-bottom: 20px; */

  @media screen and (max-width: 780px) {
    /* grid-template-columns: 1fr; */
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Item = styled.li`
  color: #fff;
  border: 1px solid #212131;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 16px;

  :hover {
    background-color: #212131;
  }
`;

export const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  svg {
    height: 35px;
    width: 35px;
  }
`;

export const CardAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212131;
  cursor: pointer;

  border-radius: 16px;
  padding: 20px;
  width: 100%;
  height: 160px;
`;

export const ContainerCard = styled(Link)`
  text-decoration: none;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafc;
  padding: 38px 64px;
  border-radius: 0 0 ${theme.border.medium} ${theme.border.medium};

  @media screen and (max-width: 780px) {
    padding: 19px 32px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: last baseline;
  justify-content: space-between;
  gap: 20px;
  width: 40%;

  svg {
    /* width: 100px; */
  }

  @media screen and (max-width: 780px) {
    gap: 10px;
    width: 50%;
  }
`;

export const Span = styled.span`
  color: #32264d;
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: #7d59d0;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  margin: 20px 0 0 0;
  border-radius: 10px;
`;
