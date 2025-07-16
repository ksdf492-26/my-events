'use client';

import { usePathname } from 'next/navigation';
import Cards from '@/data/Cards'
import DetailsEventPanel from '@/components/DetailsEventPanel'

import { useState } from 'react';
export default function ProdutoPage() {
  const pathname = usePathname() as string;

  // extrair o ID da URL, ex: /produto/123 → '123'
  const id = pathname.split('/').pop() as string;
  const events = Cards.filter(event => event.id == Number(id))
  const [value, setValue] = useState(0)


  return (
    events.map(({ saleEnds, name, distance, id, price,description, url }) => (

      <main key={id}>
        <section className=''>
          <div className='p-5 flex justify-between items-start'>
            <div>
              <img className='w-[880px] rounded-xl h-[400px]' src={url} alt="" />
            </div>

            <DetailsEventPanel
              name={name}
              distance={distance}
              price={price}
              quantity={value}
              url={url}
              description={description}
              saleEnds={saleEnds}
              EventClick={{
                fewer() {
                  if (value > 0) {
                    setValue(value - 1);
                  }
                },
                more() {
                  setValue(value + 1);
                },
              }}

            />
          </div>
        </section>
      </main>
    ))
  );
}
