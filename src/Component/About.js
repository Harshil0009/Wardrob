import React from 'react'

export default function About() {
  return (
    <>
        <div className="bag mx-auto relative bg-cover bg-center h-full" style={{ backgroundImage: "url('/item/imge/7.png')" }}>
            
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            
            <div className='w-full relative h-auto bg-transparent py-56 px-8'>
                <h1 className='text-5xl md:text-8xl flex justify-center items-center text-white italic'>About Us</h1>
            </div>
        </div>
        <div className='bg-white h-auto'>
            <div className='flex flex-col container mx-auto px-5 py-10 justify-evenly gap-5 md:flex-row md:py-32'>
                <div className='max-w-max md:max-w-lg'>
                    <h1 className='text-2xl italic md:text-5xl'>From Vision to Vogue: The Birth of FemmeWardrobe</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <h6 className='text-sm font-medium w-auto'>Our story</h6>
                    <h5 className='italic text-base font-medium max-w-lg'>Our journey began with a simple yet powerful vision - to redefine the way women experience fashion.</h5>
                    <p className='text-sm text-gray-500 max-w-lg'>
                        Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.
                    </p>
                </div>
            </div>
            <hr className='bg-gray-700 container mx-auto'/>
            <div className='flex flex-col container mx-auto px-5 py-10 gap-7 md:py-32'>
                <h5 className='text-base font-medium'>Quality Assurance</h5>
                <h1 className='text-2xl font-serif font-medium italic md:text-5xl'>
                    We understand that fashion is an expression of identity, and we take pride in delivering products that embody the highest standards of quality.
                </h1>
                <p className='text-sm font-sans text-gray-500'>
                    Our journey to excellence begins with meticulous sourcing, where we carefully select materials that meet our stringent criteria for durability, comfort, and style. Every garment is crafted with precision in our state-of-the-art manufacturing facilities, ensuring attention to detail at every stitch. Our commitment to quality doesn't end there – rigorous quality control processes guarantee that each piece meets our exacting standards before it finds its way to your wardrobe. Trust in FemmeWardrobe for fashion that not only captures attention but withstands the test of time.
                </p>
            </div>
        </div>
        <div className="bag mx-auto relative bg-cover bg-center h-auto" style={{ backgroundImage: "url('/item/imge/8.png')" }}>
            
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            
            <div className='relative flex flex-col gap-6 container mx-auto px-5 py-10 md:py-32'>
                <h5 className='text-base text-white'>Customer-Centric Approach</h5>
                <h1 className='text-white text-2xl italic font-serif max-w-2xl md:text-5xl'>Beyond Fashion: Nurturing a Customer-Centric Experience</h1>
                <p className='text-sm text-white max-w-xl'>We believe that the essence of our success lies in the satisfaction of our customers. Our commitment to providing an exceptional shopping experience goes beyond trends and styles – it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. From personalized recommendations to hassle-free returns, we've crafted every aspect of our service with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your satisfaction is not just a priority; it's our passion.</p>
            </div>
        </div>
        <div className='bg-white'>
            <div className='container mx-auto px-5 py-10 md:py-24'>
                <h6 className='text-base font-medium'>Sustainability Initiatives</h6>
                <h1 className='text-2xl font-medium italic md:text-5xl'>Conscious Fashion for a Better Tomorrow</h1>
            </div>
            <div className='container flex flex-col md:flex-row justify-between mx-auto px-5 pb-10 md:pt-0 md:pb-24'>
                <div className=''>
                    <p className='text-base font-medium max-w-lg italic md:text-lg'>we recognize the responsibility we hold in shaping a more sustainable future for fashion. Our commitment to eco-friendly practices and sustainable fashion choices is at the core of what we do.</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='max-w-lg text-sm text-gray-500 font-medium'>From the careful selection of ethically sourced materials to the implementation of environmentally conscious manufacturing processes, every step we take is a stride toward a greener and more sustainable industry.</p>
                    <p className='max-w-lg text-sm text-gray-500 font-medium'>We prioritize transparency in our supply chain, partnering with suppliers who share our values of fair labor practices and environmental stewardship. Our sustainable fashion choices extend to packaging as well – we use recyclable materials to minimize our environmental footprint. Join us on this journey towards conscious fashion, where style meets responsibility, and every purchase contributes to a brighter, eco-friendly tomorrow.</p>
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
