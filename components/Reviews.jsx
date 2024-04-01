'use client';

import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Chef',
    review:
      'Absolutely thrilled with my new website! It perfectly captures the essence of my culinary style. Seamless design and functionality. Highly recommend!'
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Evelyn Anderson',
    job: 'Interior Designer',
    review:
      "Delighted with my website! It's a true reflection of my design ethos - elegant, intuitive, and captivating. Thank you for an exceptional experience!"
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'John Adams',
    job: 'Game Developer',
    review:
      "Thrilled with my new website! It's a gamer's paradise - sleek, immersive, and user-friendly. Your talent brought my games to the digital forefront. Couldn't be happier with the results!"
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Wilson',
    job: 'Therapist',
    review:
      "I'm so pleased with my website! It reflects my therapeutic approach beautifully. Your expertise in design and functionality has made a significant impact on my practice. Thank you!"
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Oliver Taylor',
    job: 'Engineer',
    review:
      'Highly satisfied with my website! It impeccably showcases my engineering portfolio. Your skillful execution exceeded my expectations. Great professional experience!'
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Mason Brown',
    job: 'Video Editor',
    review:
      "Thrilled with my website! It's a visual masterpiece, reflecting my editing expertise. Your talent and attention to detail truly shine through. Thank you for elevating my online presence!"
  }
];

function Reviews() {
  return (
    <section className='mb-12 xl:mb-32 xl:mt-80'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 }
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    {/* image */}
                    <div className='flex items-center gap-x-4'>
                      <Image
                        src={person.avatar}
                        alt={person.name}
                        width={70}
                        height={70}
                        className='rounded-full'
                        priority
                      />
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription>{person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
