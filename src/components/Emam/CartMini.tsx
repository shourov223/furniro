import TrashIcon from "@/assets/icons/icons_componets/TrashIcon";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface CartMini {
  title: string;
  price: number;
  subPrice: number;
  src: string;
}

const CartMini: React.FC<CartMini> = ({ title, price, subPrice, src }) => {
  return (
    <div className="flex  items-center mt-5">
      <div className="flex items-center gap-10">
        <Image src={src} alt="image" width={108} height={105} className="" />
        <p>{title}</p>
      </div>
      <div className=" ml-[130px]">
        <p>{price}</p>
      </div>
      <div className="ml-[140px]">
        <input
          type="text"
          className="w-[32px] h-[32px] flex  justify-center items-center px-2 border-2 rounded-[4px] "
        />
      </div>
      <div className="ml-[60px] ">
        <p>{subPrice}</p>
      </div>
      <div className="ml-[90px]">
        <TrashIcon />
      </div>
    </div>
  );
};

export default CartMini;
