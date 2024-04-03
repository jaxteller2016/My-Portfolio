import Image from 'next/image';

function DevImg({ containerStyles, imgSrc }) {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        fill
        priority
        alt='Sorin Craciunescu picture'
        sizes='(max-width: 768px) 100vw'
      />
    </div>
  );
}

export default DevImg;
