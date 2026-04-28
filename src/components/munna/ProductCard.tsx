"use client";

import React from 'react';
import Image from 'next/image';
import { Star, StarHalf, ChevronDown } from 'lucide-react';

// --- Types ---
interface Product {
    id: string;
    name: string;
    price: number;
    rating: number;
    reviewCount: number;
    imageUrl: string;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Asgaard Sofa',
        price: 250000,
        rating: 4.7,
        reviewCount: 204,
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600', // Placeholder
    },
    {
        id: '2',
        name: 'Outdoor Sofa Set',
        price: 224000,
        rating: 4.2,
        reviewCount: 145,
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600', // Placeholder
    },
];

// --- Sub-components ---

const RatingStars = ({ rating, count }: { rating: number; count: number }) => {
    const stars = Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        if (rating >= starValue) {
            return <Star key={i} size={18} className="fill-[#FFC700] text-[#FFC700]" />;
        } else if (rating > i && rating < starValue) {
            return <StarHalf key={i} size={18} className="fill-[#FFC700] text-[#FFC700]" />;
        }
        return <Star key={i} size={18} className="text-gray-300" />;
    });

    return (
        <div className="flex items-center gap-2">
            <span className="text-lg font-medium">{rating}</span>
            <div className="flex gap-0.5">{stars}</div>
            <div className="mx-2 h-5 w-[1px] bg-[#9F9F9F]" />
            <span className="text-[13px] text-[#9F9F9F]">{count} Review</span>
        </div>
    );
};

const ProductCard = ({ product }: { product: Product }) => (
    <div className="flex flex-col gap-4">
        {/* Image Container */}
        <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-lg bg-[#F9F1E7] p-6">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-contain mix-blend-multiply"
            />
        </div>

        {/* Content */}
        <div className="space-y-1">
            <h3 className="text-2xl font-medium text-black">{product.name}</h3>
            <p className="text-lg font-medium text-black">
                Rs. {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </p>
            <div className="pt-2">
                <RatingStars rating={product.rating} count={product.reviewCount} />
            </div>
        </div>
    </div>
);

// --- Main Page ---

export default function ComparisonSection() {
    return (
        <main className="min-h-screen bg-white p-8 mt-10 md:p-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-4">

                    {/* CTA Column */}
                    <div className="flex flex-col gap-4 pt-4">
                        <h2 className="text-[28px] font-medium leading-tight text-black">
                            Go to Product page for more Products
                        </h2>
                        <button className="w-fit border-b-2 border-[#727272] pb-1 text-lg font-medium text-[#727272] transition-all hover:border-black hover:text-black">
                            View More
                        </button>
                    </div>

                    {/* Product Columns */}
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    {/* Add Product Column */}
                    <div className="flex flex-col gap-4 pt-4">
                        <h3 className="text-2xl font-semibold text-black">Add A Product</h3>
                        <div className="relative">
                            <select
                                className="w-full cursor-pointer appearance-none rounded-md bg-[#B88E2F] py-3 pl-4 pr-10 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#B88E2F] focus:ring-offset-2"
                                defaultValue=""
                            >
                                <option value="" disabled>Choose a Product</option>
                                <option value="sofa-1">Stylish Sofa</option>
                                <option value="sofa-2">Modern Couch</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white" size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}