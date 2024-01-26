import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'
import Movie from '../Components/Movie'
import { Movies } from '../Data/MovieData'
import { CgSpinner } from "react-icons/cg";

const MoviesPage = () => {
    const maxPage = 2
    const [page, setPage] = useState(maxPage)
    const handleLoadingMore = () => {
        setPage(page + maxPage)
    }
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Filters />
                <p className="text-lg my-6">
                    Total <span className='font-bold text-subMain'>{Movies.length} </span> items
                </p>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:mt-10 mt-6 gap-6">
                    {Movies.slice(0, page).map((movie, index) => (
                        <Movie movie={movie} key={index} />
                    ))}
                </div>
                <div className='w-full flex flex-col items-center md:my-20 my-10'>
                    <button className='flex items-center gap-3 border-2 border-subMain text-dryGray bg-main max-sm:px-4 max-sm:py-2 px-6 py-4 rounded-lg' onClick={handleLoadingMore}>Loading more <CgSpinner className='animate-spin' /></button>
                </div>
            </div>
        </Layout>
    )
}

export default MoviesPage
