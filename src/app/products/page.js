"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SearchBar from "../components/SearchBar";
import Productcard from "../components/Productcard";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

export default function ProductsPage() {
  return (
    <>
      <MainNav />
      <main className="mt-[60px] relative min-h-[300px]">
        {/* تغليف المحتوى الذي يستخدم useSearchParams داخل Suspense */}
        <Suspense fallback={<div>جاري التحميل...</div>}>
          <ProductsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <SearchBar category={category} />
      <div>
        <Productcard category={category} />
      </div>
    </>
  );
}
