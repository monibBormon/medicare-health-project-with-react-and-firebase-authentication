import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='border-b-2 border-blue-100'>
            <div className="container mx-auto py-6">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="logo">
                        <Link exact to='/'>
                            <p className='text-blue-500 text-2xl font-semibold'>Medi<span className='text-red-500'>Care+</span></p>
                        </Link>
                    </div>
                    <div className="header-menu text-right mr-10">
                        <NavLink className='text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} exact to='/'>
                            Home
                        </NavLink>
                        <NavLink className='text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} to='/services'>
                            Services
                        </NavLink>
                        <NavLink className='text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} to='/about'>
                            About Us
                        </NavLink>
                        <NavLink className='text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} to='/contact'>
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;