import Category from '@/data/Category'
import Cards from '@/data/Cards'
import Card from '@/components/CardsEvents'
import NewCards from '@/components/NewCards'
function index() {
    return (
        <section className="container">
            <div className="w-screen flex flex-col items-center p-10 bg-[#001F3D] gap-10">
                <div className=' w-full'>
                    <div className="font-medium text-2xl mb-10 ">
                        As melhores categorias
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        {
                            Category.map(category => (
                                <div key={category.name} className=" cursor-pointer h-[200px] flex flex-col justify-center items-center">
                                    <div className="bg-[#045174] rounded-full w-[140px] h-[140px] flex items-center justify-center">
                                        <img src={category.url} alt="" />
                                    </div>
                                    <div className="text-xl font-medium">
                                        {category.name}
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className='w-full bg-sky-950 rounded-4xl flex items-center justify-between'>
                    <div>
                        <img src="./mineBanner.png" alt="" />
                    </div>
                    <div>
                        <div className='font-bold text-4xl'>
                            É um produtor de eventos?
                        </div>
                        <div className='text-gray-500 font-medium'>
                            crie seus eventos conosco e veja seus eventos bonbando!
                        </div>
                    </div>
                    <div className='p-5 rounded-2xl font-medium text-2xl m-10 bg-[#001F3D] cursor-pointer'>
                        sou produtor
                    </div>
                </div>
                <div className='w-full'>
                    <div className='text-2xl font-medium mb-5 flex items-center'>
                        Eventos mais vistos nas ultimas 24 horas
                    </div>
                    <div className='flex overflow-y-scroll h-[350px] w-full gap-10'>
                        <Card cards={Cards} />
                    </div>
                </div>
                <div className='w-full '>
                    <div className='text-2xl font-medium mb-5 flex items-center'>
                        em destaques na semana
                    </div>
                    <div className="w-full flex items-center gap-6 overflow-x-auto px-4 py-6">
                        <NewCards />
                        <NewCards />
                        <NewCards />
                        <NewCards />
                        <NewCards />
                        <NewCards />
                        <NewCards />
                        <NewCards />
                    </div>

                </div>
                <div className='w-full bg-sky-950 rounded-4xl flex items-center justify-around'>

                    <div>
                        <div className='font-bold text-2xl'>
                            Não esta achando seus eventos?
                        </div>
                        <div className='text-gray-500 font-medium'>
                            Entre com a sua conta para ver os eventos que são a sua vibe!
                        </div>
                    </div>
                    <div className='p-3 rounded-2xl font-medium text-lg m-10 bg-[#001F3D] cursor-pointer uppercase'>
                        Entrar com login
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index