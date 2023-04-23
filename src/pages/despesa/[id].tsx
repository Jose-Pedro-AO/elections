import { Expense } from '@/components/UI/expense';
import { useRouter } from 'next/router';
import { DefaultLayout } from '../../components/Layout';

Despesa.layout = DefaultLayout;

export default function Despesa() {
  const router = useRouter();
  const { id } = router.query;

  return <Expense />;
}
