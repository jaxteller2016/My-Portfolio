'use client';
// components
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Nav from './Nav';
import ThemeToggler from './ThemeToggler';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [header, setHeader] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //remove event listener
    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? 'py-2 bg-white shadow-lg dark:bg-accent'
          : 'py-4 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathName === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute top-full left-0 w-full h-[2px] bg-primary'
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className='xl:hidden inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3 py-3 rounded-full dark:bg-gray-800 dark:text-gray-100 transition-all border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
