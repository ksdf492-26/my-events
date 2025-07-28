'use client'
import Link from 'next/link';
import { FaMapMarker, FaSearch, FaUser } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Cards from '@/data/Cards';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
function index() {
    const pathname = usePathname() as string;
    const isEventPage = pathname.startsWith('/event/')
    const [search, setSearch] = useState<string>('');
    const events = Cards.filter(event =>
        event.name.toLowerCase().includes(search as string)
    );
    const router = useRouter();
    function SearchEvent() {
        if (!search.trim()) return;
        router.push(`/events/${encodeURIComponent(search)}`);
        setSearch('');
    }
    return (
        <header className="flex items-center justify-center bg-[#05182B] p-3">
            <section className="container">
                <nav className='flex items-center justify-between text-white'>
                    <div>
                        <Link href={'/'}>
                            <img src="/logo.png" alt="logo do site" className='w-16' />
                        </Link>
                    </div>
                    {
                        isEventPage && (
                            <div className='flex flex-col items-center justify-between relative z-10'>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-sky-800 border-2 h-11 p-2 w-[570px] border-white rounded-lg'>
                                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='w-full h-full outline-none' placeholder='Buscar eventos' />
                                    </div>
                                    <div onClick={SearchEvent} className='bg-sky-800 flex items-center justify-center w-14 p-2 h-11 border-2 border-white rounded-lg cursor-pointer'>
                                        <FaSearch size={20} />
                                    </div>

                                </div>
                                <div className='absolute left-0 list-none top-[50px]'>
                                    {
                                        search.trim() !== '' && (
                                            <div className='text-white w-[570px] rounded-lg flex flex-col gap-2 bg-sky-950'>

                                                {events.map(event => (
                                                    <li onClick={() => setSearch('')} key={event.id} className='py-1  cursor-pointer rounded-lg transition-all h-11 p-2 hover:border-2 hover:border-white hover:bg-sky-800 flex items-center'>
                                                        <Link className='!no-underline text-white' href={`/event/${event.id}`}>{event.name}</Link>
                                                    </li>
                                                ))}

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                    <div className='flex items-center gap-10 list-none'>
                        {
                            !isEventPage &&
                            <li className='flex items-baseline gap-1'>
                                <FaMapMarker />
                                Qualquer lugar
                            </li>
                        }
                        <li className='underline'>
                            Anuncie aqui!
                        </li>
                        <li className='cursor-pointer gap-1 bg-[#001F3D] rounded-lg shadow-lg'>
                            <Link href={'/login'} className='flex !no-underline items-baseline text-white gap-1 p-1 shadow-lg'>
                                <FaUser />
                                Perfil
                            </Link>

                        </li>
                    </div>
                </nav>
            </section>
        </header>
    )
}
export default index