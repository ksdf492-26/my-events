import { Button } from "@/types/Button"

function index({ type, text, OnClick }: Button) {
    return (
        <button className={`flex items-center bg-[#7B76F1] justify-center   gap-1 font-medium w-[145px] h-[60px] !rounded-4xl cursor-pointer shadow-lg shadow-gray-400`} onClick={OnClick} type={type}>

            {text}
        </button>
    )
}

export default index