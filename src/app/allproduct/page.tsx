import AllProductSection from "@/components/shourov/AllProductSection";
import FilterComponent from "@/components/shourov/FilterComponent";
import CommonBanner from "@/components/siam/CommonBanner";

const AllProduct = () => {
  return (
    <main className="mt-[100px]">
      <CommonBanner pageName="Shop" />
      <FilterComponent />
      <AllProductSection />
    </main>
  );
};

export default AllProduct;
