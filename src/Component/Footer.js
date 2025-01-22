import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='w-full bg-[#f6f6f6]'>
            <div className='w-full flex flex-wrap justify-center text-center py-10 px-14 gap-10 md:justify-between md:text-left'>
                <div className=''>
                    <h3 className='mb-3 font-medium text-xl font-serif'>Menu</h3>
                    <div className='w-40 flex flex-col text-lg text-gray-500 font-medium'>
                        <a href="/" className='text-gray-500 hover:text-black'>Home</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Shop</a>
                        <a href="/" className='text-gray-500 hover:text-black'>About Us</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Contact Us</a>
                    </div>
                </div>
                <div className=''>
                    <h3 className='mb-3 font-medium text-xl font-serif'>Categories</h3>
                    <div className='w-40 flex flex-col text-lg  font-medium'>
                        <a href="/" className='text-gray-500 hover:text-black'>Casual</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Work & Office</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Activewear</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Evening Dresses</a>
                    </div>
                </div>
                <div className=''>
                    <h3 className='mb-3 font-medium text-xl font-serif'>Resources</h3>
                    <div className='w-40 flex flex-col text-lg text-gray-500 font-medium'>
                        <a href="/" className='text-gray-500 hover:text-black'>Contact Support</a>
                        <a href="/" className='text-gray-500 hover:text-black'>FAQ</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Live Chat</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Returns</a>
                    </div>
                </div>
                <div className=''>
                    <h3 className='mb-3 font-medium text-xl font-serif'>Social Media</h3>
                    <div className='w-40 flex flex-col text-lg text-gray-500 font-medium'>
                        <a href="/" className='text-gray-500 hover:text-black'>Facebook</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Twitter</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Instagram</a>
                        <a href="/" className='text-gray-500 hover:text-black'>Pinterest</a>
                    </div>
                </div>
            </div>
            <hr className='bg-gray-500'/>
            <div className='text-center py-10'>
                <p className='text-gray-500 font-medium'>Copyright © 2025 Clothing Store | Powered by Clothing Store</p>
            </div>
        </div> 
    </>
  )
}