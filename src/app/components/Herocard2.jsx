"use client";

import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import Image from 'next/image';
import Link from 'next/link';

const Herocard2 = () => {
    const dispatch = useDispatch();

    // Get products state from Redux store
    const { items, status, error } = useSelector((state) => state.products);

    // Fetch products when component mounts if status is idle
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    // Handle loading and error states
    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    // Filter products by category "tablets" and sort by rating descending
    const smartphones = items
        .filter(item => item.category === 'tablets')
        .sort((a, b) => b.rating - a.rating);

    // Pick the top-rated tablet
    const product = smartphones[0];

    return (
        <div className="h-[48%] w-full flex flex-col md: flex-row items-center justify-center p-8 bg-white rounded-lg shadow-xl mb-[10px]">
            {product && (
                <>
                    {/* Link to product details page */}
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`} 
                        className="group flex "
                    >
                        {/* Product image */}
                        <div className="relative w-[80%] h-[60%] md:w-[60%] md:h-[80%] flex items-center justify-center overflow-hidden">
                            <Image
                                src={product.images[0]}
                                alt={product.title}
                                width={185}
                                height={185}
                                className="min-w-full min-h-full object-contain rounded-lg"
                            />
                        </div>

                        {/* Product info: brand and title */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:ml-[5%]">
                            <p className="text-gray-500 text-sm uppercase font-semibold">{product.brand}</p>
                            <h2 className="text-2xl font-extrabold text-gray-900 mt-2">{product.title}</h2>
                        </div>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Herocard2
