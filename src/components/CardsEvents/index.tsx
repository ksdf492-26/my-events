import { Cards } from "@/types/Cards"
import Link from "next/link"

type Props = {
  data: Cards
}

function Index({ data }: Props) {

  if (!data) return null
  // desestruturando o objeto data
  const { id, url, name, distance } = data

  return (
    <div
      key={id}
      className="flex flex-col font-medium shadow-md shadow-gray-800 items-center flex-shrink-0 bg-sky-900 w-[195px] h-[225px] p-1 rounded-xl relative"
    >
      <div>
        <img src={url} alt={name} className="rounded-lg w-[213px] h-[130px]" />
      </div>
      <div className="m-3 text-center">
        <div className="text-lg line-clamp-1 cursor-pointer" title={name}>
          {name}
        </div>
        <div className="text-xs text-gray-400">{distance}</div>
      </div>
      <div className="p-2 rounded-xl w-32 text-center text-white cursor-pointer shadow-xs bg-[#05182B] font-bold absolute top-51 transition-all hover:w-36 hover:shadow-blue-300">
        <Link
          className="text-white !no-underline"
          href={`/event/${id}`}
        >
          ver evento
        </Link>
      </div>
    </div>
  )
}

export default Index
