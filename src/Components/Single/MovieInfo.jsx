import React from 'react'
import FlexMovieItems from '../FlexMovieItems'
import { FaShareAlt, FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const MovieInfo = ({ movie }) => {

    return (
        <div className='xl:h-screen w-full text-white relative'>
            <img src={`/assets/images/movies/${movie?.titleImage}`} alt={movie.name} className='hidden xl:inline-block object-cover w-full  sm:h-full' />
            <div className="xl:absolute bg-dry xl:bg-opacity-90 flex flex-col inset-0">
                <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex flex-col justify-center items-center gap-3 py-10 ">
                    <div className="col-span-1 w-full  sm:h-header border">
                        <img src={`/assets/images/movies/${movie?.titleImage}`} alt={movie.name} className=' object-cover w-full h-[200px] sm:h-full' />
                    </div>
                    <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
                        <div className="col-span-3 flex flex-col gap-6 ">
                            <h2 className=" w-full font-sans text-2xl font-bold">
                                {movie.name}
                            </h2>
                            <div className="flex gap-3 font-medium text-dryGray items-center">
                                <div className="px-2 py-1 bg-subMain flex items-center justify-center">HD 4K</div>
                                <FlexMovieItems movie={movie} />
                            </div>
                            <div className="text-text text-sm leading-7">{movie?.desc}</div>
                            <div className="grid sm:grid-cols-5">
                                <div className="col-span-1 flex flex-col justify-center items-center">
                                    <button className='w-10 h-10 bg-white rounded-lg bg-opacity-60 flex justify-center items-center'><FaShareAlt /></button>
                                </div>
                                <div className="col-span-2">
                                    <div className="bg-dry p-3 border border-border rounded-lg">Language: {' '} {movie.language}</div>
                                </div>
                                <div className="col-span-2 flex justify-end items-center">
                                    <Link to={`/watch/movie/${movie.name}`} className='bg-dry hover:bg-subMain transitions text-white border border-subMain px-8 py-3 rounded-full flex items-center gap-2'><FaPlay w={5} h={5} />Watch</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                            <button className='bg-subMain transitions hover:bg-transparent border mt-5 border-subMain w-32  rounded md:h-64 h-20'>
                                <div className=" flex items-center justify-center uppercase md:rotate-90 ">
                                    <div className="text-lg font-bold">Download</div>
                                    <FaDownload className='ml-5 md:rotate-0' w={15} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
