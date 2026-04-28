import Image from 'next/image';
import React from 'react'

export interface CartMini {
    title: string;
    price: number;
    subPrice:number
    img: string 
}


const CartMini = ({ title , price , subPrice , img }: CartMini) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <Image src={img} alt="image" width={108} height={105} className='mr-[34px]'/>
            <p>{title}</p>
        </div>

        <div className='ml-[7px]'>
            <p>{price}</p>
        </div>
        <div>
            <input type="text" />
        </div>
        <div>
            <p>{subPrice}</p>
        </div>
        <div>
            <p>{subPrice}</p>
        </div>
        
    </div>
  )
}

export default CartMini