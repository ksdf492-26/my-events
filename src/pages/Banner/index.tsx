'use client'
import { FaSearch } from "react-icons/fa";
import Data from '@/data/Cards'
import Card from '@/components/CardsEvents'
import { useState } from "react";
import { useRouter } from "next/navigation";

function Index() {
    const date = new Date();
    const dateLatest = date.toLocaleDateString("pt-BR", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
    const [search, setSearch] = useState('');
    const router = useRouter();
    function SearchEvent() {
        if (!search.trim()) return;
        router.push(`/events?name=${encodeURIComponent(search)}`);
    }

    return (
        <div className="bg-[url(/backgrounds/img-02.png)] bg-sky-900/30 bg-no-repeat bg-cover  h-[500px] relative">
            <div className="absolute top-0 w-full">
                <section className="container">
                <div className="w-full flex items-center justify-between p-15">
                    <div className="flex flex-col gap-5">
                        <div className="text-3xl">Olá, faça seu login!</div>
                        <div className="text-lg text-gray-400">{dateLatest}</div>

                        <div className="flex items-center bg-sky-950 rounded-lg justify-between w-96 shadow-gray-900 shadow-xs">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                className="p-3 flex-1 outline-none border-none"
                                placeholder="Pesquise seu evento..."
                            />
                            <div
                                onClick={SearchEvent}
                                className="bg-sky-900 p-3 rounded-lg cursor-pointer"
                            >
                                <FaSearch size={25} className="text-gray-300" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 w-[550px] h-[300px] overflow-hidden overflow-x-scroll">
                        {
                            Data.map(data => (
                                <Card key={data.id} data={data} />
                            ))
                        }
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Index;
