import { LoginLayout } from '../components/Layout';
import { Login as LoginPage } from '../components/UI/login';

Login.layout = LoginLayout;

export default function Login() {
  return <LoginPage />;
}
