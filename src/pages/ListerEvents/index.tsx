import ListerCards from '@/components/ListerCards'
import Data from  '@/data/Cards'
function index () {
    return (
        <>
        <section className="container">
            <div className="bg-sky-950 flex flex-col w-screen p-10">
            <ListerCards Cards={Data} title='Public' /> 
            <ListerCards Cards={Data} title='Novos eventos' /> 
            
            </div>
        </section>
        </>
    )
}

export default index