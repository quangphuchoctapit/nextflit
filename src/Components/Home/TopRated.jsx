import { useState } from 'react'
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from '../Titles'
import { Autoplay, Navigation } from 'swiper';
import { Movies } from '../../Data/MovieData';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Rating from '../Stars';

const TopRated = () => {
    const [nextEl, setNextEl] = useState(null)
    const [prevEl, setPrevEl] = useState(null)
    const classNames = 'hover:bg-dry transitions flex-rows text-sm p-2 bg-subMain rounded-md text-white '
    return (
        <div className='my-16'>
            <Title title={'Top Rated'} Icon={BsBookmarkStarFill} />
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
    )
}

export default TopRated
