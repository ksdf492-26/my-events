
import { LoginAccont } from "@/types/LoginAccont";
import { useRouter } from "next/navigation"

function index ({Icon,text,route}:LoginAccont) {
    const Router = useRouter();
    const link = () => {
        Router.push(route)
    }
    return (
        <span onClick={link} className="flex items-center justify-center gap-2 m-5 border-[1px] p-3 border-gray-300  cursor-pointer bg-gray-100 rounded-4xl"> 
            <Icon/>
            {text}
        </span>
    )
}
export default index