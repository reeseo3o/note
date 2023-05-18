import Counter from '@/components/Counter';
import os from 'os';
import Image from 'next/image';

export default function Home() {
  console.log('hello!2');
  console.log('안녕~서버');
  console.log(os.hostname());
  return (
    <>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
