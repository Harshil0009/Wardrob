import React from 'react'
import {FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { FaLock, FaSearchLocation, FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

export default function Contect() {
  return (
    <>
        <div className="bag mx-auto relative bg-cover bg-center h-full" style={{ backgroundImage: "url('/item/imge/6.png')" }}> 
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className='w-full relative h-auto bg-transparent py-56 px-8'>
                <h1 className='text-5xl md:text-8xl flex justify-center items-center italic text-white'>Contact Us</h1>
            </div>
        </div>
        <div className='w-full bg-white px-5 py-10 md:py-28'>
            <div className='container mx-auto text-center flex flex-col justify-center items-center'>
                <h6 className='text-black text-base font-medium'>Get in touch</h6>
                <p className='text-black text-2xl italic font-medium max-w-md font-sans'>We value the connection with our community and are here to assist in any way we can. Feel free to reach out through the following channels:</p>
            </div>
        </div>
        <div className='w-full flex flex-col gap-8 md:flex-row bg-white px-7 py-10 md:py-28 md:gap-0'>
            <div className='w-full md:w-6/12 flex flex-col gap-6 bg-white'>
                <input type="text" placeholder="Name" className="max-w-xl border py-3 px-4 outline-0 focus:border focus:border-dotted focus:border-gray-300"/>
                <input type="text" placeholder='Email' className='max-w-xl border py-3 px-4 outline-0 focus:border focus:border-dotted focus:border-gray-300'/>
                <textarea name="" id="" placeholder='Message' className='max-w-xl border py-3 px-4 outline-0 focus:border focus:border-dotted focus:border-gray-300' style={{height: "220px"}}/>
                <button className='h-12 w-28 text-black text-sm border border-black hover:text-white hover:font-medium hover:bg-black'>SEND</button>
            </div>
            <div className='w-full md:w-6/12'>
                <div className=' flex flex-row'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-500'>PHONE</p>
                        <h5 className='text-base italic font-mono'>(303) 555-0105</h5>
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-gray-500'>EMAIL</p>
                        <h5 className='text-base italic font-mono'>mail@example.com</h5>
                    </div>
                </div>
                <hr className='bg-gray-500 my-9'/>
                <div className='w-full'>
                    <p className='text-sm text-gray-500'>ADDRESS
                    </p>
                    <h5 className='text-base italic font-mono'>2972 Westheimer Rd. Santa Ana, Illinois 85486</h5>
                </div>
                <hr className='bg-gray-500 my-9'/>
                <div className='flex flex-row'>
                    <p className='text-sm text-gray-500'>FOLLOW US:</p>
                    <div className='flex flex-row gap-3 ml-3'>
                        <a href="/">
                            <FaFacebookF/>
                        </a>
                        <a href="/">
                            <FaPinterestP/>
                        </a>
                        <a href="/">
                            <FaTwitter/>
                        </a>
                        <a href="/">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.22881359042!2d-74.006015!3d40.712776!3m2!1i1024!2i768!4f13.1!3m3!1f0!2f0!3f0!5e0!3m2!1sen!2sus!4v1737463010587!5m2!1sen!2sus" 
                style={{ width: '100%', height: '500px' }} 
                title="Google Maps - London">
            </iframe>
        </div>
        <div className='h-auto w-full bg-white'>
            <div className='h-auto w-full flex flex-row flex-wrap gap-9 justify-center px-14 py-20'>
                <div className='h-36 flex flex-col justify-center items-center gap-2'>
                    <FaLock className='text-2xl'/>
                    <h3 className='text-2xl font-medium italic'>Secure Payments</h3>
                    <p className='text-gray-400 w-56 text-center'>Shop with confidence knowing that your transactions are safeguarded.</p>
                </div>
                <div className='h-36 flex flex-col justify-center items-center gap-2'>
                    <FaTruck className='text-2xl'/>
                    <h3 className='text-2xl font-medium italic'>Free Shipping</h3>
                    <p className='text-gray-400 w-56 text-center'>Shopping with no extra charges complimentary shipping on every order.</p>
                </div>
                <div className='h-36 flex flex-col justify-center items-center gap-2'>
                    <GiReturnArrow className='text-2xl'/>
                    <h3 className='text-2xl font-medium italic'>Easy Returns</h3>
                    <p className='text-gray-400 w-56 text-center'>With our hassle-free Easy Returns, changing your mind convenient.</p>
                </div>
                <div className='h-36 flex flex-col justify-center items-center gap-2'>
                    <FaSearchLocation className='text-2xl'/>
                    <h3 className='text-2xl font-medium italic'>Order Tracking</h3>
                    <p className='text-gray-400 w-56 text-center'>Stay in the loop with our Order Tracking feature-from checkout to your doorstep.</p>
                </div>
            </div>
        </div>
        <div className="bag mx-auto relative bg-cover bg-center h-full" style={{ backgroundImage: "url('/item/imge/4.png')" }}>
            
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            
            <div className='adj'>
                <div className='container relative mx-auto w-full py-44 px-5 flex flex-col gap-4'>
                    <h6 className='text-white'>Explore</h6>
                    <h2 className='text-white text-2xl w-72 italic font-sans md:w-96 md:text-4xl'>Elevate your wardrobe, embrace timeless style!</h2>
                    <p className='text-white text-sm max-w-lg'>Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!</p>
                    <a href="/" className="bg-transparent text-white border-2 border-white font-mono py-3 px-6 text-lg hover:bg-white hover:text-black w-36">
                        SHOP NOW
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}
