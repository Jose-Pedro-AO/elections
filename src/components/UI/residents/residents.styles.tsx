import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../../styles/styles';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 780px) {
    /* grid-template-columns: 1fr; */
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
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
