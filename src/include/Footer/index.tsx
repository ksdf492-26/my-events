import { FaApple } from "react-icons/fa"
import { SiGoogleplay } from 'react-icons/si'
import Store from '@/components/Footer/Store'
import Line from '@/components/Footer/Line'
function index() {
    return (
        <footer className="flex items-center justify-center bg-[#045174] p-10 flex-col  ">
            <section className="container">
                <nav>
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <img src="/logo.png" className="w-16" alt="" />
                        </div>
                        <ul className="flex items-center gap-5">
                            <li className="text-2xl font-medium ">
                                Compre pelo nosso APP
                            </li>
                            <Store Icon={FaApple} />
                            <Store Icon={SiGoogleplay} />
                        </ul>
                    </div>
                    <ul className="flex items-center justify-between border-t-[1px] border-b-[1px] border-gray-500 p-10 text-xl capitalize">
                        <Line text={[
                            "Encontrar eventos",
                            "Cidades",
                            "para produtores",
                            "Anuncie seu evento",
                            "Ajuda",

                        ]} />
                        <li className="text-xs">
                            Ver categorias
                        </li>
                    </ul>
                    <ul className="flex items-center capitalize justify-start text-lg gap-5 p-5 text-gray-400">
                        <Line text={[
                            "home",
                            "sobre nós",
                            "blog",
                            "carreiras",
                            "produtores",
                            "etica de conduta",
                            "politica de privacidade",
                            "direito dos usuarios"
                        ]} />

                    </ul>
                </nav>
            </section>
        </footer>
    )
}
export default index