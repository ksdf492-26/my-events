import { ListerCards } from "@/types/ListerCards";
import Card from '@/components/CardsEvents'
function index({title,Cards}:ListerCards) {
    
    return (
        <>
            <div className='text-2xl font-medium mb-5 flex items-center'>
               {title}
            </div>
            <div className='flex overflow-y-scroll h-[350px] w-full gap-10'>
                <Card cards={Cards} />
            </div>
        </>
    )
}
export default index;