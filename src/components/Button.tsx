import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { PiDiamondsFourFill } from "react-icons/pi";

const Button = ({setFun, flag}) => {
  return (
    <div className='bg-white text-gray-700 px-6 py-6 rounded-lg shadow-md hover:shadow-lg transition-shadow my-6 mx-6 h-12 w-12 flex items-center justify-center'>
        <button onClick={()=>setFun((prev)=>!prev)}>{flag?<AiOutlineMenu size={25}/>:<PiDiamondsFourFill size={25}/>}</button>
    </div>
  )
}

export default Button