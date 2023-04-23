import { Elections } from '@/components/UI/elections';
import Image from 'next/image';
import { DefaultLayout } from '../components/Layout';

Home.layout = DefaultLayout;

export default function Home() {
  return <Elections />;
}
