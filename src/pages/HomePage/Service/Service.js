import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, description, icon } = service
    return (
        <div className='single-service shadow-lg py-10 px-5'>
            <i className={`${icon} text-5xl text-blue-500`}></i>
            <h2 className='text-2xl capitalize font-semibold my-3'>{title}</h2>
            <p className='text-lg mb-3'>{description.slice(0, 105)}</p>
            <Link to={`/service/${title}`}>
                <button style={{ transition: '.3s all' }} className='font-semibold mr-2 bg-white text-blue-500 py-2 px-8 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded'>View Service Details</button>
            </Link>
        </div>
    );
};

export default Service;