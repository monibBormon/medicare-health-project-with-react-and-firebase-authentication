import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user);
    return (
        <div className='border-b-2 border-blue-100'>
            <div className="md:container md:mx-auto py-6 px-5 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div className="logo">
                        <Link exact to='/'>
                            <p className='text-blue-500 text-2xl font-semibold text-center md:text-left'>Medi<span className='text-red-500'>Care+</span></p>
                        </Link>
                    </div>
                    <div className="header-menu text-center md:text-right">
                        <NavLink className='text-lg md:text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} exact to='/'>
                            Home
                        </NavLink>
                        <NavLink className='text-lg md:text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} to='/services'>
                            Services
                        </NavLink>
                        <NavLink className='text-lg md:text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} to='/about'>
                            About Us
                        </NavLink>
                        <NavLink className='text-lg md:text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} to='/contact'>
                            Contact Us
                        </NavLink>
                        {
                            user.displayName ? <div className='inline-block ml-5 mt-4 md:mt-0'>
                                <div className="log-out flex">
                                    <h2 className='text-sm mr-2 text-blue-500 font-medium'>{user.displayName}</h2>
                                    <button className='text-sm border-2 border-blue-500 rounded-full px-1 font-medium text-blue-500' onClick={logOut}>Log Out</button>
                                </div>
                            </div> :
                                <NavLink className='text-lg md:text-xl mr-5 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-400 font-semibold pb-1' activeClassName='selected' style={{ transition: '.3s all' }} to='/login'>
                                    Login
                                </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;