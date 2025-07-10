import { Cards } from "@/types/Cards"
import Link from "next/link"

function index({cards}:Cards) {
    return (
        cards.map(card => (
            <div key={card.id} className="flex flex-col font-medium shadow-md shadow-gray-800 items-center flex-shrink-0 bg-sky-900 w-[195px] h-[225px] p-1 rounded-xl relative">
            <div className="">
                <img src={card.url} alt="" className='rounded-lg w-[213px] h-[130px]' />
            </div>
            <div className="m-3 text-center">
                <div className="text-lg line-clamp-1 cursor-pointer" title={card.name}>
                   {card.name}
                </div>
                <div className="text-xs text-gray-400">
                  {card.distance}
                </div>
            </div>
            <div className="p-2 rounded-xl w-32 text-center cursor-pointer shadow-xs bg-[#05182B] font-bold absolute top-52  transition-all hover:w-36 hover:shadow-blue-300">
                <Link href={`event/${card.id}`}>
                ver evento
                </Link>
            </div>
        </div>
        ))
    )
}

export default index