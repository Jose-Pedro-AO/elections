import { useContext, useEffect, useState } from 'react';
import { Head } from './Head';
import { LayoutProps } from './layout.types';
import { Main } from './Main';
import { Navbar } from './Navbar';
import { Container } from './styles';

import { useRouter } from 'next/router';
import { AuthContext } from '@/contexts/auth';

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Head />
      <Container>
        <Navbar />
        <Main>{children}</Main>
      </Container>
    </>
  );
}
