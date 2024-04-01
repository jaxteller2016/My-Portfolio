'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.youtube.com/channel/UCbRYZ5EcJPVhniwZQk7jW3A',
    name: <RiYoutubeFill />
  },
  {
    path: 'https://www.linkedin.com/in/sorin-craciunescu/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/jaxteller2016',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.facebook.com/sorin.craciunescu.77/',
    name: <RiFacebookFill />
  },
  {
    path: 'https://www.instagram.com/digitalanarchy2013/',
    name: <RiInstagramFill />
  }
];

function Socials({ containerStyles, iconsStyles }) {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target='_blank'>
          <div className={iconsStyles}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Socials;
