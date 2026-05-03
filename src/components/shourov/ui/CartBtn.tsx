"use client"
import Image from "next/image"
import carticon from "@/assets/icons/cart.svg"
import { useCartStore } from "@/providers/cart-store-provider"
import { useState } from "react"
import ShopingCart from "../ShopingCart"

const CartBtn = () => {
    const { cart } = useCartStore((state) => state)
    const [showCart, setShowCart] = useState(false)
    console.log(showCart)
    return (
        <div>
            <div onClick={() => setShowCart(!showCart)} className="cursor-pointer relative">
                <div className="bg-red-500 -top-[15px] left-[30px] text-white font-medium rounded-full absolute z-30 size-[20px] text-[12px] grid place-items-center">{cart.length}</div>
                <Image src={carticon} alt="cart" width={28} height={28} />
            </div>
            {
                showCart && <ShopingCart />
            }
        </div>
    )
}

export default CartBtn