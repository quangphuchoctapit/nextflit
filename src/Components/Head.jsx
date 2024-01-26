import React from 'react'

const Head = ({ title }) => {
    return (
        <div className='w-full bg-deepGray lg:h-64 relative overflow-hidden rounded-md'>
            <img src="/head.jpg" alt="About Us" className='object-cover w-full h-full' />
            <div className="absolute right-0 left-0 lg:top-24 top-16  font-bold ">
                <h1 className='uppercase lg:text-h1 text-3xl text-center'>{title && title}</h1>
            </div>
        </div>
    )
}

export default Head
