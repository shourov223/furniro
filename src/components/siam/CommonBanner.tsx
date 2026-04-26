import Image from 'next/image'
const CommonBanner = () => {
  return (
<section className="bg-[url('/bannerContent.png')] bg-cover bg-center h-[500px] w-full">
    <div className="container">
      <div className="pt-[61px] pb-[97px] flex items-center justify-center">
       <div>
         <Image 
        src="/banner-logo.png"  
        alt="My Icon"
        width={77}     
        height={77}     
      />
      <h2 className='text-[48px] font-medium'></h2>
       <div>
        <h3>Home</h3>
        <img src={"/public/banner-icon.png"} alt="" />
       </div>
       </div>
       
      </div>
    </div>
</section>
  )
}

export default CommonBanner
