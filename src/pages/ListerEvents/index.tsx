'use client'
import ListerCards from '@/components/ListerCards'
import { ListerEvents } from '@/types/ListerEvents'
function index ({CardOne,CardTwo,CardThree}:ListerEvents) {
    return (
        <>
        <section className="container">
            <div className="bg-sky-950 flex flex-col w-screen p-5">
            <ListerCards key={CardOne.title} Cards={CardOne.data} title={CardOne.title} /> 
            <ListerCards key={CardTwo.title} Cards={CardTwo.data} title={CardTwo.title} />
            {
                CardThree &&
                <ListerCards key={CardThree.title} Cards={CardThree.data} title={CardThree.title} />
            }
            
            </div>
        </section>
        </>
    )
}

export default index