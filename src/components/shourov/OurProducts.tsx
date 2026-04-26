import fetchData from "@/api/ProductAPI"
import ProductCard, { ProductCardProps } from "./ProductCard"

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    originalPrice: number;
    discountPercentage: number;
    availabilityStatus: string;
    thumbnail: string;
}

const OurProducts = async () => {
    const allData: Product[] = await fetchData()
    return (
        <section className="pt-[56px] pb-[72px]">
            <div className="container">
                <h2 className="text-[#3A3A3A] text-[40px] font-semibold pb-[32px] text-center">Our Products</h2>
                <div className="grid grid-cols-4 gap-[32px] items-center">
                    {allData?.map((product) => (
                        <ProductCard
                            key={product.id}
                            img={product.thumbnail}
                            productName={product.title}
                            price={product.price}
                            category={product.category}
                            oldPrice={product.price + Number((product.price * product.discountPercentage / 100).toFixed(1))}
                            discountPercentage={product.discountPercentage}
                            availabilityStatus={product.availabilityStatus}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurProducts