import fetchData from "@/api/ProductAPI";
import ProductCard from "./ProductCard";

interface productType {
  thumbnail: string;
  category: string;
  availabilityStatus: string;
  discountPercentage: number;
  oldPrice: number;
  price: number;
  title: string;
  id: number;
}

const AllProductSection = async () => {
  const allProductData: productType[] = await fetchData();
  return (
    <section className="py-[63px]">
      <div className="container">
        <div className="grid grid-cols-3 items-center gap-8">
          {allProductData?.map((item) => (
            <ProductCard
              img={item.thumbnail}
              category={item.category}
              availabilityStatus={item.availabilityStatus}
              discountPercentage={item.discountPercentage}
              oldPrice={item.oldPrice}
              price={item.price}
              productName={item.title}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProductSection;
