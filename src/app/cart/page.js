import React from 'react'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'

const page = () => {
  return (
    <>
    <MainNav/>
    <main className="mt-[64px] relative min-h-[300px] pt-[1px] flex bg-white">
    <Cart/>
    <Checkout/>
    </main>
    <Footer/>
    </>
  )
}

export default page