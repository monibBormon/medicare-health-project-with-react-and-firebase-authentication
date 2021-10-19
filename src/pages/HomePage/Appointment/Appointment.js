import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className='bg-blue-500'>
            <div className="md:container md:mx-auto px-5 md:px-0 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="appointment-text text-center md:text-left">
                        <h2 className='text-4xl text-white mb-5 md:mb-0'>Want to book a appointment for your consultancy?</h2>
                    </div>
                    <div className="appointment-btn text-center md:text-right mr-0 md:mr-10">
                        <Link to='/contact'>
                            <button style={{ transition: '.3s all' }} className='font-semibold text-xl mr-4 bg-white text-blue-500 py-3 px-10 hover:text-blue-500 hover:bg-white rounded'>Book Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;