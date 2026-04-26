import Banner from "@/components/shourov/Banner";
import BrowseTheRange from "@/components/shourov/BrowseTheRange";
import Navbar from "@/components/shourov/Navbar";
import OurProducts from "@/components/shourov/OurProducts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <BrowseTheRange />
      <OurProducts />
    </main>
  );
}
