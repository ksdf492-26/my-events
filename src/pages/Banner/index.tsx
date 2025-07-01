'use client'
import { FaSearch } from "react-icons/fa";
import CardsEvents from '@/components/CardsEvents'
import Data from '@/data/Cards'
import Card from '@/components/CardsEvents'
function index() {
    const date = new Date();
    const dateLatest = date.toLocaleDateString("pt-BR", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    return (
        <section className="container">
            <div className="bg-[url('/backgrounds/Img-02.png')] bg-cyan-950  w-screen flex items-center justify-between p-15">
                <div className="flex flex-col gap-5">
                    <div>
                        <div className="text-3xl">
                            Olá, faça seu login!
                        </div>
                        <div className="text-lg text-gray-400">
                            {dateLatest}
                        </div>
                    </div>
                    <div className="flex items-center bg-sky-950 rounded-lg justify-between w-96 shadow-gray-900 shadow-xs">
                        <input type="text" className="p-3 flex-1 outline-none border-none" placeholder="Pesquise seu evento..." />
                        <div className="bg-sky-900 p-3 rounded-lg cursorpo ">
                            <FaSearch size={25} className="text-gray-300" />

                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 w-[550px] h-[300px] overflow-hidden overflow-x-scroll">
                    <Card cards={Data} />
                </div>

            </div>

        </section>
    )
}

export default index;