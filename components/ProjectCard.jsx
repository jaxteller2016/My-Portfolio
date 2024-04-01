import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

function ProjectCard({ project }) {
  const badgeColor =
    project.category === 'FullStack'
      ? 'bg-badge-Fullstack'
      : project.category === 'ReactJS'
      ? 'bg-badge-React'
      : 'bg-badge-JS';

  return (
    <Card className='group overflow-hidden relative h-[500px] xs:h-[560px] xl:h-[550px]'>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-10 shadow-2xl'
            src={project.image}
            width={400}
            height={350}
            alt='Project Image'
            priority
          />
          {/* btn links */}
          <div className='flex gap-x-4'>
            <Link
              href={project.link}
              target='_blank'
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all border duration-200'
            >
              <Link2Icon className='w-6 h-6 text-white' />
            </Link>
            <Link
              href={project.github}
              target='_blank'
              className='bg-secondary border w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
            >
              <Github className='w-6 h-6 text-white' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge
          className={
            badgeColor +
            ' uppercase text-sm font-medium mb-2 absolute top-4 left-5'
          }
        >
          {project.category}
        </Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
      </div>
    </Card>
  );
}

export default ProjectCard;
