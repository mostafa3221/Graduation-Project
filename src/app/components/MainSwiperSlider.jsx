"use client";
import React, { memo, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MainSwiperSlider = () => {
  const router = useRouter();
  const goToProductid = (id) => {
    router.push(`/products/${id}`); // It takes you to the cart page.
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products/category/laptops"
        );
        const data = await res.json();
        const sortedByRating = data.products.sort(
          (a, b) => b.rating - a.rating
        );
        setData(sortedByRating);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);
  if (!data.length) return <p>Loading...</p>;

  return (
    <>
      <Swiper
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]} // Autoplay هنا
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full md:w-[50%] !h-[100%]  xl:min-h-[600px]"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            {/* The background image fills the entire slide. */}
            {item.images && item.images[0] && (
              <div className="absolute inset-0 z-0  h-[100%]  xl:min-h-[600px]">
                <Image
                  src={item.images[0]}
                  alt={item.title || "Product"}
                  fill
                  className="object-cover h-[100%]"
                />
              </div>
            )}

            {/* The color gradient layer to improve text clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10  xl:min-h-[600px]"></div>

            {/* Text content and button */}
            <div className="relative z-20 flex flex-col justify-center h-full p-8 text-white max-w-xl  xl:min-h-[600px]   lg:min-h-[400]">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {item.title || "Product"}
              </h2>
              <p className="text-base md:text-lg mb-6">
                {item.description || "This is a great product."}
              </p>
              <button
                onClick={() => goToProductid(item.id)}
                className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300 w-fit"
              >
                BUY NOW
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default memo(MainSwiperSlider);
