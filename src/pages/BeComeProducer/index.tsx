'use client'
import { Producer } from "@/types/Producer"
import { useEffect, useState } from "react"

function index({ Producter }: Producer) {
 const text = ['rápida', 'barata', 'segura'];
  const [indice, setIndice] = useState(0);
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAnimar(true); 

      setTimeout(() => {
        setIndice((prev) => (prev + 1) % text.length); 
        setAnimar(false); 
      }, 500); 
    }, 1950);

    return () => clearInterval(intervalo);
  }, []);
    return (
        <>

            {
                Producter == 1 &&
                <div className='w-full bg-sky-950 rounded-4xl flex items-center justify-between'>
                    <div>
                        <img className='w-64' src="./mineBanner.png" alt="" />
                    </div>
                    <div>
                        <div className='font-bold text-4xl'>
                            É um produtor de eventos?
                        </div>
                        <div className='text-gray-500 font-medium'>
                            crie seus eventos conosco e veja seus eventos bonbando!
                        </div>
                    </div>
                    <div className='p-3 rounded-2xl font-medium text-2xl m-10 bg-[#001F3D] cursor-pointer'>
                        sou produtor
                    </div>
                </div>
            }
            {
                Producter == 2 &&
                <div className="bg-sky-950">
                    <section className="container">
                        <div className="flex items-center h-80  justify-between mb-10 w-full">
                            <div className="flex justify-center items-center  font-medium p-5">
                                <div className=" flex flex-col gap-1" >
                                    <div className="text-4xl">
                                        Para produtor de Eventos
                                    </div>
                                    <div className="text-lg text-gray-500 w-2/3 ">
                                        Crie ou entre com a sua conta de produtor de eventos e veja só os benefícios de anunciar conosco!
                                    </div>
                                    <div className="p-3 self-start mt-2 cursor-pointer w-[200px] bg-[#001F3D] rounded-4xl text-center font-bold uppercase ">
                                        Quero anunciar
                                    </div>
                                </div>

                            </div>
                            <div className="flex-1 flex justify-end items-center h-full w-full">
                                <img className=" h-full" src="./BeComeProducer.png" alt="" />
                            </div>
                        </div>
                    </section>
                </div>

            }
            {
                Producter == 3 &&
  <section className="container">
      <div className="flex items-center m-20 bg-sky-950 justify-between rounded-[47px]">
        <div>
          <div className="flex flex-col p-10">
            <div className="font-bold text-4xl line-clamp-3 w-[400px] mb-1 relative h-[130px]">
              Promova eventos
              de forma
              <span
                className={`ml-2 text-[#001020] bg-sky-950 absolute transition-all duration-500 ease-in-out
                  ${animar ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'}`}
              >
                {text[indice]}
              </span>
              <br />
              Na HepHere
            </div>

            <div className="font-medium text-xl w-[500px] text-gray-500 line-clamp-2 overflow-hidden mb-10">
              Crie ou entre com a sua conta de produtor de eventos e veja só os benefícios de anunciar conosco!
            </div>

            <div className="bg-[#045174] cursor-pointer p-2 w-48 text-center font-medium uppercase rounded-lg">
              Quero anunciar
            </div>
          </div>
        </div>
        <div>
          <img src="./productor-02.png" alt="" />
        </div>
      </div>
    </section>
            }
        </>
    )
}

export default index 