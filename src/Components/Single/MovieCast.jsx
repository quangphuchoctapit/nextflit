import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import Titles from '../Titles';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper';


const MovieCast = ({ movie }) => {
    console.log(movie);
    return (
        <div>
            <Titles Icon={FaUserFriends} title='Movie Casts' />
            <Swiper autoplay={{ delay: 1000, disabledOnInteraction: false }} loop={true} speed={1000} module={[Autoplay]} spaceBetween={10} breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                400: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 4
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 30
                }
            }}>
                {movie?.casts.map((cast, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full p-3 italic text-xs text-text rounded flex flex-col items-center bg-dry">
                            <img src={`/assets/images/movies/${movie.titleImage}`} alt={cast.name} className='w-full h-full object-cover' />
                            <p className='mt-2 '>{cast.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieCast
