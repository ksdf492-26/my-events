import { FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaUser } from 'react-icons/fa'; // Fa = Font Awesome

function index () {
    return (
        <header className="flex items-center justify-center bg-[#05182B] p-2">
            <section className="container">
                <nav className='flex items-center justify-between'>
                    <div>
                        <img src="./logo.png" alt="logo do site" className='w-16'/>
                    </div>
                    <ul className='flex items-center gap-10'>
                        <li className='flex items-baseline gap-1'>
                            <FaMapMarker/>
                            Qualquer lugar
                        </li>
                        <li className='underline'>
                            Anuncie aqui!
                        </li>
                        <li className='cursor-pointer flex items-baseline gap-1 bg-[#001F3D] p-1 rounded-lg shadow-lg'>
                            <FaUser/>
                            Perfil
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}
export default index