import { NavbarProps } from './navbar.types';
import {
  Nav,
  NavLeft,
  NavRight,
  LinkItem,
  SidebarProfile,
  Img,
  ProfileImage,
  Notify,
} from './navbar.styles';
import { FaBell } from 'react-icons/fa';
import image from '../../../assets/image.jpg';
import { IoReader, IoGrid, IoAddCircle } from 'react-icons/io5';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/auth';

export function Navbar({}: NavbarProps) {
  const { user } = useContext(AuthContext);

  return (
    <Nav>
      <NavLeft>
        <LinkItem href="/">
          <IoGrid />
          <p>Dashboard</p>
        </LinkItem>
        <LinkItem href="/despesas">
          <IoReader />
          <p>Despesas</p>
        </LinkItem>
        {user && (
          <>
            <LinkItem href="/nova-despesa">
              <IoAddCircle />
              <p>Adicionar Despesa</p>
            </LinkItem>
            <LinkItem href="/moradores">
              <IoAddCircle />
              <p>Moradores</p>
            </LinkItem>
            <LinkItem href="/novo-morador">
              <IoAddCircle />
              <p>Adicionar Morador</p>
            </LinkItem>
          </>
        )}
      </NavLeft>
      <NavRight>
        <Notify>
          <FaBell color="#9C98A6" size={20} />
        </Notify>
        <SidebarProfile>
          <ProfileImage>
            <Img src={image} alt="Profile" />
          </ProfileImage>
        </SidebarProfile>
      </NavRight>
    </Nav>
  );
}
