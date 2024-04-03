'use client';

import Link from 'next/link';
import { Button } from './ui/button.tsx';

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

// data
import { projectData } from '@/config/projectData';

function Work() {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>My Latest Work</h2>
          <p className='subtitle mb-8'>
            Embark on a visual journey through my showcase of web developer
            projects, meticulously crafted with Supabase, ReactJS, NextJS,
            VanillaJS, and TailwindCSS. Witness the seamless fusion of
            innovation and design, where each pixel is a testament to the
            artistry of modern web development.
          </p>
          <Link href='/projects'>
            <Button className='px-5'>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[550px] xs:h-[600px] xl:h-[600px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1
              },
              1024: {
                slidesPerView: 2
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work;
