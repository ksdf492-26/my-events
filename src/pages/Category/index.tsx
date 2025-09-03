'use client'
import Category from '@/data/Category'
import Cards from '@/data/Cards'
import Lister from '@/components/ListerCards'
import CardsRotating from '@/components/CardsRotating'
import BeComeProducer from '@/pages/BeComeProducer'
import Link from 'next/link'
function index() {
    return (
        <div className='bg-[#001F3D] w-screen'>
            <section className="container">
                <div className="w-full flex flex-col items-center p-10 gap-10">
                    <div className=' w-full'>
                        <div className="font-medium text-2xl mb-10 ">
                            As melhores categorias
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            {
                                Category.map(category => (
                                   <Link key={category.name} className='text-white !no-underline' href={`/events?category=${encodeURIComponent(category.name)}`}>
                                     <div  className=" w-32 cursor-pointer relative h-[150px] flex flex-col justify-end items-center transition-all">
                                        <div className="bg-[#045174] rounded-full absolute top-0 w-[110px] h-[110px] flex items-center justify-center transition-all hover:w-[120px] hover:h-[120px]">
                                            <img className='w-[80px] h-[80px]' src={category.url} alt="" />
                                        </div>
                                        <div title={category.name} className="cursor-default text-lg text-center font-medium line-clamp-1">
                                            {category.name}
                                        </div>
                                    </div>
                                   </Link>
                                ))
                            }

                        </div>

                    </div>

                    <BeComeProducer Producter={1} />
                    <div className='flex flex-col w-full p-5 h-[350px]'>
                        <Lister  Cards={Cards.map(card => card)} title='Eventos mais vistos nas ultimas 24 horas' />
                    </div>
                    <div className='w-full p-10 flex flex-col '>
                        <div className='text-2xl w-[96%] capitalize self-center font-medium mb-5 flex items-center'>
                            em destaques na semana
                        </div>
                        <div className="w-full">
                            <CardsRotating cards={Cards} />
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default index