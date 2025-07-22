'use client'

import { usePathname } from 'next/navigation';
import Cards from '@/data/Cards';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from '@/components/CardsEvents';
export function index() {
    const pathname = usePathname() as string;
    const [searchItem, setSearchItem] = useState('');
    const raw = pathname.split('/').pop() ?? '';
    const search = decodeURIComponent(raw).toLowerCase();

    const events = Cards.filter(event =>
        event.name.toLowerCase().includes(searchItem)
    );
    useEffect(() => {
        setSearchItem(search);
    }, [search]);

    return (
        <section className='container'>
            <div className='flex flex-col items-center justify-center p-5 gap-3'>
                <div className='flex items-center justify-between gap-2 bg-sky-950 rounded-lg w-[570px] shadow-gray-900 shadow-xs'>
                    <div className=' h-12 p-3 w-[500px] rounded-lg flex items-center'>
                        <input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder='Buscar eventos' className='outline-none' />
                    </div>

                </div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className="text-white self-start w-full flex items-start p-5 text-3xl">Resultados para: "{searchItem}"</div>
                    <div className='grid grid-cols-4 gap-5'>
                        {searchItem.trim() != '' && events.length > 0 &&
                            events.map(event => (
                                <Card key={event.id} cards={events} />
                            ))
                        }

                    </div>
                    {
                        searchItem.trim() == '' &&  (
                            <div className="text-blue-500 border-2 rounded-xl w-full flex items-start self-start font-bold p-5">
                               Faça sua busca
                            </div>
                        )
                    }
                    {
                        events.length === 0 &&  (
                            <div className="text-red-500 border-2 rounded-xl w-full flex items-start self-start font-bold p-5">
                                Nenhum evento encontrado.
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
export default index