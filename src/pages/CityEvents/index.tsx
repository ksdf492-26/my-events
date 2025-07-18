'use client'
import { useEffect, useRef, useState } from 'react'
import Card from '@/components/CardCity'
import City from '@/data/City'
function Index() {
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  const [cityList, setCityList] = useState(City)

  useEffect(() => {
    const scrollToMiddle = (container: HTMLDivElement | null) => {
      if (container) {
        const cardWidth = 90
        const gap = 20 // gap-5 = 1.25rem = 20px
        container.scrollLeft = (cardWidth + gap) * 1.5
      }
    }

    scrollToMiddle(scrollRef1.current)
    scrollToMiddle(scrollRef2.current)
  }, [cityList])

  useEffect(() => {
    const interval = setInterval(() => {
      setCityList((prev) => {
        const first = prev[0]
        const rest = prev.slice(1)
        return [...rest, first]
      })
    }, 3500) // troca a cada 3 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container">
      <div>
        <div className="flex flex-col font-medium gap-4 p-10">
          <div className="text-2xl">
            Os melhores acontecimentos das cidades
          </div>

          <div
            ref={scrollRef1}
            className="flex gap-3 items-center overflow-x-auto h-[650px] w-full py-4 px-4"
          >
            {
              cityList.map((city, index) => (
                <Card
                  key={city.name}
                  name={city.name}
                  url={city.url}
                  index={index}
                />
              ))
            }
          </div>
        </div>

        <div className="flex flex-col font-medium gap-4 p-10">
          <div className="text-2xl">
            Cidades próximas a mim
          </div>
          <div
            ref={scrollRef2}
            className="flex items-center gap-3 overflow-x-auto h-[650px] w-full py-4 px-4"
          >
            {
              cityList.map((city,index) => (
                <Card key={city.name} name={city.name} url={city.url} index={index}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
