'use client';

import { useSearchParams, useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Cards from '@/data/Cards';
import Card from '@/components/CardsEvents';
import { ReadonlyURLSearchParams } from 'next/navigation';

export default function EventClient() {
  const params = useParams();
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  const router = useRouter();

  const [searchItem, setSearchItem] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // extrai params
  const categoryParameters = searchParams.get('category') ?? '';
  const cityParameters = searchParams.get('city') ?? '';
  const nameParameters = searchParams.get('name') ?? '';
  const removeFilter = () => {
    router.push('/events')
  }
  // opcional: inicializa searchItem com name da rota (ex: /events/[name])
  useEffect(() => {
    if (nameParameters) {
      setSearchItem(decodeURIComponent(nameParameters).toLowerCase());
    }
  }, [nameParameters]);

  // debounce simples
  useEffect(() => {
    const handle = setTimeout(() => setDebouncedSearch(searchItem.toLowerCase()), 250);
    return () => clearTimeout(handle);
  }, [searchItem]);

  // monta base de cards: city + category (interseção) ou só um deles ou todos
  const baseCards = useMemo(() => {
    let filtered = Cards;

    if (cityParameters) {
      filtered = filtered.filter(
        (c) =>
          typeof c.city === 'string' &&
          c.city.toLowerCase().includes(cityParameters.toLowerCase())
      );
    }

    if (categoryParameters) {
      filtered = filtered.filter(
        (c) =>
          typeof c.category === 'string' &&
          c.category.toLowerCase() === categoryParameters.toLowerCase()
      );
    }

    return filtered;
  }, [cityParameters, categoryParameters]);

  // aplica busca sobre baseCards
  const events = useMemo(() => {
    if (!debouncedSearch) return baseCards;
    return baseCards.filter((event) =>
      event.name.toLowerCase().includes(debouncedSearch)
    );
  }, [baseCards, debouncedSearch]);

  return (
    <section className="container">
      <div className="flex flex-col items-center justify-center p-5 gap-3">
        <div className="flex items-center justify-between gap-2 bg-sky-950 rounded-lg w-[570px] shadow-gray-900 shadow-xs">
          <div className="h-12 p-3 w-[500px] rounded-lg flex items-center">
            <input
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Buscar eventos"
              className="outline-none w-full bg-transparent text-white"
            />
          </div>
        </div>

        <div className="w-full flex flex-col relative items-center justify-center">
          <div className="text-white   self-start w-full flex flex-col  gap-3 items-start p-5 text-3xl">
            {
              cityParameters || categoryParameters &&
              <div onClick={removeFilter} className='w-fit rounded-4xl  cursor-pointer text-lg bg-sky-950 p-2'>
                {
                  categoryParameters &&
                  categoryParameters
                }
                {
                  cityParameters &&
                  cityParameters
                }
              </div>
            }
            {
              searchItem.trim() != "" &&
              <div className='font-bold text-2xl'>
                Resultado para: {searchItem}
              </div>
            }

          </div>
          <div className="grid grid-cols-4 gap-5 overflow-y-scroll h-[500px] w-full">
            {events.length > 0 && <Card cards={events} />}
          </div>
          <div className="absolute top-25 w-[500px]">
            {events.length === 0 && (
              <div className="text-red-500 border-2 rounded-xl w-[600px] flex items-start self-start font-bold p-5">
                Nenhum evento encontrado.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
