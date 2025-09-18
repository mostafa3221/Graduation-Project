"use client";
import Footer from './components/Footer';
import AuthNav from './components/AuthNav';
import Login from './login/page';
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between  bg-[--background]">
      <AuthNav />
      <Login />
      <Footer />
    </main>
  );
}
