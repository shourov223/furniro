import Image from "next/image"

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
        <div>
            <div className="w-full h-[301px] relative">
                <div className={`size-[48px] rounded-full absolute top-6 right-6 ${availabilityStatus === 'In Stock' ? 'bg-[#2EC1AC]' : 'bg-[#E97171]'} flex items-center justify-center`}>
                    <span className="text-base text-white">-{discountPercentage.toFixed(1)}%</span>
                </div>
                <Image src={img} alt="Product" width={285} height={301} className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#F4F5F7] px-4 pt-4 pb-[30px]">
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