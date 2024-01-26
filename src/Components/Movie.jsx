import React from 'react'
import { Link } from 'react-router-dom'
import { MdFavorite } from "react-icons/md";

const Movie = ({ movie }) => {
    return (
        <div className='border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden '>
            <Link to={`/movie/${movie.name}`} className='w-full'>
                <img src={`/assets/images/movies/${movie.titleImage}`} alt={movie.title} className='w-full h-64 object-cover' />
            </Link>
            <div className="absolute flex-btn justify-between gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
                <h3 className='font-semibold truncate'>{movie.name}</h3>
                <div className="flex justify-end items-center ">
                    <button className='p-3 text-white transitions bg-subMain hover:bg-gray-300 hover:text-subMain rounded-md '><MdFavorite /></button>
                </div>
            </div>
        </div>
    )
}

export default Movie
