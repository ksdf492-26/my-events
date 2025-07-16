'use client';
import { useEffect, useState } from 'react';
import NewCards from '@/components/NewCards';
import { Card } from '@/types/Card';

interface Props {
  cards: Card[];
}

function index({ cards }: Props) {
  const [rotatingCards, setRotatingCards] = useState<Card[]>(cards);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);

      // após 500ms (tempo da transição), troca os cards e volta a exibir
      setTimeout(() => {
        setRotatingCards((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        setVisible(true); // fade in
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 overflow-x-auto px-4 py-6 ">
      {/* Card principal com fade suave */}
      <div
        className={`
          transition-opacity duration-500
          ${visible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <NewCards
          key={rotatingCards[0].id}
          date={rotatingCards[0].saleEnds}
          id={rotatingCards[0].id}
          name={rotatingCards[0].name}
          url={rotatingCards[0].url}
        />
      </div>

      {/* Outros cards fechados */}
      {rotatingCards.slice(1).map((card) => (
        <div
          key={card.id}
          className="w-[350px] h-[250px] flex-shrink-0 transition-opacity duration-500"
        >
          <img
            src={card.url}
            alt={card.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default index;
