import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Hero = () => {
    return (
        <div className='hero-section py-10'>
            <div className="md:container md:mx-auto px-5 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                    <div className="hero-text mb-8 md:mb-0">
                        <h4 className='text-blue-500 text-xl md:text-2xl font-medium'>Welcome to our Medical Care Center</h4>
                        <h2 className='text-4xl md:text-6xl text-gray-600 font-semibold mt-2 md:mb-10 mb-6'>We take care our <br />patients health</h2>
                        <p className='text-lg mb-5'>I realize that becoming a doctor, I can only help a small community. <br />But by becoming a doctor, I can help my whole country.</p>
                        <Link to='/about'>
                            <button style={{ transition: '.3s all' }} className='font-semibold mr-4 bg-blue-500 text-white py-2 border-2 border-transparent hover:border-blue-500 px-8 hover:text-blue-500 hover:bg-white rounded'>About Us</button>
                        </Link>
                        <NavHashLink smooth to='/#services'>
                            <button style={{ transition: '.3s all' }} className='font-semibold mr-2 bg-white text-blue-500 py-2 px-8 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded'>Our Services</button>
                        </NavHashLink>
                    </div>
                    <div className="hero-img">
                        <img src="https://image.freepik.com/free-photo/employees-closeup-young-nurse-service_1301-3095.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;