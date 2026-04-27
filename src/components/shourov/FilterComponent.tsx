import Image from "next/image";
import filter_ico from "@/assets/icons/filter_ico.svg";
import dots from "@/assets/icons/dots.svg";
import icons_three from "@/assets/icons/icons_three.svg";
import CommonBtn from "./CommonBtn";

const FilterComponent = () => {
  return (
    <section className="py-[36px] bg-[#F9F1E7]">
      <div className="container">
        <div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div>
                  <Image src={filter_ico} alt="icons" width={25} height={25} />
                </div>
                <span className="text-[20px] text-black">Filter</span>
              </div>
              <div>
                <Image src={dots} alt="icons" />
              </div>
              <div>
                <Image src={icons_three} alt="icons_three" />
              </div>
            </div>
            <div className="w-px h-[37px] bg-[#9F9F9F]"></div>
            <div>
              <p className="text-base text-black">Showing 1–16 of 32 results</p>
            </div>
          </div>
          <div>
            <CommonBtn TagName="button" className="">
              Butrton
            </CommonBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommonInput = ({ text }) => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[20px] text-black">{text}</p>
      <input
        type="number"
        className="py-3 px-[18px] bg-white text-[#9F9F9F] text-[20px]"
      />
    </div>
  );
};

export default FilterComponent;
