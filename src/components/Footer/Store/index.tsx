import { Props } from "@/types/Store"

function index({Icon}:Props) {
    return (
        <li className="bg-black border-2 border-white rounded-lg flex gap-1 w-32 items-center justify-center">
            <Icon size={30} />
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <div className="text-xs">
                    Baixe na
                </div>
                <div className="text-lg">
                    App Store
                </div>
            </div>
        </li>
    )
}
export default index