'use client'

import Cards from '@/data/Cards';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Card from '@/components/CardsEvents';
import { SiNamesilo } from 'react-icons/si';
export function index() {
    const params = useParams();
    const [searchItem, setSearchItem] = useState('');
    const { name } = params as { name: string };
    const raw = name
    const search = decodeURIComponent(raw).toLowerCase();
    const events = Cards.filter(event =>
        event.name.toLowerCase().includes(searchItem)
    );
    useEffect(() => {
        setSearchItem(search);
    }, [search]);

    return (
        <section className='container'>
        
            <div className='flex flex-col  items-center justify-center p-5 gap-3'>
                <div className='flex items-center justify-between gap-2 bg-sky-950 rounded-lg w-[570px] shadow-gray-900 shadow-xs'>
                    <div className=' h-12 p-3 w-[500px] rounded-lg flex items-center'>
                        <input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder='Buscar eventos' className='outline-none' />
                    </div>

                </div>
                <div className='w-full flex flex-col relative items-center justify-center'>
                    <div className="text-white self-start w-full flex items-start p-5 text-3xl">
                        {events.length} resultados para: "{searchItem}"</div>
                    <div className='grid grid-cols-4 gap-5 overflow-y-scroll h-[500px] w-full'>
                        {events.length > 0 &&

                            <Card cards={events} />

                        }

                    </div>
                    <div className='absolute top-25  w-[500px] '>

                        {
                            events.length === 0 && (
                                <div className="text-red-500 border-2 rounded-xl w-[600px] flex items-start self-start font-bold p-5">
                                    Nenhum evento encontrado.
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export default index