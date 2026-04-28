import React from 'react'
import Image, { StaticImageData } from 'next/image'
import BlogInfo from './BlogInfo'
import User from "@/assets/icons/user_icon.png"
import Calender from "@/assets/icons/calender.png"
import label from "@/assets/icons/label.png"
import Link from 'next/link'

interface BlogCardProps {
  img: StaticImageData;
  title: string;
  userType: string;
  publishDate: string;
  catagory: string;
  details: string;
}

const BlogCard = ({ img, title, userType, publishDate, catagory, details }: BlogCardProps) => {
  return (
    <div className='flex flex-col items-start justify-start gap-[17px]'>
      <div className='w-full h-auto rounded-[10px] overflow-clip'>
        <Image src={img} alt="" />
      </div>
      <div className='flex items-center justify-start gap-[35px]'>
        <BlogInfo img={User} text={userType} />
        <BlogInfo img={Calender} text={publishDate} />
        <BlogInfo img={label} text={catagory} />
      </div>
      <h2 className='text-[30px] text-black font-[600]'>{title}</h2>
      <p className='text-textGray text-[15px]'>{details}</p>
      <div className='flex flex-col gap-1 items-center'><p className='text-sm text-black capitalize underlined underline-offset-8 font-[400]'>Read More</p><div className='h-[1px] w-[80%] bg-black'></div></div>
    </div>
  )
}

export default BlogCard