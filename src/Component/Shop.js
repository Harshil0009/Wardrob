import React from 'react'
import Product from './Product/Product'

function Shop() {
  return (
    <>
        <div className="bag mx-auto relative bg-cover bg-center h-full" style={{ backgroundImage: "url('/item/imge/6.png')" }}> 
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className='w-full relative h-auto bg-transparent py-56 px-8'>
                <h1 className='text-5xl md:text-8xl flex justify-center items-center italic text-white'>Shop</h1>
            </div>
        </div>
        <div className='w-full mx-auto bg-white'>
            <Product/>
        </div>
    </>
  )
}

export default Shop
