"use client"

import bag from "@/assets/icons/bag.svg"
import { useCartStore } from "@/providers/cart-store-provider"
import Image from "next/image"
import CartBox from "./CartBox"

const ShopingCart = () => {
    const { cart } = useCartStore((state) => state)
    console.log(cart)
    return (
        <div className="py-[28px] px-[22px] bg-white absolute top-[64px] -right-5.5 w-[417px] min-h-[746px] z-50">

            <div>
                <div className="flex items-center justify-between gap-4">
                    <h2 className="text-[24px] font-semibold text-black">Shopping Cart</h2>
                    <span className="w-[30px] h-[30px]">
                        <Image src={bag} alt="icons" width={16} height={26} />
                    </span>
                </div>
            </div>
            <div>
                {
                    cart.map((pItem) => <CartBox image={pItem.img} price={pItem.price} title={pItem.productName} id={pItem.id} key={pItem.id} />)
                }
            </div>
        </div>
    )
}

export default ShopingCart