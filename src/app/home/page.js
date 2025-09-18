"use client";
 
import Footer from "../components/Footer"
import Herocard1  from "../components/Herocard1"
import Herocard2  from "../components/Herocard2"
import Herolinks  from "../components/Herolinks"
import MainNav from "../components/MainNav"
import dynamic from "next/dynamic";

const Page = () => {
  const MainSwiperSlider = dynamic(() => import("../components/MainSwiperSlider"), {
  ssr: false, // لو مش محتاج render من السيرفر
});
  return (
    <>
    <MainNav className="w-full max-w-7xl mx-auto "/>
    <main className="mt-[64px] relative min-h-[300px] pt-[1px]">
      <div className="flex flex-col md:flex-row items-center justify-around gap-5 p-5">
        <Herolinks/>
    <MainSwiperSlider classNameh="h-full"/>
    <div className="w-[100%] gap-5   md:w-[25%]">
    <Herocard1/>
    <Herocard2/>
    </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Page