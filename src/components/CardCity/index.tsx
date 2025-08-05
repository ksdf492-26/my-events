'use client'
import { City } from "@/types/City";
import { useRouter } from "next/navigation";

type Props = City & {
  index?: number;
};

function CardCity({ name, url, index }: Props) {
  const router = useRouter()
  const isDestaque = index === 2;
  const cityFilter = (city:string) => {
      router.push(`/events?city=${encodeURIComponent(city)}`);
  }
  return (
    <div
      className={`
        relative overflow-hidden transition-all duration-500
        rounded-xl border-[1px] border-blue-500 cursor-pointer
        ${isDestaque ? 'min-w-[350px] h-[500px] ml-10 mr-10' : 'min-w-[250px] h-[400px]'}
      `}
      onClick={() => isDestaque?cityFilter(name) : undefined}
    > 
      <div
        className={`
          w-full h-full absolute left-0 z-10 text-white  font-medium capitalize drop-shadow-md
          flex flex-col items-center justify-center text-center
          transition-all duration-500
          ${isDestaque ? 'top-5 justify-start text-3xl' : 'justify-center text-2xl'}
        `}
      >
        {name}
      </div>

      <div className="h-full w-full relative">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={url}
          alt={name}
        />
        <div className={`absolute inset-0 ${isDestaque?'' : 'bg-black/80'}  rounded-xl`} />
      </div>
    </div>
  );
}

export default CardCity;
