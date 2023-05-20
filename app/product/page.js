'use client'
import useCart from "../(store)/store"

export default function ProductPage(props) {
    const { searchParams } = props
    const { price_id } = searchParams

    const product = useCart(state => state.product)
    const addItemToCart = useCart(state => state.addItemToCart)
    const { cost, productInfo, name, description } = product

    // console.log(searchParams)

    if (!product?.name) {
        window.location.href = '/'
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
        <div className="flex flex-col p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
                <div className="md:p-2 shadow">
                    <img src={productInfo.images[0]} alt={name} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center md:flex-col md:items-start justify-between text-xl gap-2">
                        <h3 className="p-5">{name}</h3>
                    </div>
                    <p className="text-sm flex-1 text-slate-600 p-5 -mt-7">{description}</p>
                    <hr className="w-full bg-[#000]"></hr>
                    <p className="md:text-base font-bold text-lg ml-5">${cost / 100}</p>
                    <button onClick={handleAddToCart} className="bg-[#1D4ED7] rounded-lg text-white hover:bg-blue-800 cursor-pointer ml-auto px-4 py-2">Add to cart</button>
                </div>
            </div>
        </div>
    )
}