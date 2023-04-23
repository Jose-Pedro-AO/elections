interface User {
  id?: number;
  name?: string;
  email?: string;
  message?: string;
  numPhone?: string;
  token?: string;
  isAuthenticated?: boolean;
}

export const TOKEN_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Impvc2VwZWRyb0BnbWFpbC5jb20iLCJpYXQiOjE2NjE3MDQ1MjQsImV4cCI6MTY2MTc5MDkyNH0.AfAp6r1WpUfysGEwaB6FHN2HNPdf1CyF5to2vzEZ_WU';

export const USER = '';
export const ID = '';

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false; // verificar se está no lado do cliente
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null; // verificar se está no lado do cliente
  return localStorage.getItem(TOKEN_KEY);
};

export const getId = (): string | null => {
  if (typeof window === 'undefined') return null; // verificar se está no lado do cliente
  return localStorage.getItem(ID);
};

export const login = (token: string): void => {
  if (typeof window !== 'undefined') {
    // verificar se está no lado do cliente
    localStorage.setItem(TOKEN_KEY, token);
  }
};

// export const login2 = (user: string): void => {
//   localStorage.setItem(USER, user);
// };

export const login3 = (id: string): void => {
  if (typeof window !== 'undefined') {
    // verificar se está no lado do cliente
    localStorage.setItem(ID, id);
  }
};

export const logOut = (): void => {
  if (typeof window !== 'undefined') {
    // verificar se está no lado do cliente
    localStorage.removeItem(TOKEN_KEY);
  }
};

export const saveUserToLocalStorage = (user: User): void => {
  if (typeof window !== 'undefined') {
    // verificar se está no lado do cliente
    localStorage.setItem('user', JSON.stringify(user));
    console.log('SAVVVVVE');
    console.log(user);
    console.log('SAVVVVVEDDDDD');
    console.log(localStorage.getItem('user'));
  }
};

export const getUser = (): string | null => {
  if (typeof window === 'undefined') return null; // verificar se está no lado do cliente
  console.log(localStorage.getItem('user'));
  return localStorage.getItem('user');
};
