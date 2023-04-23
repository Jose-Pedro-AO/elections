import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../../../styles/styles';

export const Container = styled(Link)`
  text-decoration: none;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #212131;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  height: 160px;
  /* min-width: 200px; */
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.gray};
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 10px; */

  svg {
    height: 50px;
    width: 50px;
  }
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

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;

  /* svg {
    height: 24px;
    width: 24px;
  } */
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  gap: 10px;
`;

export const Item = styled.p`
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #32324d;
  font-size: 16px;

  :hover {
  }
`;

export const Subject = styled.p`
  font-size: 14px;
  color: #545459;
`;

export const Title = styled.h2`
  /* margin-left: 10px; */
  font-size: ${theme.fontSize[16]};
  color: ${theme.colors.text_secondary};
  color: #fff;
  font-weight: 500;
`;

export const Number = styled.p`
  font-size: ${theme.fontSize[48]};
`;
