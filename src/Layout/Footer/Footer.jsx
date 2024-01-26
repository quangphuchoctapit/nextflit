import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const Links = [
        {
            title: 'Company',
            links: [
                {
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'About Us',
                    link: '/about-us'
                },
                {
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    name: 'Movies',
                    link: '/movies'
                },
            ]
        },
        {
            title: 'Top Categories',
            links: [
                {
                    name: 'Action',
                    link: '#'
                },
                {
                    name: 'Romantic',
                    link: '#'
                },
                {
                    name: 'Drama',
                    link: '#'
                },
                {
                    name: 'History',
                    link: '#'
                },
            ]
        },
        {
            title: 'My Account',
            links: [
                {
                    name: 'Dashboard',
                    link: '/dashboard'
                },
                {
                    name: 'My Favorites',
                    link: '/favorite'
                },
                {
                    name: 'Profile',
                    link: '/profile'
                },
                {
                    name: 'Change Password',
                    link: '/password'
                },
            ]
        }
    ]
    return (
        <div className='bg-dry py-4 border-t-2 border-black'>
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 py-10 justify-between">
                    {Links.map((item, index) => (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0" key={index}>
                            <h3 className='text-md lg:leading-7 font-bold mb-3.5 sm:mb-4 lg:mb-6'>
                                {item.title}
                            </h3>
                            <ul className="flex flex-col gap-2">
                                {item.links.map((item, index) => (
                                    <Link to={`${item.link}`} key={index} className='text-base hover:text-subMain transitions text-gray-500'>{item.name}</Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="sm:pb-3.5 pb:pb-0 gap-3 col-span-1 md:col-span-2 lg:col-span-3 flex-colo">
                        <Link>
                            <div className="text-subMain text-2xl md:text-5xl font-bold" >NEXTFLIT</div>
                        </Link>
                        <div className="text-border leading-7 flex flex-col gap-2">
                            <span className='text-sm md:text-lg hover:text-subMain transitions'> abcxyz blabla nextflit owned by Tommy Le</span>
                            <span className='text-sm md:text-lg hover:text-subMain transitions'> Tel: 0707171164</span>
                            <span className='text-sm md:text-lg hover:text-subMain transitions'> email: thangteo1310@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
