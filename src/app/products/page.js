"use client";
import { useSearchParams } from "next/navigation";
import SearchBar from "../components/SearchBar";
import Productcard from "../components/Productcard";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); // هنا اتعّرفت

  return (
    <>
    <MainNav/>
      <main className="mt-[60px] relative min-h-[300px]">
        <SearchBar category={category} />
        <div className="">
        <Productcard category={category} /> {/* دلوقتي موجودة */}
        </div>
      </main>
      <Footer />
    </>
  );
}
