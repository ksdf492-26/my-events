import { Input } from "@/types/Input";

function index({ name, placeholder, type,onChange,value }: Input) {
    return (
        <label className="text-gray-500 flex- flex-col w-[350px]">
            <div className="text-base mb-3 capitalize">
                {name}
            </div>
            <input onChange={(e) => onChange(name,e.target.value)} value={value} className="text-base border-b-[1px] outline-none border-gray-500 w-full" type={type} placeholder={placeholder} />
        </label>
    )
}
export default index