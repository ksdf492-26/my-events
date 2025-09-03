
import Banner from '@/pages/Banner'
import Category from '@/pages/Category'
import BeComeProducer from '@/pages/BeComeProducer'
import CityEvents from '@/pages/CityEvents'
import data from '@/data/Cards'
import Lister from '@/components/ListerCards'
function index() {

return (
        <>
            <main className='w-screen'>

                <Banner />
                <div className='p-10 bg-sky-950' >
                    <section className='container'>
                        <div>
                            <Lister title='Populares' Cards={data} />
                        </div>
                        <div>
                            <Lister title='Os mais comentados' Cards={data} />
                        </div>
                    </section>
                </div>
                <Category />
                <div className='p-10 bg-sky-950/50 mb-15' >
                    <section className='container'>
                        <div>
                            <Lister title='Populares' Cards={data} />
                        </div>
                        <div>
                            <Lister title='Os mais comentados' Cards={data} />
                        </div>
                    </section>
                </div>
                <BeComeProducer Producter={2} />
                <div className='p-10 bg-sky-950/50 mt-15' >
                    <section className='container'>
                        <div>
                            <Lister title='Shows e festas' Cards={data} />
                        </div>
                        <div>
                            <Lister title='Teatros e espetaculos' Cards={data} />
                        </div>
                        <div>
                            <Lister title='Esportes e adrenalina' Cards={data} />
                        </div>
                    </section>
                </div>
                <CityEvents />
                <div className='p-10 bg-sky-950/50 mb-15' >
                    <section className='container'>
                        <div>
                            <Lister title='Paisagens e tours' Cards={data} />
                        </div>
                        <div>
                            <Lister title='Para baixinhos' Cards={data} />
                        </div>
                    </section>
                </div>
                <BeComeProducer Producter={3} />
            </main>
        </>
    )
}
export default index