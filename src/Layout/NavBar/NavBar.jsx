import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaUser } from 'react-icons/fa'
import { MdFavorite } from "react-icons/md";

const NavBar = () => {
    const hover = 'hover:text-subMain text-white transitions uppercase  '
    const Hover = ({ isActive }) => {
        return (
            isActive ? 'text-subMain uppercase  ' : hover
        )
    }
    return (
        <div className='bg-main shadow-md sticky top-0 z-20 pr-3'>
            <div className="container text-white mx-auto py-6 px-2 fo lg:grid gap-10 grid-cols-7 justify-between items-center">
                {/* logo */}
                <div className="col-span-1 lg:block hidden">
                    <Link to='/'>
                        <div className="">
                            <img src={`/logo.png`} className='bg-main' alt="Logo" />
                        </div>
                        {/* <span className='text-subMain text-4xl font-bold uppercase'>NEXTFLIT</span> */}
                    </Link>
                </div>

                {/* search  */}
                <div className="col-span-3">
                    <form className='w-full text-md bg-dryGray rounded flex-btn gap-4'>
                        <button type='submit' className='bg-subMain w-12 flex-colo h-12 rounded text-white'><FaSearch /></button>
                        <input type="text" placeholder='Search movie name from here' className='font-medium placeholder:text-border text-md w-11/12 h-12 bg-transparent outline-none border-none text-black' />
                    </form>
                </div>

                {/* menus */}
                <div className="col-span-3 font-medium text-xl hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
                    <NavLink to='/movies' className={Hover}>Movies</NavLink>
                    <NavLink to='/about-us' className={Hover}>About Us</NavLink>
                    <NavLink to='/contact-us' className={Hover}>Contact Us</NavLink>
                    <NavLink to='/login' className={Hover}>
                        <FaUser size={25} />
                    </NavLink>
                    <NavLink to='/favorite' className={`relative ${Hover}`}>
                        <MdFavorite size={25} />
                        <div className="absolute -top-3 -right-4 w-6 h-6 items-center justify-center text-white bg-subMain rounded-full flex">3</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar
