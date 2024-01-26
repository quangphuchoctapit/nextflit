import React from 'react'
import Layout from '../Layout/Layout.jsx'
import Banner from '../Components/Home/Banner.jsx'
import PopularMovies from '../Components/Home/PopularMovies.jsx'
import TopRated from '../Components/Home/TopRated.jsx'
import Promos from '../Components/Home/Promos.jsx'

const HomeScreen = () => {
    return (
        <Layout>
            <div className='min-h-screen container mx-auto px-2 '>
                <Banner />
                <PopularMovies />
                <Promos />
                <TopRated />
            </div>
        </Layout>
    )
}

export default HomeScreen
