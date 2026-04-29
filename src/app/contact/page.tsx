import CommonBanner from "@/components/siam/CommonBanner"
import { ContactForm } from "@/components/siam/ContactForm"
import Service from "@/components/siam/Service"


const page = () => {
  return (
    <main className="mt-[100px]">
      <CommonBanner pageName="Contact"/>
      <ContactForm/>
      <Service/>
    </main>
  )
}

export default page
