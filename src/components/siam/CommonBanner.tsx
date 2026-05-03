import Image from "next/image";
import bannerlogo from "@/assets/icons/banner-logo.png";
import bannerIcon from "@/assets/icons/banner-icon.png";
import Link from "next/link";

const CommonBanner = ({ pageName }: { pageName: string }) => {
  return (
    <section className="bg-[url('../assets/images/bannerCommon.png')] bg-cover bg-center w-full pt-[61px] pb-[97px]">
      <div className="container">
        <div className="text-center">
          <div className="size-[77px] mx-auto">
            <Image src={bannerlogo} alt="My Icon" width={77} height={77} />
          </div>
          <h2 className="text-[48px] font-medium">{pageName}</h2>
          <div className="text-center ">
            <div className="flex items-center justify-center gap-3">
              <Link href={"/"} className="text-4 font-medium text-[#000000]">
                Home
              </Link>
              <div className="text-center">
                <Image src={bannerIcon} alt="" height={10} width={10} />
              </div>
              <p className="font-light text-4">{pageName}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
