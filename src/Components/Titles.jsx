import React from 'react'

const Titles = ({ title, Icon }) => {
    return (
        <div className='w-full text-lg lg:text-2xl font-bold flex sm:gap-8 gap-4 items-center'>
            <Icon className='text-subMain' size={20} />
            <h2 className=''>{title}</h2>
        </div>
    )
}

export default Titles
