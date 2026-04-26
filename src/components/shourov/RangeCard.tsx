import Image, { StaticImageData } from "next/image"


const RangeCard = ({ img, text }: { img: StaticImageData; text: string }) => {
    return (
        <div>
            <div className="rounded-[7px] overflow-hidden h-[480px]">
                <Image src={img} alt={text} width={381} height={400} className="w-full h-full object-cover" />
            </div>
            <p className="text-[#333333] text-[24px] text-center font-semibold pt-[30px]">{text}</p>
        </div>
    )
}

export default RangeCard