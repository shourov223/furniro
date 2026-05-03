import service_1 from "@/assets/icons/service-1.png";
import service_2 from "@/assets/icons/service-2.png";
import service_3 from "@/assets/icons/service-3.png";
import service_4 from "@/assets/icons/service-4.png";
import Image from "next/image";

const Service = () => {
  const data = [
    {
      icon: service_1,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: service_2,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: service_3,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: service_4,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];
  return (
    <section className="py-25 px-17 bg-[#FAF3EA]">
      <div className="flex items-center justify-between max-w-[1286px] mx-auto">
        {data.map((el, index) => {
          return (
            <div key={index}>
              <div className="flex items-center gap-[13px]">
                <div>
                  <Image src={el.icon} alt="icon" width={60} height={60} />
                </div>
                <div className="">
                  <h2 className="text-[#242424] font-semibold text-[25px] leading-[150%]">
                    {el.title}
                  </h2>
                  <p className="font-medium text-[20px] leading-[150%] text-[#898989]">
                    {el.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
