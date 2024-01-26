import React from 'react'
import { FaUser } from "react-icons/fa";

const Promos = () => {
    return (
        <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
            <div className="lg:grid flex-col gap-8 items-center flex lg:grid-cols-2 lg:gap-10">
                <div className="flex lg:gap-10 gap-6  flex-col">
                    <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium leading-loose xl:leading-relaxed '>
                        download your movies & watch offline <br /> enjoy on your mobile
                    </h1>
                    <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                        Discover a world of entertainment with our exclusive film promotions! Immerse yourself in a captivating cinematic experience as we bring you a curated selection of blockbuster hits, timeless classics, and exciting originals. From gripping dramas to thrilling adventures, our film promotions promise an unforgettable journey into the realm of storytelling. Join now and unlock a universe of cinematic wonders – because every movie lover deserves a front-row seat to the magic of the silver screen.
                    </p>
                    <div className="flex gap-5 text-sm md:text-lg">
                        <div className="bg-main text-subMain px-5 py-3 rounded border-gray-600 border">HD 4K</div>
                        <div className="flex gap-3 bg-main items-center text-subMain px-5 py-3 rounded border-gray-600 border">
                            <FaUser />
                            <span>2K</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="/assets/images/mobile-nextflit.jpg" alt="Mobile App" className='rounded w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Promos
