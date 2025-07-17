import { DetailsEventPanel } from "@/types/DetailsEventPanel";
import { FaMobileAlt, FaShoppingCart } from "react-icons/fa";

function index({ url, saleEnds, name,location, distance, quantity, price, description, EventClick }: DetailsEventPanel) {
  return (
    <>
      <div className='bg-sky-800 rounded-xl w-[342px] flex flex-col items-center font-medium justify-center'>
        <div className='relative m-3'>
          <img src="/location.png" alt="" />
          <div className='flex items-center justify-start gap-2 bg-sky-900/50 p-3 rounded-xl w-[90%] cursor-pointer absolute left-4 top-12 transition-all hover:top-12 hover:left-2 hover:w-[95%] hover:p-4 '>
            <div>
              <img className='w-10 h-8 rounded-full' src={url} alt="" />
            </div>
            <div>
              <div className='text-white text-sm'>
                {name}
              </div>
              <div className='self-start flex items-center text-gray-400 text-[10px] line-clamp-1'>
                {location}, {distance}
              </div>
            </div>
          </div>
        </div>
        {
          price > 0 &&
          <>
            <div className='bg-sky-950 capitalize w-[300px] mb-5 rounded-xl h-[170px] mt-2 p-3 flex flex-col gap-1'>
              <div className='flex items-center justify-between border-b-[1px] p-1 border-gray-500 '>
                <span className='text-base font-semibold'>Ingressos</span>
                <span className='flex items-baseline gap-2'>
                  <FaShoppingCart className='text-white' />
                  <div className='text-[#00E809] font-bold'>
                    {price * quantity}
                  </div>
                </span>
              </div>
              <div className='flex flex-col items-start justify-center border-b-[1px] border-gray-500'>
                <div className='flex items-center w-full justify-between'>
                  <span className='text-base font-semibold'>
                    entrada vip
                  </span>
                  <span className="flex items-center justify-between w-16">
                    <div
                      className="p-1 rounded-md flex items-center justify-center bg-sky-900 w-5 h-5 cursor-pointer transition-all"
                      onClick={() => EventClick.fewer()}
                    >
                      -
                    </div>

                    <div>
                      {quantity}
                    </div>

                    <div
                      className="rounded-md flex items-center justify-center bg-sky-900 w-5 h-5 cursor-pointer transition-all"
                      onClick={() => EventClick.more()}
                    >
                      +
                    </div>
                  </span>


                </div>
                <div className='font-bold text-[#00E809]'>
                  {price}
                </div>
                <div className='font-light text-gray-400 text-sm mb-1'>
                  Ingressos à venda até {saleEnds.toLocaleDateString()}
                </div>
              </div>
              <div className='self-start text-[13px] w-full mt-2 text-gray-400'>
                Você receberá uma confirmação no email
              </div>
            </div>
          </>
        }
        <div className='flex flex-col gap-4 border-b-[1px] p-3 border-gray-500'>
          <div className='text-xl font-bold'>
            Sobre o Evento
          </div>
          <div className='text-balance text-gray-300'>
            {description}
          </div>
        </div>
        <div className='w-full flex flex-col border-b-[1px] border-gray-500 items-center justify-center p-5 gap-10'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              <FaMobileAlt size={30} />
              <div>
                (68) 999999999
              </div>
            </div>
            <div className='bg-sky-500/40 p-[0.9px] w-14 text-center rounded-lg'>
              copiar
            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center'>
              <FaMobileAlt size={30} />
              <div>
                (68) 999999999
              </div>
            </div>
            <div className='bg-sky-500/40 p-[0.9px] w-14 text-center rounded-lg'>
              copiar
            </div>
          </div>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-500 items-center w-full p-5">
          <div className="text-2xl font-bold capitalize">
            {saleEnds.toLocaleDateString("pt-BR", { weekday: "long" })}
          </div>
          <div className="flex flex-col items-start text-base font-semibold">
            <div className="">
              {saleEnds.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
              })}
            </div>
            <div>
              {saleEnds.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}h
            </div>
          </div>
        </div>
        <div className="flex items-center  w-full justify-between p-3 ">
          <div className="ml-2 text-sm text-gray-400">
            Em parceira com 
          </div>
          <div>
            <img src="/logo.png" className="w-16"  alt="" />
          </div>
        </div>
        {
          price > 0 && 
          <>
          <div className="mb-5  border-t-[1px] border-gray-500 w-full flex items-center justify-center">
          <div className="bg-sky-950 font-bold cursor-pointer mt-5 text-lg p-3 rounded-lg w-40 text-center transition-all shadow-xs hover:w-44 hover:shadow-blue-300">
            Comprar
          </div>
        </div>
          </> 
        }
      </div>
    </>
  )
}

export default index