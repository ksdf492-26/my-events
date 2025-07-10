import Link from 'next/link';
import { FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaUser } from 'react-icons/fa'; // Fa = Font Awesome

function index () {
    return (
        <header className="flex items-center justify-center bg-[#05182B] p-1">
            <section className="container">
                <nav className='flex items-center justify-between'>
                    <div>
                        <Link href={'/'}>
                        <img src="/logo.png" alt="logo do site" className='w-16'/>
                        </Link>
                    </div>
                    <ul className='flex items-center gap-10'>
                        <li className='flex items-baseline gap-1'>
                            <FaMapMarker/>
                            Qualquer lugar
                        </li>
                        <li className='underline'>
                            Anuncie aqui!
                        </li>
                        <li className='cursor-pointer gap-1 bg-[#001F3D] rounded-lg shadow-lg'>
                            <Link href={'/login'} className='flex items-baseline gap-1 p-1 shadow-lg'>
                                <FaUser/>
                            Perfil  
                            </Link>
                      
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}
export default index