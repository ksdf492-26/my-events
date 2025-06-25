import { Input } from "@/types/Input";

function index({ name, placeholder, type }: Input) {
    return (
        <label className="text-gray-500 flex- flex-col w-[350px]">
            <div className="text-md mb-3">
                {name}
            </div>
            <input className="text-md border-b-[1px] outline-none border-gray-500 w-full" type={type} placeholder={placeholder} />
        </label>
    )
}
export default index