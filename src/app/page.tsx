import Counter from '@/components/Counter';
import os from 'os';

export default function Home() {
  console.log('hello!');
  console.log('안녕~서버');
  console.log(os.hostname());
  return (
    <>
      <Counter />
    </>
  );
}
