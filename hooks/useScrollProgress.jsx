import React, { useEffect, useState } from 'react';

export default function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    // event
    window.addEventListener('scroll', updateScrollCompletion);

    // cleanup
    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);
  return completion;
}
