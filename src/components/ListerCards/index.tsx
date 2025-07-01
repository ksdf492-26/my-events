'use client'
import { useRef } from 'react'
import { ListerCards } from "@/types/ListerCards";
import Card from '@/components/CardsEvents';

function Index({ title, Cards }: ListerCards) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className='text-2xl self-center font-medium mb-5 flex items-center w-[90%]'>
        {title}
      </div>
      <div className="flex items-baseline gap-2 justify-center w-full">
        <button onClick={() => scroll('left')}>
          <img className="w-12 cursor-pointer transition-all" src="/arrowLeft.png" alt="Scroll Left" />
        </button>
        
        <div
          ref={scrollRef}
          className='flex overflow-x-auto scroll-smooth h-[350px] w-full gap-5 px-2'
        >
          <Card cards={Cards} />
        </div>

        <button onClick={() => scroll('right')}>
          <img className="w-12 cursor-pointer transition-all" src="/arrowRight.png" alt="Scroll Right" />
        </button>
      </div>
    </>
  );
}

export default Index;
