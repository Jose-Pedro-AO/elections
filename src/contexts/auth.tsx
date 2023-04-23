import { createContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, Router } from 'next/router';
import api from '../services/api';
// import { boolean } from 'yup';
import {
  login,
  isAuthenticated as isAuthenticatedd,
  getUser,
  logOut,
  saveUserToLocalStorage,
} from '@/services/auth';
// import { getToken } from 'next-auth/jwt';

interface User {
  id?: number;
  name?: string;
  email?: string;
  message?: string;
  numPhone?: string;
  token?: string;
  isAuthenticated?: boolean;
}

interface AuthContextData {
  name: string;
  signIn: (email: string, password: string) => Promise<void>;
  user: User;
  isAuthenticated: boolean;
  logout: any;
  testAuth: any;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User>({});
  const router = useRouter();

  function testAuth() {
    const isAuth = isAuthenticatedd();
    if (isAuth) {
      setIsAuthenticated(true);
      const savedUser = getUser();
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        console.log('parsed-2');
        console.log(savedUser);
        setUser(parsedUser);
      }
    } else {
      router.push('/login');
    }
  }

  useEffect(() => {
    testAuth();
  }, []);

  // testAuth();

  const signIn = async (email: string, password: string): Promise<void> => {
    if (email !== '' && password !== '') {
      try {
        const data = {
          email: email,
          password: password,
        };
        const response = await api.post('/user/authenticate', data);
        setUser({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
          message: 'Sucesso!',
          isAuthenticated: true,
        });
        login(response.data.token);
        saveUserToLocalStorage(response.data.user);
        router.push('/despesas');
        // console.log(user);
        // if (response.data.token === null) navigation('/');
      } catch (err: any) {
        console.log(err.message);
        setUser({
          message: 'Nome ou Senha errados!',
          isAuthenticated: false,
        });
      }
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    // setUser({ name: '' });
    logOut();
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{ name: 'user', signIn, user, isAuthenticated, logout, testAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
