import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import TxtAnimation from '@/components/TxtAnimation.jsx';

//components
import ContactForm from '@/components/ContactForm.tsx';

function Contact() {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & ilustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋🏼
            </div>
            <h1 className='h1 max-w-md mb-8'>
              Let&apos;s&nbsp;
              <TxtAnimation
                strArray={['Work', 'Build', 'Create', 'Code', 'Develop']}
              />
              <br />
              Toghether
            </h1>
            <p className='subtitle max-w-[400px]'>
              Ready to turn your web development vision into reality? Let&apos;s
              collaborate to bring your project to life! Contact me today to
              discuss your ideas, and let&apos;s create something extraordinary
              together.
            </p>
          </div>
          {/* ilustration */}
          <div className='hidden xl:flex w-full bg-contact_ilustration_light dark:bg-contact_ilustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg '>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>sorin.craciunescu84@gmail.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>48, Alexandru Serbanescu Street, 1-st Sector, Bucharest</div>
            </div>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>+40 722 201 202</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
