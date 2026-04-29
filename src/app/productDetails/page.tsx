import Image from "next/image"
import img from "@/assets/images/sofa.png"
import sofa from "@/assets/images/sofa2.png"
import Rating from "@/components/Emam/Rating"

const page = () => {
  return (
    <>
      <section className="Product_details py-10">
        <div className="container">
            <div className="flex gap-21">
                <div className="flex">
                    <div className="">
                        <Image src={img} width={76} height={80} alt="image" />
                        <Image src={img} width={76} height={80} alt="image" className="py-[32px]"/>
                        <Image src={img} width={76} height={80} alt="image" />
                        <Image src={img} width={76} height={80} alt="image" className="pt-[32px]" />
                    </div>
                    
                    <div>
                        <Image src={sofa} width={423} height={500}  alt="image"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-[42px] font-normal ">Asgaard sofa</h2>
                    <p className="font-medium text-2xl text-[#9F9F9F] ">Rs. 250,000.00</p>
                    <div className="flex items-center gap-5 mt-[15px]">
                        <Rating rating={4.6} />
                        <span className="text-[13px] font-normal text-[#9F9F9F] border-l-2  px-3">5 Customer Review</span>
                    </div>
                    <p className="w-[424px] text-[13px] h-[80px] mt-[18px]  ">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default page
