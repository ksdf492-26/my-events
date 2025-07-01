'use client'
import { City } from "@/types/City";

function index({ name, url }: City) {
  return (
    <div
      className="group min-w-[250px] rounded-xl border-[1px] border-blue-500 h-[400px] relative overflow-hidden transition-all duration-500 hover:min-w-[300px] hover:h-[450px] hover:ml-10 hover:mr-10 cursor-pointer"
    >
      {/* Texto da cidade */}
      <div
        className="transition-all duration-500 w-full h-full absolute flex flex-col items-center justify-center left-0
                   text-center text-2xl font-medium capitalize z-10 text-white drop-shadow-md
                   group-hover:-translate-y-52"
      >
        {name}
      </div>

      {/* Imagem + overlay */}
      <div className="h-full w-full relative">
        <img
          className="h-full rounded-xl w-full object-cover"
          src={url}
          alt={name}
        />
        <div
          className="absolute inset-0 bg-black/60 transition-all duration-500 rounded-xl group-hover:opacity-30"
        />
      </div>
    </div>
  );
}

export default index;
