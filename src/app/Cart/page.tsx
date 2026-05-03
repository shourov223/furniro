import CartPage from '@/components/Emam/Cart'
import CommonBanner from '@/components/siam/CommonBanner'
import Service from '@/components/siam/Service'

const page = () => {
  return (
    <main className="mt-[100px]">
        <CommonBanner pageName='cart'/>
        <CartPage />
        <Service />
    </main>
  )
}

export default page