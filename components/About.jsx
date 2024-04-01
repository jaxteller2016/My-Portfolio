import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Sorin Craciunescu'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+40 722 201 202'
  },
  {
    icon: <MailIcon size={20} />,
    text: 'sorin.craciunescu84@gmail.com'
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 14 July, 1984'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Edmond Nicolau Technical College'
  },
  {
    icon: <HomeIcon size={20} />,
    text: '48 Alexandru Serbanescu, 1-st Sector, Bucharest, Romania'
  }
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Academia de Studii Economice',
        qualification: 'Statistics and Economics Informatics',
        date: '2002 - 2004'
      },
      {
        university: "Coder's Lab",
        qualification: 'JavaScript Software engineer',
        date: '2019 - 2019'
      },
      {
        university: 'Wild Code School',
        qualification: 'Full Stack Software Engineer',
        date: '2019 - 2020'
      },
      {
        university: 'ChainShot Bootcamp (USA)',
        qualification: 'Ethereum Developer (Solidity)',
        date: '2020 - 2021'
      }
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'S.C. Royal Click S.R.L.',
        role: 'WAN/LAN Network Administrator',
        years: '2004 - 2013'
      },
      {
        company: 'MD Holdings Ltd.',
        role: 'IT Manager',
        years: '2012 - 2016'
      },
      {
        company: 'S.C. Full Stack Development S.R.L.',
        role: 'Front-end Developer',
        years: '2017 - Present'
      }
    ]
  }
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS'
      },
      {
        name: 'Front-end Development'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'React JS'
      },
      {
        name: 'Next JS'
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        imagePath: '/about/react.svg'
      },
      {
        imagePath: '/about/nextjs.svg'
      },
      {
        imagePath: '/about/vscode.svg'
      },
      {
        imagePath: '/about/figma.svg'
      },

      {
        imagePath: '/about/mongodb.svg'
      },
      {
        imagePath: '/about/postman.svg'
      },
      {
        imagePath: '/about/remix.svg'
      },
      {
        imagePath: '/about/truffle.svg'
      },
      {
        imagePath: '/about/ganache.svg'
      },
      {
        imagePath: '/about/tailwindcss.svg'
      }
    ]
  }
];

function About() {
  function getData(arr, title) {
    return arr.find((item) => item.title === title);
  }

  return (
    <section className='xl:h-[860px] pb-12 mt-2 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative '
              //imgSrc='/about/developer.png'
              //imgSrc='/about/sorin-about.png'
              imgSrc='/about/sorin-about-filters.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive websites, web-apps and
                      native mobile apps using cutting-edge technology,
                      delivering dynamic and engaging user experiences.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-x-4 mx-auto xl:mx-0'
                        >
                          <div className='text-primary'>{item.icon}</div>
                          <div className='text-muted-foreground'>
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>
                        English - <span>Full Professional Proficency</span>
                      </div>
                      <div>
                        Romanian - <span>Native Language</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  key={index}
                                  className='mb-4 flex gap-x-8 group'
                                >
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-muted-foreground text-lg leading-none mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, date } = item;
                              return (
                                <div
                                  key={index}
                                  className='mb-4 flex gap-x-8 group'
                                >
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-muted-foreground text-lg leading-none mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {date}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='flex flex-wrap gap-4 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imagePath } = item;

                          return (
                            <div
                              key={index}
                              className='w-1/3 xl:w-1/6 flex justify-center'
                            >
                              <Image
                                src={imagePath}
                                alt='tool'
                                width={48}
                                height={48}
                                className={
                                  imagePath === '/about/nextjs.svg' ||
                                  imagePath === '/about/remix.svg'
                                    ? 'dark:invert'
                                    : ''
                                }
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
