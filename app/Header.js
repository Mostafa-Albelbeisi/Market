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
            <header className=' sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between'>
                {openModal && (
                    <Modal />
                )}
                <Link href={'/'}>
                    <div className="flex items-center justify-between">
                        <img
                            src="https://i.pinimg.com/736x/12/d6/00/12d60046505b41fe3ca8a71e0d186c62.jpg"
                            className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px] m-auto rounded-full"
                        />
                        <h1 className=' uppercase cursor-pointer hover:scale-110 ml-3'>Fruit shop</h1>
                    </div>
                </Link>
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