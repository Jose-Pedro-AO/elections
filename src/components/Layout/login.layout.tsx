import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { LayoutProps } from './layout.types';

export function LoginLayout({ children }: LayoutProps) {
  const router = useRouter();

  return <>{children}</>;
}
