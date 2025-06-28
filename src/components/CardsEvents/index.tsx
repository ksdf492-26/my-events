import { Cards } from "@/types/Cards"

function index({cards}:Cards) {
    return (
        cards.map(card => (
            <div key={card.name} className="flex flex-col font-medium shadow-md shadow-gray-800 items-center flex-shrink-0 bg-sky-900 w-[210px] h-[240px] p-1 rounded-2xl relative">
            <div className="">
                <img src={card.url} alt="" className='' />
            </div>
            <div className="m-3 text-center">
                <div className="text-xl">
                   {card.name}
                </div>
                <div className="text-xs text-gray-400">
                  {card.distance}
                </div>
            </div>
            <div className="p-3 rounded-xl w-36 text-center cursor-pointer shadow-md shadow-gray-800 bg-[#05182B] font-bold absolute top-54 transition-all hover:w-40">
                ver evento
            </div>
        </div>
        ))
    )
}

export default index