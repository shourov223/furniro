import Image from "next/image"
import fumiro_img from "@/assets/images/funiro_img.png"


const FuniroFurniture = () => {
    return (
        <section className="pt-[67px] pv-[50px]">
            <p className="text-[20px] font-semibold text-[#616161] text-center pb-2">Share your setup with</p>
            <h2 className="text-[40px] font-bold text-[#3A3A3A] text-center">#FuniroFurniture</h2>
            <Image src={fumiro_img} alt="Funiro Furniture" height={721} className="w-full" />
        </section>
    )
}

export default FuniroFurniture