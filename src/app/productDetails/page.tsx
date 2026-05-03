// "use client"
import Image from "next/image";
import img from "@/assets/images/sofa.png";
import sofa from "@/assets/images/sofa2.png";
import Rating from "@/components/Emam/Rating";
import SizeCard from "@/components/Emam/SizeCard";
import ssofa from "@/assets/images/SSofa.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import fetchData from "@/api/ProductAPI";
import ProductCard from "@/components/shourov/ProductCard";
import CommonBtn from "@/components/shourov/CommonBtn";

export interface Product {
  title: string;
  price: number;
  rating: number;
  review: string;
  suku: string;
  Tags: string;
  des1: string;
  des2: string;
  Category: string;
  description: string;
}

interface data {
  thumbnail: string;
  category: string;
  availabilityStatus: string;
  discountPercentage: number;
  oldPrice: number;
  price: number;
  title: string;
  id: number;
}

const page = async (
  {
    title = "Asgaard sofa",
    price = 250000,
    rating = 4.6,
    review = "5 Customer Review",
    suku = "SS001",
    Category = "Sofa",
    Tags = "Sofa, Chair, Home, Shop",
    description = "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",
    des1 = "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
    des2 = "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
  },
  Product: Product[],
) => {
  const AllProducts: data[] = await fetchData();

  return (
    <>
      <section className="Product_details py-10">
        <div className=" bg-[#F9F1E7] py-[38px] mb-15">
          <div className="container flex items-center gap-5 ">
            <span>Home</span>
            <span> \ </span>
            <span> Shop </span>
            <p className="py-[6px] px-[34px] border-l-2 border-[#9F9F9F] ">
              Asgaard sofa
            </p>
          </div>
        </div>
        <div className="container ">
          <div className="flex gap-21">
            <div className="flex">
              <div className="">
                <Image src={img} width={76} height={80} alt="image" />
                <Image
                  src={img}
                  width={76}
                  height={80}
                  alt="image"
                  className="py-[32px]"
                />
                <Image src={img} width={76} height={80} alt="image" />
                <Image
                  src={img}
                  width={76}
                  height={80}
                  alt="image"
                  className="pt-[32px]"
                />
              </div>

              <div>
                <Image src={sofa} width={423} height={500} alt="image" />
              </div>
            </div>
            <div>
              <h2 className="text-[42px] font-normal ">{title}</h2>
              <p className="font-medium text-2xl text-[#9F9F9F] ">
                Rs. {price}
              </p>
              <div className="flex items-center gap-5 mt-[15px]">
                <Rating rating={rating} />
                <span className="text-[13px] font-normal text-[#9F9F9F] border-l-2  px-3">
                  {review}
                </span>
              </div>
              <p className="w-106 text-[13px] h-20 mt-4.5  ">{description}</p>
              <div className="mt-[22px]">
                <p className="text-[13px] text-[#9F9F9F] ">size</p>
                <div className="mt-[12px] flex gap-[16px] items-center ">
                  <SizeCard p="S" />
                  <SizeCard p="M" />
                  <SizeCard p="L" />
                </div>
              </div>
              <div className="mt-[22px]">
                <p className="text-[13px] text-[#9F9F9F] ">Color</p>
                <div className="mt-[12px] flex gap-[16px] items-center ">
                  <div className="w-[30px] h-[30px] bg-[#816DFA] rounded-full" />
                  <div className="w-[30px] h-[30px] bg-black rounded-full" />
                  <div className="w-[30px] h-[30px] bg-[#B88E2F] rounded-full" />
                </div>
                <div className="flex gap-2.5">
                  
                  <CommonBtn variant="outline" size="lg" className="mt-10">Add TO Cart</CommonBtn>
                  <CommonBtn variant="outline" size="lg" className="mt-10"> + Compare</CommonBtn>
                </div>
              </div>

              <hr className="w-[605px] text-[#9F9F9F] mt-20" />
              <div className="space-y-4 text-gray-500 font-sans mt-10">
                <div className="grid grid-cols-[100px_20px_1fr] gap-y-4 items-center">
                  <span className="text-lg">SKU</span>
                  <span>:</span>
                  <span className="text-gray-400">{suku}</span>

                  <span className="text-lg">Category</span>
                  <span>:</span>
                  <span className="text-gray-400">{Category}</span>

                  <span className="text-lg">Tags</span>
                  <span>:</span>
                  <span className="text-gray-400">{Tags}</span>

                  <span className="text-lg">Share</span>
                  <span>:</span>
                  <div className="flex gap-4 text-black text-2xl">
                    <FaFacebook className="cursor-pointer" />
                    <FaLinkedin className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-[#9F9F9F] mt-10 w-full" />

          <div className="flex justify-center items-center mt-12">
            <div className="flex  gap-10">
              <span className="text-2xl font-medium  ">Description</span>
              <span className="text-2xl font-medium text-[#9F9F9F]  ">
                Additional Information
              </span>
              <span className="text-2xl font-medium text-[#9F9F9F] ">
                Reviews {review}
              </span>
            </div>
          </div>

          <div className="mt-10 flex justify-center items-center ">
            <div className=" text-start ">
              <p className="text-[#9F9F9F] w-[1026px] text-[16px]">{des1}</p>
              <p className="mt-[20px] text-[#9F9F9F]  w-[1026px] text-[16px]">
                {des2}
              </p>
            </div>
          </div>

          <div className="flex gap-[29px] py-15">
            <Image src={ssofa} width={605} height={338} alt="image" />
            <Image src={ssofa} width={605} height={338} alt="image" />
          </div>

          <div>
            <div className="flex justify-center items-center">
              <h3 className="font-medium text-4xl">Related Products</h3>
            </div>
            <div className="flex justify-between gap-8 mt-[26px]">
              {AllProducts.slice(0, 4).map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    // id={item.id}
                    img={item.thumbnail}
                    productName={item.title}
                    price={Math.round(
                      item.price - (item.price * item.discountPercentage) / 100,
                    )}
                    category={item.category}
                    oldPrice={item.price}
                    discountPercentage={item.discountPercentage}
                    availabilityStatus={item.availabilityStatus}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
