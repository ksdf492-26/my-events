"use client"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"

function index () {
    const [check,setCheck] = useState(false)
    
    return (
        <div onClick={(e) => {e.preventDefault();setCheck(!check)}} className="flex cursor-pointer items-center gap-1 hover:underline">
            
            <div className=" bg-gray-200 flex text-gray-500  items-center justify-center rounded-xs  w-5 h-5" >
                {
                    check && 
                    <FaCheck/>
                }
            </div>
            <div className="text-xs  text-gray-500 ">
                Concordo e li os termos.
            </div>
        </div>
    )
}

export default index