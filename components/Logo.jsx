import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href='/'>
      <Image
        src='./sorin-logo.svg'
        width={85}
        height={85}
        style={{ width: '85px', height: '85px' }}
        priority
        alt='logo'
        className='w-auto h-auto'
      />
    </Link>
  );
}
