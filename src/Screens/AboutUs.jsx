import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Head'

const AboutUs = () => {
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Head title={'About Us'} />
                <div className="my-16 grid xl:grid-cols-2 gap-4 xl:gap-16">
                    <div className="">
                        <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                            Welcome to Nextflit
                        </h3>
                        <div className="mt-3 text-text text-sm leading-8">
                            <p>Welcome to NextFlix, your premier movie destination! At NextFlix, we're devoted to delivering a captivating cinematic experience. Dive into a curated collection of timeless classics and the latest blockbusters, carefully tailored to suit every taste. Our user-friendly interface ensures seamless navigation, allowing you to explore personalized recommendations and curated lists effortlessly. More than just a platform, NextFlix is a community that celebrates the magic of storytelling. Join us for a cinematic journey where every click unveils a world of entertainment. Your next flick is just a click away at NextFlix – the ultimate destination for film enthusiasts.</p>
                            <p>At NextFlix, we go beyond mere movie streaming; we're your cinematic companion on a journey of discovery. With a commitment to diversity and a passion for storytelling, our platform fosters a sense of community among film enthusiasts. Explore our vast collection, from heartwarming classics to pulse-pounding thrillers, and indulge in an immersive world where every film becomes an unforgettable experience. Welcome to NextFlix, where the magic of movies unfolds with every click, connecting you to a global community of fellow cinephiles who share your love for the silver screen. Your next cinematic adventure begins here!
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mt-8 ">
                            <div className="bg-dry rounded-lg px-4">
                                <span className='text-3xl block font-extrabold my-3 mt-4'>10K</span>
                                <h4 className="text-lg my-2 font-semibold">Listed Movies</h4>
                                <p className="text-sm text-text leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil atque possimus reprehenderit, corrupti libero repudiandae pariatur sint voluptas, et recusandae consectetur, saepe maxime dolorem totam? Consequuntur nostrum labore perspiciatis?</p>
                            </div>
                            <div className="bg-dry rounded-lg px-4 ">
                                <span className='text-3xl block font-extrabold my-3 mt-4'>8K</span>
                                <h4 className="text-lg my-2 font-semibold">Lovely Users</h4>
                                <p className="text-sm text-text leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil atque possimus reprehenderit, corrupti libero repudiandae pariatur sint voluptas, et recusandae consectetur, saepe maxime dolorem totam? Consequuntur nostrum labore perspiciatis?</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <img src="aboutus.jpg" alt="About Us" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutUs
