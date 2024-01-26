import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'

const MoviesPage = () => {
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Filters />
            </div>
        </Layout>
    )
}

export default MoviesPage
