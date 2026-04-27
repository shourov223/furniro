import Image from "next/image"
import shrare from "@/assets/icons/share.svg"
import compare from "@/assets/icons/compare.svg"
import like from "@/assets/icons/like.svg"


export interface ProductCardProps {
    img: string;
    productName: string;
    price: number;
    category: string;
    oldPrice: number;
    discountPercentage: number;
    availabilityStatus: string;
}


const ProductCard = ({ img, productName, price, category, oldPrice, discountPercentage, availabilityStatus }: ProductCardProps) => {
    return (
        <div className="relative group">
            <div className="absolute z-50 top-0 left-0 min-w-0 h-full bg-black opacity-0 group-hover:opacity-50 group-hover:min-w-full transition-all duration-300">
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] w-full h-auto z-60 opacity-0 group-hover:opacity-100 transition-all duration-450">
                <div className="w-full h-auto">
                    <button className="py-3 px-[52px] bg-white whitespace-nowrap text-[#E89F71] font-semibold cursor-pointer grid place-items-center mb-[20px] block mx-auto">
                        Add to Cart
                    </button>
                    <div className="flex items-center justify-center gap-[20px]">
                        <div className="flex items-center gap-px">
                            <Image src={shrare} alt="Share" />
                            <p className="text-base font-semibold text-white">Share</p>
                        </div>
                        <div className="flex items-center gap-px">
                            <Image src={compare} alt="Compare" />
                            <p className="text-base font-semibold text-white">Compare</p>
                        </div>
                        <div className="flex items-center gap-px">
                            <Image src={like} alt="Like" />
                            <p className="text-base font-semibold text-white">Like</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[301px] relative group-hover:blur-[1px]">
                <div className={`size-[48px] rounded-full absolute top-6 right-6 ${availabilityStatus === 'In Stock' ? 'bg-[#2EC1AC]' : 'bg-[#E97171]'} flex items-center justify-center`}>
                    <span className="text-base text-white">-{discountPercentage.toFixed(1)}%</span>
                </div>
                <Image src={img} alt="Product" width={285} height={301} className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#F4F5F7] px-4 pt-4 pb-[30px] group-hover:blur-[1px]">
                <h3 className="text-[#3A3A3A] text-[20px] font-semibold">{productName}</h3>
                <p className="text-base text-[#898989] py-2">{category}</p>
                <div className="flex items-center gap-4">
                    <p className="text-[#3A3A3A] text-[20px] font-semibold">${price}</p>
                    <del className="text-[#B0B0B0] text-[16px]">${oldPrice}</del>
                </div>
            </div>
        </div>
    )
}

export default ProductCard