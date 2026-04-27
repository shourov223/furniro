// import ComparePage from "@/components/munna/ProductComparison";
import ComparisonSection from "@/components/munna/ProductCard";
import Banner from "@/components/shourov/Banner";
import BrowseTheRange from "@/components/shourov/BrowseTheRange";
import Explore from "@/components/shourov/Explore";
import FuniroFurniture from "@/components/shourov/FuniroFurniture";
import OurProducts from "@/components/shourov/OurProducts";


const HomePage = () => {
  return (
    <main>
      <Banner />
      <BrowseTheRange />
      <OurProducts />
      <Explore />
      <FuniroFurniture />

      <ComparisonSection />
    </main>
  );
}
export default HomePage