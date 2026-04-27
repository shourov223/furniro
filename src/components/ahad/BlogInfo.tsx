import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface BlogInfoProps {
    img: StaticImageData;
    text: string;
}

const BlogInfo = ( {img, text}: BlogInfoProps ) => {
    return (
        <div className="flex items-center justify-center gap-[7]">
            <div>
                <Image src={img} alt="" width={20} height={20}/>
            </div>
            <p className='text-textGray text-base'>{text}</p>
        </div>
    )
}

export default BlogInfo