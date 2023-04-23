import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '../../../../styles/styles';
// <{ isSelected: boolean }>
export const CardWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
  border: ${({ isSelected }) => (isSelected ? '5px solid #7d59d0' : 'none')};

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  object-fit: contain;
`;

export const CandidateImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  max-width: 200px;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const CandidateName = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
`;

export const PartyName = styled.p`
  margin: 8px 0 0;
  font-size: 16px;
  font-weight: 400;
`;

export const ProgressBarWrapper = styled.div`
  margin: 16px 0 0;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
`;

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 8px;
  border-radius: 4px;
  background-color: #4caf50;
  width: ${({ percentage }) => `${percentage}%`};
  transition: width 0.2s ease-in-out;
`;
