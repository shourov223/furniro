import CartMini from "./CartMini";

export interface CartItem {
  id: number;
  name: string;
  subPrice: number;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const sampleSofa: CartItem = {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    subPrice: 25000,
    quantity: 1,
    image: "/furniro/src/assets/images/m.jpg", // public ফোল্ডারে ইমেজ থাকতে হবে
  };

  return (
    <section className="Cart_section mt-[72px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <div className="py-[15px] px-[147px] bg-[#F9F1E7]">
              <ul className="flex justify-between items-center">
                <li className="mr-[114px]">Product</li>
                <li className="mr-[137px]">Price</li>
                <li className="mr-[37px]">Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
            <CartMini
              src={sampleSofa.image}
              price={sampleSofa.price}
              title="hdfsfs"
              subPrice={sampleSofa.subPrice}
            />
          </div>

          <div className="col-span-4">
            <div className="py-[15px] px-[30px] bg-[#F9F1E7] ">
              <h2 className="text-center font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p className="text-gray-400">Rs. 250,000.00</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p className="text-[#B88E2F]">Rs. 250,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
