'use client';

import { usePathname } from 'next/navigation';
import Cards from '@/data/Cards'
import DetailsEventPanel from '@/components/DetailsEventPanel'

import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
export default function ProdutoPage() {
  const pathname = usePathname() as string;

  // extrair o ID da URL, ex: /produto/123 → '123'
  const id = pathname.split('/').pop() as string;
  const events = Cards.filter(event => event.id == Number(id))
  const [value, setValue] = useState(0)


  return (
    events.map(({ saleEnds, name, location, address, distance, id, price, description, url }) => (

      <main key={id} className='flex flex-col gap-15'>
        <section className='container'>
          <div className='flex mt-10 gap-5 justify-between h-fit items-start '>
            <div className='flex flex-col justify-between h-full  gap-3'>
              <div className='w-[800px] rounded-xl h-[400px] mb-3'>
                <img className='w-full  h-full rounded-xl' src={url} alt="" />
              </div>
              <div className='flex items-center justify-between'>
                <div className=' flex flex-col gap-2'>
                  <div className='text-white text-3xl font-medium'>
                    {name}
                  </div>
                  <div className='flex items-baseline text-sm text-gray-300'>
                    <FaMapMarker /> {location}
                  </div>
                </div>
                <div className='text-xl bg-sky-800  rounded-xl w-[110px] h-[60px] flex flex-col items-center justify-center gap-1'>
                  <div className='flex items-center justify-center gap-1'>
                    <img src="/Star 1.png" alt="" />
                    <div className='text-xl'>
                      5,1
                    </div>
                  </div>
                  <div className='text-gray-400 text-[12px]'>
                    999  avaliações
                  </div>
                </div>
              </div>
              <div>
                <div className='text-2xl text-gray-400'>
                  Outros eventos da produtora
                </div>
                <div className='flex flex-col gap-10 mt-2'>
                  {
                    Cards.filter(event => event.id !== Number(id)).slice(0, 2).map(({ id, name, address, url }) => (
                      <div key={id} className='flex items-center p-2 gap-3 bg-sky-800 rounded-lg w-[550px] h-[160px]'>
                        <div>
                          <img className='w-[210px] h-[135px] rounded-xl ' src={url} alt="" />
                        </div>
                        <div className='flex flex-col justify-around h-full'>
                          <div className='flex flex-col justify-between'>
                            <div className='text-white text-2xl font-medium'>
                              {name}
                            </div>
                            <div className='text-gray-400 text-sm flex items-center gap-1'>
                              {address}
                            </div>
                          </div>
                          <div className='w-[210px] h-[60px] rounded-xl bg-sky-950 text-xl font-bold flex items-center justify-center cursor-pointer transition-all shadow-xs hover:shadow-blue-300'>
                            Ver Evento
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <DetailsEventPanel
              name={name}
              distance={distance}
              location={address}
              price={price}
              quantity={value}
              url={url}
              description={description}
              saleEnds={saleEnds}
              EventClick={{
                fewer() {
                  if (value > 0) {
                    setValue(value - 1);
                  }
                },
                more() {
                  setValue(value + 1);
                },
              }}

            />
          </div>
        </section>
        <section className='container'>
          <div className='flex flex-col gap-10'>
            <div>
              <div className='flex flex-col gap-3'>
                <div className='text-4xl font-bold text-white '>
                  Politicas do evento
                </div>
                <div className='text-2xl text-gray-400'>
                  Cancelamento de ingressos pagos
                </div>
                <div className='text-gray-500 text-base w-[600px]'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor sed temporibus! Provident facilis, numquam perferendis voluptatem aliquam obcaecati ex tempora ratione eaque non fugit sint deleniti voluptatibus harum explicabo?
                </div>
                <div className='p-1 text-gray-400 text-sm rounded-lg border-[1px] border-gray-500 w-fit'>
                  como cancelar meu ingresso
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='text-4xl font-bold text-white'>
                Localização
              </div>
              <div className='text-2xl
        text-gray-400'>
                {location}
              </div>
              <div className='text-gray-400 text-base '>
                {address}
              </div>
              <div className='p-1 text-gray-400 text-sm rounded-lg border-[1px] border-gray-500 w-fit'>
                ver Localização em tempo real
              </div>
              <div className='underline text-gray-400 flex items-center gap-3'>
                <div>
                  termos e politicas
                </div>
                <div>
                  denunciar este evento
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='bg-sky-900/80 p-15 '>
          <section className='container'>
            <div className='flex flex-col gap-3'>
              <div className='text-2xl'>
                Informações do produtor
              </div>
              <div className='flex items-center gap-3'>
                <div>
                  <img src={url} className='w-24 h-24 rounded-full' alt="" />
                </div>
                <div>
                  <div>
                    <div className='text-2xl font-medium'>
                      Nome da produtora
                    </div>
                    <div className='text-gray-400 text-xs'>
                      Produtora de eventos noturnos
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center w-fit ml-20 justify-between gap-3'>
                <div className='w-fit p-1 rounded-lg border-2 border-white'>
                  ver perfil
                </div>
                <div className="w-fit p-1 rounded-lg font-bold border-2 border-white">
                  Fale com a produtora
                </div>
                <div className="w-fit p-1 rounded-lg font-bold border-2 border-white">
                  Ver mais eventos
                </div>

              </div>
            </div>
          </section>
        </div>
        <section className='container'>
          <div className='flex itesm-center justify-between p-20 h-[300px]'>
            <div className='flex flex-col w-fit items-center text-2xl gap-2 '>
              <div>
                Opções de compra
              </div>
              <div>
                <img src="/Group 1574.png" alt="" />
              </div>
            </div>
            <div className='flex flex-col border-2 border-transparent w-[400px] border-l-gray-500 border-r-gray-500 items-center text-center gap-2 text-2xl'>
              <div>
                Compre com segurança 
              </div>
              <div className='text-sm text-gray-400 w-[270px]'>
                Suas compras não são criptografadas e não serão salvas em nosso sistema
              </div>
              <div className='flex items-center gap-5'>
                <div className='w-fit h-fit bg-white p-2 rounded-full'>
                  <img src="/fi-br-comment-check.png" alt="" />
                </div>
                  <div className='w-fit h-fit bg-white p-2 rounded-full'>
                  <img src="/fi-br-comment-check.png" alt="" />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center text-center gap-2'>
              <div className='text-2xl '>
                Precisando de ajuda?
              </div>
              <div className='text-gray-400 text-sm w-[270px]'>
                Entre em contato com o produtor, ou acesse a <span className='underline text-white'>nossa central de dúvidas</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    ))
  );
}
