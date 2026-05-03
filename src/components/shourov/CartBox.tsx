"use client"
import { useCartStore } from "@/providers/cart-store-provider"
import Image from "next/image"


interface cartProps {
    image: string,
    title: string
    price: number
    id: number
}

const CartBox = ({ image, title, price, id }: cartProps) => {
    const { removeToCart } = useCartStore((state) => state)
    return (
        <div className="w-full flex items-center justify-between">
            <div className="w-[108px] h-[106px] rounded-[8px] overflow-hidden">
                <Image src={image} alt="image" width={108} height={105} />
            </div>
            <div className="flex flex-col gap-[11px]">
                <p className="text-base text-black font-semibold text-black">{title}</p>
                <p className="text-primary text-[12px] font-medium">${price}</p>
            </div>
            <button
                className="text-base font-bold text-white bg-[#9F9F9F] size-[20px] grid place-items-center rounded-full cursor-pointer"
                onClick={() => removeToCart(id)}
            >
                x
            </button>
        </div>
    )
}

export default CartBox