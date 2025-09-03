import { FaGoogle } from "react-icons/fa"
import Link from "next/link"

export function NoLogIn() {
  const style =
    "border-2 border-gray-700 w-[250px] h-[60px] rounded-lg flex items-center justify-center gap-3 text-lg font-medium transition-all hover:bg-sky-950/50 cursor-pointer"

  return (
    <div className="fixed inset-0 pointer-events-auto bg-sky-950/90 z-10 flex items-center justify-center">
      <div className="bg-sky-800/90 w-[700px] h-[400px] rounded-xl shadow-lg shadow-black/40 flex flex-col items-center justify-start pt-10 gap-12 animate-fadeIn">
        <div className="flex flex-col gap-3 text-center px-6">
          <div className="text-3xl font-bold text-white">
            Faça Login na Plataforma
          </div>
          <div className="text-xl font-medium text-gray-300">
            Conecte-se com sua conta do Google, ou crie uma conta
          </div>
        </div>

        <div className="flex items-center gap-10">
          <Link href="/auth/google" className={style}>
            <FaGoogle size={30} />
            Google
          </Link>

          <Link href="/register" className={style}>
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  )
}
