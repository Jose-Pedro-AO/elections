import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../../../styles/styles';

interface Election {
  title: string;
  year: number;
  startDate: Date;
  endDate: Date;
}

interface ElectionCardProps {
  election: Election;
}

export const ElectionCardWrapper = styled.div`
  border: 1px solid #7d59d0;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #fff;

  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
`;

export const ElectionTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #7d59d0;
`;

export const ElectionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  gap: 20px;
`;

export const ElectionInfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 4px;
`;

export const ProgressBarWrapper = styled.div`
  height: 6px;
  border-radius: 6px;
  background-color: #ccc;
  margin-top: 8px;
`;

export const ProgressBar = styled.div<{ percentage: number }>`
  height: 100%;
  border-radius: 6px;
  background-color: #df2755;
  width: ${({ percentage }) => `${percentage}%`};
`;

export const ButtonLink = styled(Link)`
  background-color: #7d59d0;
  padding: 10px 20px;
  text-align: center;
  margin: 20px 0 0 0;
`;
