import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href='/'>
      <Image src='./sorin.svg' width={85} height={85} priority alt='logo' />
    </Link>
  );
}
