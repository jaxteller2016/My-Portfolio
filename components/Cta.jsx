import { Button } from './ui/button';
import Link from 'next/link';

function Cta() {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
            Prepered to turn your ideas into reality? I&#39;m here to help
          </h2>
          <Link href='/contact'>
            <Button className='px-5'>Get in touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
