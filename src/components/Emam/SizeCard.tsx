import React from 'react'

export interface size {
    p:string

}

const SizeCard = ({p}:size) => {
  return (
   <div className="flex justify-center items-center bg-[#F9F1E7] w-[30px] h-[30px] transition-all duration-300 ease-in-out rounded-[5px] cursor-pointer  hover:bg-[#B88E2F] hover:text-white">
        <p>{p}</p>
    </div>
  )
}

export default SizeCard
