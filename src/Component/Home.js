import React from 'react'
import Product from './Product/Product'
import Newproduct from './Product/Newproduct'
import './Mix.css';
import { FaLock, FaSearchLocation, FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

export default function Home() {
  return (
    <>
        <div className="relative bg-cover bg-center h-screen">
            
            <div className="absolute top-0 left-0 w-full h-full  opacity-50"></div>
            
            {/* Content */}
            <div className="container mx-auto relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 py-4">
                <p>Casual & Everyday</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 italic">
                Effortlessly Blend Comfort <br /> & Style!
                </h1>
                <p className="text-sm md:text-xl mb-6 max-w-4xl">
                Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
                </p>
                <a
                href="/"
                className="bg-transparent text-white border-2 border-white font-mono py-3 px-6 text-lg hover:bg-white hover:text-black"
                >
                View Collection
                </a>
            </div>
        </div>
        <div className='relative bg-white text-black h-auto pt-28 px-10 md:px-20'>
            <Product/>
        </div>
        <div className="bag relative bg-cover bg-center h-auto" style={{ backgroundImage: "url('/item/imge/2.png')" }}>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

            {/* Content */}
            <div className="container mx-auto relative z-10 flex flex-col justify-center items-end h-auto py-10  text-white text-center px-2">
                <div className="flex flex-col justify-center items-center">
                <div className="relative aspect-[3/4] mb-4 h-96 w-auto md:w-80">
                    <img src="/item/imge/Bag.png" alt="Bag_image" className="object-cover w-full h-full" />
                </div>
                <h1 className="text-4xl md:text-3xl font-bold mb-8 italic w-80">
                    Explore our exquisite Bag Collection now!
                </h1>
                <a
                    href="/"
                    className="bg-transparent text-white border-2 border-white font-mono py-3 px-6 text-lg hover:bg-white hover:text-black w-60"
                >
                    View Collection
                </a>
                </div>
            </div>
        </div>
        <div className='relative h-auto flex flex-row'>
            <div className='w-full h-auto bg-white flex flex-col gap-3 items-start justify-center px-4 py-14 md:px-20 md:py-56'>
                <h6 className='text-sm font-mono'>Work & Office Attire</h6>
                <h2 className='text-4xl font-bold font-sans italic md:text-6xl'>Professional pinstripe blazers collection</h2>
                <p className=''>Elevate your workwear with our Professional Pinstripe Blazers Collection, where tailored sophistication meets modern confidence for a powerfully polished office look.</p>
                <a
                    href="/"
                    className="bg-transparent text-black border-2 border-black font-mono py-3 px-6 text-lg text-center hover:bg-black hover:text-white w-60"
                >
                    View Collection
                </a>
            </div>
            <div className='w-full h-auto'>
                <img src="/item/imge/Blez.png" alt="" className='h-full w-full object-cover object-right' />
            </div>
        </div>
        <div className="bag relative bg-cover bg-center h-auto" style={{ backgroundImage: "url('/item/imge/3.png')" }}>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

            {/* Content */}
            <div className="container mx-auto relative z-10 flex flex-col justify-start items-start h-auto pb-32 text-white text-center px-4 md:px-24">
                <div className="flex flex-col justify-center items-start -mt-11">
                    <div className="relative aspect-[3/4] mb-4 h-96 w-auto md:w-80">
                        <img src="/item/imge/Shop.png" alt="Bag_image" className="object-cover w-full h-full" />
                    </div>
                    <h1 className="text-4xl md:text-3xl font-bold text-left mb-8 italic w-60 md:w-80">
                    Discover the allure of fashion reinvented!
                    </h1>
                    <p className='text-sm font-bold text-left mb-8 italic w-60 md:w-6/12'>
                        Dive into a world of style with our latest collection! Shop now and redefine your wardrobe narrative!
                    </p>
                    <a
                        href="/"
                        className="bg-transparent text-white border-2 border-white font-mono py-3 px-6 text-lg hover:bg-white hover:text-black w-36"
                    >
                        SHOP NOW
                    </a>
                </div>
            </div>
        </div>
        <div className='relative bg-white text-black h-auto pt-28 px-10 md:px-20'>
            <Newproduct/>
        </div>
        <div className="bag mx-auto relative bg-cover bg-center h-auto" style={{ backgroundImage: "url('/item/imge/5.png')" }}>
            
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            
            <div className='container relative mx-auto py-16 flex flex-col gap-4 px-4 font-serif text-center xl:px-72'>
                <h4 className='text-3xl text-yellow-400'>★★★★★</h4>
                <p className='container text-lg text-white italic md:text-4xl'>
                    ”FemmeWardrobe is my fashion sanctuary! The curated collection effortlessly blends chic trends with timeless elegance, making every purchase a delightful discovery. The quality of their pieces is unmatched, and I appreciate the brand's commitment to sustainable fashion. What truly sets FemmeWardrobe apart is their customer-centric approach.”
                </p>
                <h5 className='text-white text-sm'>
                    Sarah M., Devoted FemmeWardrobe Fan
                </h5>
            </div>
        </div>
        <div className='h-auto w-full bg-white'>
            <div className='h-auto w-full flex flex-row flex-wrap gap-9 justify-center px-14 py-20'>
                <div className='h-36 flex flex-col justify-center items-center gap-2'>
                    <FaLock className='text-2xl'/>
                    <h3 className='text-2xl font-medium italic'>Secure Payments</h3>
                    <p className='text-gray-400 w-56 text-center'>Shop with confidence your transactions are safeguarded.</p>
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
