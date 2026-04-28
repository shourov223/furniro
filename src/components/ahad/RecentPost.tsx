import { StaticImageData } from 'next/image'
import Image from "next/image"

interface recentPostProps {
    img: StaticImageData;
    title: string;
    date: string;
}

const RecentPost = ({ img, title, date }: recentPostProps) => {
    return (
        <li className='flex gap-2 w-full flex justify-between items-center'>
            <div className='size-[80px] rounded-[12px]'>
                <Image src={img} alt='' width={80} height={80} />
            </div>
            <div className='flex flex-col w-full items-start justify-start gap-1'>
                <h2 className='text-[14px] text-black'>{title}</h2>
                <p className='text-[12px] text-textGray'>{date}</p>
            </div>
        </li>
    )
}

export default RecentPost