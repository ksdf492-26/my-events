
import NewCard from '@/types/NewCard'
import Link from 'next/link';

function index({ date, id, name, url }: NewCard) {
  return (
    <div
      className={`
        relative rounded-lg overflow-hidden bg-sky-900 flex-shrink-0 flex
        w-[600px] h-[350px]
      `}
    >
      <div className="w-[300px] h-full flex-shrink-0">
        <img src={url} alt="evento" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col justify-around p-4 items-center text-white w-full transition-opacity duration-500">
        <div className="font-medium">
          {date.toLocaleDateString("pt-BR", {
          weekday: "short",
          day: "2-digit",
          month: "short",
        })}
        </div>
        <div className="text-2xl font-bold w-[250px]">{name}</div>
        <button className="p-3 bg-sky-950 !rounded-xl cursor-pointer w-fit">
          <Link href={`event/${id}`} className='!no-underline text-white font-bold'>
          Ver evento
          </Link>
        </button>
      </div>
    </div>
  );
}

export default index;
