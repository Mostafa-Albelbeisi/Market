'use client'

import React from "react"
import Link from 'next/link'
import useCart from "./(store)/store"
import Modal from "./Modal"
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
    const cartItem = useCart(state => state.cart)
    const openModal = useCart(state => state.openModal)
    const setOpenModal = useCart(state => state.setOpenModal)

    return (
        <div>
            <header className=' sticky top-0 p-6 h-20 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between'>
                {openModal && (
                    <Modal />
                )}
                <Link href={'/'}>
                    <div className="flex items-center justify-between hover:scale-110 -mt-0 sm:-mt-10 md:-mt-10">
                        <svg className="sm:w-[50px] sm:h-[100px] w-[50px] h-[50px] m-auto rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="pharmacy"><path d="M21.94 29.64A6.13 6.13 0 0 0 17 25.08V17A11 11 0 0 0 27 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1 11 11 0 0 0 10 11v8.13a6.13 6.13 0 0 0-4.94 4.56v.12a1 1 0 0 0 .18.86A1 1 0 0 0 11 31h10a1 1 0 0 0 .79-.38 1 1 0 0 0 .18-.86Z"></path><path d="M14 22.07H4.44a1.44 1.44 0 1 1 0-2.88H14v-2H4.44a3.44 3.44 0 0 0 0 6.88H14zm5.07 0H18v2h1.07a8.61 8.61 0 0 1 6.12 2.53 1 1 0 0 0 .71.3 1 1 0 0 0 .7-1.71 10.57 10.57 0 0 0-7.53-3.12zM21.91 1h-3.42a10.74 10.74 0 0 0-5.15 1.31 1 1 0 0 0-.41 1.35 1 1 0 0 0 1.36.41A8.8 8.8 0 0 1 18.49 3h3.42a7.1 7.1 0 0 1 0 14.19H18v2h3.91a9.1 9.1 0 0 0 0-18.19z"></path></svg>
                        <h1 className=' uppercase cursor-pointer ml-3 text-sm'>Samo Pharmacy</h1>
                    </div>
                </Link>

                <nav>
                    <ul className="w-ful md:flex justify-between text-base text-[#000] ml-[60rem] font-bold">
                        <li className="mx-5 inline-block border-b-2 border-transparent rounded-t-lg hover:text-[#1D4ED8] hover:border-gray-300 dark:hover:text-gray-300"><Link href="/">Home</Link></li>
                        <li className="mx-5 inline-block border-b-2 border-transparent rounded-t-lg hover:text-[#1D4ED8] hover:border-gray-300 dark:hover:text-gray-300"><Link href="/Product">Product</Link></li>
                        <li className="mx-5 inline-block border-b-2 border-transparent rounded-t-lg hover:text-[#1D4ED8] hover:border-gray-300 dark:hover:text-gray-300"><Link href="/Contact">Contact</Link></li>
                    </ul>
                </nav>

                <div onClick={setOpenModal} className=" relative cursor-pointer group grid place-items-center">

                    {cartItem.length > 0 && (
                        <div className=" absolute aspect-square pointer-events-none h-5 sm:h-6 my-10 sm:my-7 grid place-items-center bg-blue-500 text-white rounded-full top-0 right-0 -translate-y-1/2 translate-x-1/2">
                            <p className="text:xs sm:text-sm">{cartItem.length}</p>
                        </div>
                    )}

                    <AiOutlineShoppingCart className="fa-solid cursor-pointer group-hover:text-slate-500"></AiOutlineShoppingCart>
                </div>
            </header>
        </div>
    )
}