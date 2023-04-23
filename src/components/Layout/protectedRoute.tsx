import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { useRouter } from 'next/router';
import Login from '@/pages/login';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // const { isAuthenticated } = useContext(AuthContext);
  // const router = useRouter();

  // if (!isAuthenticated) {
  //   // router.push('/login');
  //   return <Login />;
  // }

  return <>{children}</>;
};

export default PrivateRoute;
