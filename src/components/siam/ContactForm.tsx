import icon_1 from "@/assets/icons/loaction.png"
import icon_2 from "@/assets/icons/call.png"
import icon_3 from "@/assets/icons/clock.png"
import Image from "next/image"
import { FormInput } from "./FormInput"

export const ContactForm = () => {
    const contactItems = [
        {
            icon: icon_1,
            title: "Adress",
            des: "236 5th SE Avenue, New York NY10000, United States"
        },
        {
            icon: icon_2,
            title: "Phone",
            des: "Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"
        },
        {
            icon: icon_3,
            title: "Working Time",
            des: "Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"
        }
    ]
    return (
        <section className="pt-[98px] pb-[63px]">
            <div className="container">
                <div>
                    <div className="text-center">
                        <h2 className="font-semibold text-[#000000] text-[36px]">Get In Touch With Us</h2>
                        <p className="pt-2 text-[16px] text-[#9F9F9F] max-w-[644px] mx-auto">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    </div>
                    <div className="max-w-[530px] pt-[133px]">
                        <div className="space-y-[42px]">
                            {
                                contactItems.map((el, index) => {
                                    return <div key={index}>
                                        <div className="flex items-center gap-5">
                                            <div>
                                                <Image src={el.icon} alt="loaction" height={25} width={25} />
                                            </div>
                                            <div>
                                                <h2 className="font-medium text-[#000000] text-[24px]">{el.title}</h2>
                                                <p className="max-w-[212px] text-[16px] text-[rgba(0,0,0,0.59)]">{el.des}</p>
                     
                                           </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="space-y-[36px]">
                            <FormInput id={"Abc"} inputName={"Your Name"} placeholder={"Abc"}/>
                            <FormInput id={"Abc@def.com"} inputName={"Email address"} placeholder={"Abc@def.com"}/>
                            <FormInput id={"This is an optional"} inputName={"Subject"} placeholder={"This is an optional"}/>
                            <FormInput id={"Hi! i’d like to ask about"} inputName={"Message"} placeholder={"Hi! i’d like to ask about"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
