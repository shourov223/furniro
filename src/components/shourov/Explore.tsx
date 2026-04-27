import explorer_one from "@/assets/images/explore_one.png"
import explorer_two from "@/assets/images/explore_two.png"
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Explore() {
    return (
        <section className="bg-[#FAF6F0] px-10 py-14">
            {/* Left Text Content */}
            <div className="container">
                <div className="grid grid-cols-[422px_1fr] gap-10 items-center">
                    <div>
                        <h2 className="text-[32px] font-bold text-[#1a1a1a] leading-tight mb-3">
                            50+ Beautiful rooms inspiration
                        </h2>
                        <p className="text-[13.5px] text-[#999] leading-relaxed mb-7">
                            Our designer already made a lot of beautiful prototipe of rooms that
                            inspire you
                        </p>
                        <button className="bg-[#B8892A] text-white text-[13px] font-semibold px-6 py-3 tracking-wide hover:bg-[#a07820] transition-colors">
                            Explore More
                        </button>
                    </div>
                    <div className="flex items-center gap-[30px]">
                        <div className="h-[582px] w-[404px] relative">
                            <Image src={explorer_one} alt="Explore" width={500} height={582} className="w-full h-full object-cover" />
                            <div className="flex items-end absolute left-4 bottom-4">
                                <div className="bg-white p-8 w-[200px]">
                                    <p className="text-gray-800">01 Bed Room</p>
                                    <h4 className="text-lg font-bold text-[#1a1a1a]">Inner Peace</h4>
                                </div>
                                <button className="bg-primary size-[50px] flex items-center justify-center mt-4 hover:bg-[#a07820] transition-colors cursor-pointer">
                                    <IoIosArrowRoundForward className="text-white" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-[486px]">
                                <Image src={explorer_two} alt="Explore" width={372} height={486} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex items-center gap-4 p-8 rounded-xl">
                                <div className="w-7 h-7 rounded-full border-2 border-[#c9943a] flex items-center justify-center cursor-pointer">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#c9943a]"></div>
                                </div>
                                <div className="w-7 h-7 rounded-full bg-[#dddad5] cursor-pointer"></div>
                                <div className="w-7 h-7 rounded-full bg-[#dddad5] cursor-pointer"></div>
                                <div className="w-7 h-7 rounded-full bg-[#dddad5] cursor-pointer"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}