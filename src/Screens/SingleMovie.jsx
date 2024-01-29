import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../Data/MovieData'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieCast from '../Components/Single/MovieCast'
import MovieRates from '../Components/Single/MovieRates'

const SingleMovie = () => {
    const { id } = useParams()
    const movie = Movies.find((movie) => movie.name === id)
    return (
        <Layout>
            <MovieInfo movie={movie} />
            <div className="container mx-auto min-h-screen px-2 py-6">
                <MovieCast movie={movie} />
                <MovieRates movie={movie} />
            </div>
        </Layout>
    )
}

export default SingleMovie
