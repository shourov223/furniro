import dining from "@/assets/images/dining.jpg";
import livingroom from "@/assets/images/livingroom.jpg";
import bedroom from "@/assets/images/bedroom.jpg";
import RangeCard from "./RangeCard";

const BrowseTheRange = () => {
    return (
        <section className="py-[56px]">
            <div className="container">
                <h2 className="text-center text-black font-semibold text-[32px]">Browse The Range</h2>
                <p className="text-[#666666] text-[20px] text-center pb-[62px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="grid grid-cols-3 gap-[53px] items-center">
                    <RangeCard text="Dining" img={dining} />
                    <RangeCard text="Living" img={livingroom} />
                    <RangeCard text="Bedroom" img={bedroom} />
                </div>
            </div>
        </section>
    )
}

export default BrowseTheRange