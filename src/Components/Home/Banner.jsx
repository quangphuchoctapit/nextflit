import React from 'react'
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Movies } from '../../Data/MovieData';
import FlexMovieItems from '../FlexMovieItems';
import { MdFavorite } from "react-icons/md";

const Banner = () => {
    return (
        <div className='relative w-full'>
            <Swiper
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                modules={[Autoplay]}
                className='w-full xl:h-96 bg-dry lg:h-64 h-48'
            >
                {
                    Movies.slice(0, 6).map((movie, index) => (
                        <SwiperSlide key={index} className='relative rounded overflow-hidden'>
                            <img src={`/assets/images/movies/${movie.titleImage}`} alt={movie.title} className='w-full h-full object-cover' />
                            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col gap-3 lg:gap-5 justify-center">
                                <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>{movie.name}</h1>
                                <div className="flex gap-5 items-center text-dryGray">
                                    <FlexMovieItems movie={movie} />
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Link to={`/movie/${movie.name}`} className='bg-subMain max-sm:text-sm max-sm:px-5 max-sm:p-3 hover:text-white transitions text-white px-8 py-3 rounded font-medium'>
                                        Watch Now
                                    </Link>
                                    <button className='px-6 py-3 bg-gray-400 bg-opacity-75 max-sm:px-5 max-sm:p-3 hover:text-subMain text-white transitions rounded'>
                                        <MdFavorite size={20} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

export default Banner
