import CommonBanner from "@/components/siam/CommonBanner"
import { ContactForm } from "@/components/siam/ContactForm"
import Service from "@/components/siam/Service"


const page = () => {
  return (
    <div>
      <CommonBanner pageName="Contact"/>
      <ContactForm/>
      <Service/>
    </div>
  )
}

export default page
