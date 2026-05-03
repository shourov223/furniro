import React from 'react'
import Image from 'next/image'
import CommonBanner from "@/components/siam/CommonBanner"
import Search from "@/assets/icons/search.svg"
import Service from "@/components/siam/Service"
import BlogCard from '@/components/ahad/BlogCard'
import blog1 from '@/assets/images/blog-1.png'
import blog2 from '@/assets/images/blog-2.png'
import blog3 from '@/assets/images/blog-3.png'
import RecentPost from '@/components/ahad/RecentPost'
import recentblog1 from "@/assets/icons/recentBlog-1.png"

const BlogPage = () => {
  return (
    <main className="mt-[100px]">
      <CommonBanner pageName='Blog' />
      <section className='py-[100] px-[40px]'>
        <div className='max-w-[1240px] w-full mx-auto flex items-start justify-between gap-[30px]'>
          <div className='flex flex-col w-[65%] items-start justify-start'>
            <BlogCard img={blog1} title='Going all-in with millennial design' userType='Admin' publishDate='14 Oct 2022' catagory='Wood' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.' />
            <BlogCard img={blog2} title='Exploring new ways of decorating' userType='Admin' publishDate='14 Dec 2025' catagory='Handmade' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.' />
            <BlogCard img={blog3} title='Handmade pieces that took time to make' userType='Admin' publishDate='14 Oct 2022' catagory='Card' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.' />
          </div>

          <div className='flex flex-col items-start justify-start py-[22px] px-[40px] gap-10 w-[30%]'>
            <form action="" className='border border-1 border-textGray rounded-lg flex items-center justify-center p-[12px] w-full'>
              <input type="text" name="" id="" className='w-full outline-0 border-0 text-textGray' />
              <Image src={Search} alt='' width={25} height={25} />
            </form>
            <div className='w-full pb-[61px]'>
              <h2 className='text-[24px] text-black font-medium pb-10'>Catagories</h2>
              <ul className='flex flex-col w-full items-start justify-start gap-9'>
                <li className='w-full flex justify-between items-center'>
                  <p className='text-textGray text-[16px]'>Crafts</p>
                  <span className='text-textGray text-[16px]'>2</span>
                </li>
                <li className='w-full flex justify-between items-center'>
                  <p className='text-textGray text-[16px]'>Designs</p>
                  <span className='text-textGray text-[16px]'>8</span>
                </li>
                <li className='w-full flex justify-between items-center'>
                  <p className='text-textGray text-[16px]'>Homemade</p>
                  <span className='text-textGray text-[16px]'>7</span>
                </li>
                <li className='w-full flex justify-between items-center'>
                  <p className='text-textGray text-[16px]'>Interior</p>
                  <span className='text-textGray text-[16px]'>1</span>
                </li>
                <li className='w-full flex justify-between items-center'>
                  <p className='text-textGray text-[16px]'>Wood</p>
                  <span className='text-textGray text-[16px]'>6</span>
                </li>
              </ul>
            </div>
            <div className='w-full pb-[61px]'>
              <h2 className='text-[24px] text-black font-medium pb-10'>Recent Posts</h2>
              <ul className='flex flex-col w-full items-start justify-start gap-9'>
                <RecentPost img={recentblog1} title='Going all-in with millennial design' date='13 Dec 2026' />
                <RecentPost img={recentblog1} title='Going all-in with millennial design' date='13 Dec 2026' />
                <RecentPost img={recentblog1} title='Going all-in with millennial design' date='13 Dec 2026' />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Service />
    </main>
  )
}

export default BlogPage