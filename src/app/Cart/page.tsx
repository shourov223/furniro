import CartPage from '@/components/Emam/Cart'
import CommonBanner from '@/components/siam/CommonBanner'
import Service from '@/components/siam/Service'

const page = () => {
  return (
    <div>
        <CommonBanner pageName='cart'/>
        <CartPage />
        <Service />
    </div>
  )
}

export default page