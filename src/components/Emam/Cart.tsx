import React from 'react'

const CartPage = () => {
  return (
    <section className='Cart_section mt-[72px]'>
      <div className="container">
        {/* <div className="grid grid-cols-12 gap-5">
          <div className="grid grid-span-8">
            <div className='py-[15px] px-[145px] bg-[#F9F1E7]'>
              <ul className='flex justify-between items-center'>
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-col-4">
            <div className='py-[15px] px-[75px] bg-[#F9F1E7] '>
               <h2>Cart Totals</h2>
               <div className='flex'>
                 <p>Subtotal</p>
                 <p>Rs. 250,000.00</p>
               </div>
               <div className='flex'>
                 <p>Subtotal</p>
                 <p>Rs. 250,000.00</p>
               </div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-12 gap-5"> 
            <div className="col-span-8">
              <div className='py-[15px] px-[50px] bg-[#F9F1E7]'>
                <ul className='flex justify-between items-center'>
                  <li>Product</li>
                  <li>Price</li>
                  <li>Quantity</li>
                  <li>Subtotal</li>
                </ul>
              </div>
            </div>


            <div className="col-span-4">
              <div className='py-[15px] px-[30px] bg-[#F9F1E7] '>
                <h2 className="text-center font-bold mb-4">Cart Totals</h2>
                <div className='flex justify-between mb-2'>
                  <p>Subtotal</p>
                  <p className="text-gray-400">Rs. 250,000.00</p>
                </div>
                <div className='flex justify-between'>
                  <p>Total</p>
                  <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default CartPage