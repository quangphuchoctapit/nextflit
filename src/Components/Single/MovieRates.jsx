import React, { useState, useEffect } from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, SelectInput } from '../UserInput';
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import Rating from '../Stars'
import { MdReviews } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi2";
import { Movies } from '../../Data/MovieData';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const MovieRates = ({ movie }) => {
    const [nextEl, setNextEl] = useState(null)
    const [prevEl, setPrevEl] = useState(null)
    const classNames = 'hover:bg-dry transitions flex-rows text-sm p-2 bg-subMain rounded-md text-white '

    const [rating, setRating] = useState(null)
    const _Rating = [
        {
            title: '0 - Poor',
            value: 0
        },
        {
            title: '1 - Fair',
            value: 1
        },
        {
            title: '2 - Good',
            value: 2
        },
        {
            title: '3 - Very Good',
            value: 3
        },
        {
            title: '4 - Excellent',
            value: 4
        },
        {
            title: '5 - Masterpiece',
            value: 5
        },
    ]
    return (
        <div className='my-12'>
            <Titles title={'Rates'} Icon={BsBookmarkStarFill} />
            <div className="xl:grid grid-cols-5 flex flex-col gap-12 bg-dry  rounded xs:p-10 p-8">
                <div className="xl:col-span-2 w-full flex flex-col gap-8 ">
                    <h3 className='text-xl text-text font-semibold'>Review "{movie.name}"</h3>
                    <p className='text-sm leading-7 font-medium text-border'>
                        Write a review for this movie. It will be posted on this page.
                    </p>
                    <div className="text-sm w-full">
                        <div className="text-star flex my-8 gap-2 text-lg items-center">
                            <p className='text-lg text-text'>Community rating: </p>
                            <Rating value={movie.rate} />
                        </div>
                        <SelectInput label={'Select Rating'} options={_Rating} onChange={(e) => { setRating(e.target.value) }} />
                        <Message label={'Message'} placeholder={'Make it short and sweet'} />
                        <button className='bg-subMain mt-4 max-sm:w-full px-6 py-3 text-lg text-dryGray rounded'>Submit</button>
                    </div>
                </div>
                <div className="xl:col-span-3 w-full flex flex-col gap-8">
                    <Titles title={'Reviews'} Icon={MdReviews} />
                    {movie.casts.slice(0, 22).map((cast, index) => (
                        <div className='bg-dry border grid grid-cols-12 gap-5 rounded border-border p-3 text-dryGray' key={index}>
                            <div className="col-span-3 rounded-full flex items-center">
                                <div className="md:w-32 md:h-32 w-20 h-20 ">
                                    <HiUserCircle className='text-green-500' size={120} />
                                </div>
                            </div>
                            <div className="col-span-6 overflow-hidden">
                                <div className="text-text h-32 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat beatae ipsum quis nostrum modi sint velit laudantium. Facilis vitae quod voluptatibus quo blanditiis fugiat reiciendis magnam tenetur! Adipisci, eligendi.</div>
                            </div>
                            <div className="col-span-3 border-l border-dryGray overflow-hidden">
                                <div className=" h-32 w-full text-star flex justify-center items-center">
                                    <Rating value={movie.rate} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-full flex flex-col gap-8">
                <Titles title={'Related Movies'} Icon={MdReviews} />
                <div className="mt-10">
                    <Swiper className=''
                        navigation={{ nextEl, prevEl }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            }
                        }}
                        autoplay={true}
                        speed={1000}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                    >
                        {Movies.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-2 h-36 xs:h-48  xl:h-rate hovered border-border border relative rounded-lg overflow-hidden bg-dry">
                                    <img src={`/assets/images/movies/${movie.titleImage}`} alt={movie.title} className='w-full h-full bg-center object-cover' />
                                    <div className="px-4 absolute text-center  hoveres transitions bg-black xl:gap-6  bg-opacity-60 inset-0 flex items-center justify-center">
                                        <button className='transitions w-12 h-12 flex-colo transitions bg-gray-500 hover:bg-subMain text-white rounded-full'>
                                            <FaHeart />
                                        </button>
                                        <Link className='font-semibold text-xl truncate line-clamp-2 transitions hover:text-subMain' to={`/movie/${movie.name}`}>{movie.name}</Link>
                                        <div className="text-star flex items-center">
                                            <Rating value={movie.rate} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='w-full flex-rows gap-6 pt-12 px-1'>
                        <button className={classNames} ref={(node) => setPrevEl(node)}><BsCaretLeftFill /></button>
                        <button className={classNames} ref={(node) => setNextEl(node)}><BsCaretRightFill /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieRates