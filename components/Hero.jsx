'use client';

import Link from 'next/link';
import { Button } from './ui/button.tsx';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';
import TxtAnimation from './TxtAnimation';

function Hero() {
  const handleDownload = async () => {
    const response = await fetch('/api/download');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sorin-Craciunescu-CV.pdf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className='py-12 xs:mb-48 xl:mb-2 sm:mb-2 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              <TxtAnimation
                strArray={[
                  'Web Developer',
                  'Web Designer',
                  'UI/UX Designer',
                  'React Developer',
                  'MERN Stack Developer'
                ]}
              />
            </div>
            <h1 className='h1 mb-4 '>Hello 👋🏼 My name is Sorin Craciunescu</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              As an advancing React Developer with a diverse skill set and a
              passion for cutting-edge technologies, I bring extensive expertise
              in various facets of web development and IT infrastructure. My
              vocational journey has been marked by a commitment to mastering a
              wide array of tools and methodologies, enabling me to thrive in
              dynamic and cross-functional environments.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant='secondary'
                className='gap-x-2 border-2'
                onClick={handleDownload}
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary cursor-pointer transition-all'
            />
          </div>
          {/* Image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[4%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={7}
              badgeText='Years Of Experience'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[60%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={54}
              badgeText='Finnished Projects'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[35%] -right-[5rem]'
              icon={<RiTeamFill />}
              endCountNum={48}
              badgeText='Happy Clients'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 '></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/sorin-hero.png'
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
