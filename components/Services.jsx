import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      "I craft visually stunning and user-friendly websites tailored to your brand's identity and goals. I specialized in creating engaging online experiences that captivate your audience. Let me transform your digital presence into a powerful tool for growth and success."
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description:
      "Crafting stunning online experiences, our web development service seamlessly blends creativity with functionality. Elevate your digital presence with bespoke designs and flawless user experiences tailored to your brand's unique identity."
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description:
      'Transforming visions into captivating digital realities, our app development service combines innovation with user-centric design. From concept to launch, we craft intuitive mobile solutions that inspire and engage users worldwide.'
  }
];

function Services() {
  return (
    <section className='mb-12 xl:mt-16 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((service, index) => {
            return (
              <Card
                key={index}
                className='w-full max-w-[424px] xs:h-[360px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[120px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center xs:mt-14 xl:mt-2'>
                  <CardTitle className='mb-4 mt-4'>{service.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
