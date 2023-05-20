'use client'
import React from "react";
import { useRouter } from "next/navigation";
import useCart from "./(store)/store";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function ProductCard(props) {
    const { product } = props
    const { id: price_id, unit_amount: cost, product: productInfo } = product
    const { name, description } = productInfo
    const router = useRouter()
    const addItemToCart = useCart(state => state.addItemToCart)


    const setProduct = useCart(state => state.setProduct)

    function onProductClick() {
        const newProduct = {
            name,
            description,
            price_id,
            cost,
            productInfo
        }
        setProduct({ newProduct })
        router.push('/product/?price_id=' + price_id)

    }

    function handleAddToCart() {
        const newItem = {
            quantity: 1,
            price_id,
            name,
            cost,
        }
        addItemToCart({ newItem })
    }

    return (
        <div className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer">
            <img src={productInfo.images[0]} alt={name} className="w-full h-full object-cover" />

            <div className="flex flex-col gap-2 p-4">
                {/* <div className="flex items-center justify-between"> */}
                <h3 className="text-[#4D5765] text-[20px] text-center">{name}</h3>
                {/* </div> */}
                <p className="text-sm text-[#7C828F] text-center">{description}</p>
                <p className="text-center font-bold text-[25px]">${cost / 100}</p>

                <Stack spacing={1} className="items-center flex justify-between">
                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                    <p>(20)</p>
                </Stack>

                <div className="flex justify-between">
                    <button onClick={handleAddToCart} className="bg-[#1D4ED7] w-full h-10 m-2 rounded-lg text-[#fff] hover:bg-[#4B56D2]">Add to cart</button>
                    <button onClick={onProductClick} className="bg-[#1D4ED7] w-full h-10 m-2 rounded-md text-[#fff] hover:bg-[#4B56D2]">View</button>
                </div>

            </div>
        </div>
    )
}