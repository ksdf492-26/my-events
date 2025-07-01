'use client'
import { useState } from "react";

function NewCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`
        relative rounded-lg overflow-hidden bg-sky-900 flex-shrink-0 flex
        transition-all cursor-pointer duration-500 ease-in-out
        ${expanded ? "w-[600px] h-[350px]" : "w-[300px] h-[250px]"}
      `}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="w-[300px] h-full flex-shrink-0">
        <img src="./new card.png" alt="evento" className="w-full h-full object-cover" />
      </div>

      {expanded && (
        <div className="flex flex-col justify-around p-4 items-center text-white w-full transition-opacity duration-500">
          <div className="font-medium">Sex, 14 de fevereiro, 18:00h</div>
          <div className="text-2xl font-bold w-[250px]">Studio Beer anuncia show ao vivo</div>
          <button className="p-3 bg-sky-950 rounded-xl cursor-pointer  w-fit">
            Ver o evento
          </button>
        </div>
      )}
    </div>
  );
}

export default NewCard;
