import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Product {
    name: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    specs: Record<string, string>;
}

const products: Product[] = [
    {
        name: "Asgaard Sofa",
        price: "Rs. 250,000.00",
        rating: 4.7,
        reviews: 204,
        image: "/sofa1.png",
        specs: {
            "Sales Package": "1 sectional sofa",
            "Model Number": "TFCBLGRBL6SRHS",
            "Secondary Material": "Solid Wood",
            Configuration: "L-shaped",
            "Upholstery Material": "Fabric + Cotton",
            "Upholstery Color": "Bright Grey & Lion",
            "Filling Material": "Foam",
            "Finish Type": "Bright Grey & Lion",
            "Adjustable Headrest": "No",
            "Maximum Load Capacity": "280 KG",
            "Origin of Manufacture": "India",
            Width: "265.32 cm",
            Height: "76 cm",
            Depth: "167.76 cm",
            Weight: "45 KG",
            "Seat Height": "41.52 cm",
            "Leg Height": "5.46 cm",
            "Warranty Summary": "1 Year Manufacturing Warranty",
            "Domestic Warranty": "1 Year",
        },
    },
    {
        name: "Outdoor Sofa Set",
        price: "Rs. 224,000.00",
        rating: 4.2,
        reviews: 145,
        image: "/sofa2.png",
        specs: {
            "Sales Package": "1 Three Seater, 2 Single Seater",
            "Model Number": "DTUBLGRBL568",
            "Secondary Material": "Solid Wood",
            Configuration: "L-shaped",
            "Upholstery Material": "Fabric + Cotton",
            "Upholstery Color": "Bright Grey & Lion",
            "Filling Material": "Matte",
            "Finish Type": "Bright Grey & Lion",
            "Adjustable Headrest": "Yes",
            "Maximum Load Capacity": "300 KG",
            "Origin of Manufacture": "India",
            Width: "265.32 cm",
            Height: "76 cm",
            Depth: "167.76 cm",
            Weight: "65 KG",
            "Seat Height": "41.52 cm",
            "Leg Height": "5.46 cm",
            "Warranty Summary": "1.2 Year Manufacturing Warranty",
            "Domestic Warranty": "3 Months",
        },
    },
];

const sections: { title: string; keys: string[] }[] = [
    {
        title: "General",
        keys: [
            "Sales Package",
            "Model Number",
            "Secondary Material",
            "Configuration",
            "Upholstery Material",
            "Upholstery Color",
        ],
    },
    {
        title: "Product",
        keys: [
            "Filling Material",
            "Finish Type",
            "Adjustable Headrest",
            "Maximum Load Capacity",
            "Origin of Manufacture",
        ],
    },
    {
        title: "Dimensions",
        keys: [
            "Width",
            "Height",
            "Depth",
            "Weight",
            "Seat Height",
            "Leg Height",
        ],
    },
    {
        title: "Warranty",
        keys: ["Warranty Summary", "Domestic Warranty"],
    },
];

export default function ComparePage() {
    return (
        <div className="max-w-6xl mx-auto  p-6">

            {/* TOP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-20">

                {/* Left Info */}
                <div>
                    <h2 className="text-lg font-semibold">
                        Go to Product page for more Products
                    </h2>
                    <button className="text-sm underline mt-2">View More</button>
                </div>

                {/* Products */}
                {products.map((p, i) => (
                    <div key={i} className="text-center">

                        <Image
                            src={p.image}
                            alt={p.name}
                            width={180}
                            height={120}
                            className="mx-auto rounded"
                        />

                        <h3 className="mt-3 font-semibold">{p.name}</h3>
                        <p className="text-sm text-gray-500">{p.price}</p>

                        <div className="flex justify-center items-center gap-1 mt-1">
                            <span className="text-sm">{p.rating}</span>

                            {[...Array(5)].map((_, idx) => (
                                <FaStar
                                    key={idx}
                                    className={`text-xs ${idx < Math.round(p.rating)
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                        }`}
                                />
                            ))}

                            <span className="text-xs text-gray-400">
                                {p.reviews} Review
                            </span>
                        </div>
                    </div>
                ))}

            </div>

            {/* TABLE */}
            <div className="border-t">

                {sections.map((section, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-3">

                        {/* Section Title */}
                        <div className="py-6 font-semibold text-lg">
                            {section.title}
                        </div>

                        <div></div>
                        <div></div>

                        {section.keys.map((key, i) => {
                            const v1 = products[0].specs[key] || "-";
                            const v2 = products[1].specs[key] || "-";

                            return (
                                <div key={i}>
                                    {/* Label */}
                                    <div
                                        key={key}
                                        className="py-3 text-sm text-gray-600"
                                    >
                                        {key}
                                    </div>

                                    {/* Product 1 */}
                                    <div className="py-3 text-sm">
                                        {v1}
                                    </div>

                                    {/* Product 2 */}
                                    <div className="py-3 text-sm">
                                        {v2}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}

            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                <div></div>

                <button className="bg-yellow-600 text-white py-2 rounded">
                    Add To Cart
                </button>

                <button className="bg-yellow-600 text-white py-2 rounded">
                    Add To Cart
                </button>
            </div>

        </div>
    );
}