import Card from '@/components/CardCity'
import City from '@/data/City'

function index() {
  return (
    <section className="container">
        <div>
              <div className='flex flex-col font-medium gap-4 p-10'>
        <div className='text-2xl'>
          Os melhores acontecimentos das cidades
        </div>
        <div className='flex items-center gap-5 overflow-x-auto w-full py-4'>
          {
            City.map(city => (
              <Card key={city.name} name={city.name} url={city.url} />
            ))
          }
        </div>
      </div>
        <div className='flex flex-col font-medium gap-4 p-10'>
        <div className='text-2xl'>
          Cidades próximas a mim
        </div>
        <div className='flex items-center gap-5 overflow-x-auto w-full py-4'>
          {
            City.map(city => (
              <Card key={city.name} name={city.name} url={city.url} />
            ))
          }
        </div>
      </div>
        </div>
    </section>
  )
}

export default index
