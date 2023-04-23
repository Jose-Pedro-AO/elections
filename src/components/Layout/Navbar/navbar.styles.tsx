import { theme } from '../../../styles/styles';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const Nav = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  height: 70px;
  background-color: #7d59d0;
  /* color: #fff; */
  padding: 0 20px;
  z-index: 999;

  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    height: auto;
    padding: ${theme.space.md};
  }
`;

export const ToggleButton = styled.button`
  background-color: blue;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavLeft = styled.nav`
  display: flex;
  gap: 20px;

  color: #fff;

  svg:nth-child(2) {
    display: none;
  }

  @media screen and (max-width: 980px) {
    margin-left: 0;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const NavRight = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Notify = styled.div`
  background-color: #ddd;
  padding: 5px;
  border-radius: 50%;
`;

export const SidebarProfile = styled.div`
  padding: 0px;
  width: 100%;
`;

export const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const ProfileWrapper = styled.div`
  text-align: center;
`;

export const ProgileTitle = styled.p`
  color: ${theme.colors.text_secondary};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.fontSize[16]};
  margin-bottom: ${theme.space.xs};
`;
export const ProfileSubtitle = styled.p`
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.fontSize[14]};
  margin-bottom: ${theme.space.md};
`;
