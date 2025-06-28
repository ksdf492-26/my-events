import Header from '@/include/Header'
import Footer from '@/include/Footer'
import Banner from '@/pages/Banner'
import ListerEvents from '@/pages/ListerEvents'
import Category from '@/pages/Category'
function index () {
    return (
        <>
        <main className='w-screen'>
            <Banner/>  
            <ListerEvents/>
            <Category/>
        </main> 
        </>
    )
}
export default index