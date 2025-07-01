import Banner from '@/pages/Banner'
import ListerEvents from '@/pages/ListerEvents'
import Category from '@/pages/Category'
import BeComeProducer from '@/pages/BeComeProducer'
import CityEvents from '@/pages/CityEvents'
import data from '@/data/Cards'
function index() {
    return (
        <>
            <main className='w-screen'>
                <Banner />
                <ListerEvents CardOne={{ title: 'Publico', data: data }} CardTwo={{ title: 'Os mais comentados', data: data }} />
                <Category />
                <BeComeProducer Producter={2} />
                <ListerEvents CardOne={{ title: 'Shows e Festas', data: data }} CardTwo={{ title: 'Teatro e espetaculos', data: data }} CardThree={{ title: 'Espotes e Adrenalina', data: data }} />
                <CityEvents />
                <ListerEvents CardOne={{title:'Passeios e tours',data:data}} CardTwo={{title:"Para baixinhos",data:data}}/>
                <BeComeProducer Producter={3}/>
            </main>
        </>
    )
}
export default index