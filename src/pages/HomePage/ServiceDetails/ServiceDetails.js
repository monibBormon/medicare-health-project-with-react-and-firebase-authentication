import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { NavHashLink } from 'react-router-hash-link';

const ServiceDetails = () => {
    const { title } = useParams()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-5'>
            {
                services?.filter(item => item.title === title)?.map((service) => (
                    <div className='md:container md:mx-auto px-5 md:px-0' key={service.id}>
                        <img src={service.image} alt="" />
                        <h2 className='text-5xl capitalize font-semibold my-5 text-gray-600'>{service.title}</h2>
                        <p className='text-lg'>{service.description}</p>
                    </div>
                ))
            }
            <div className="md:container md:mx-auto px-5 md:px-0">
                <div className="back mt-5">
                    <NavHashLink smooth to='/#services'>
                        <button style={{ transition: '.3s all' }} className='font-semibold mr-4 bg-blue-500 text-white py-2 border-2 border-transparent hover:border-blue-500 px-8 hover:text-blue-500 hover:bg-white rounded'>Go Back..</button>
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;