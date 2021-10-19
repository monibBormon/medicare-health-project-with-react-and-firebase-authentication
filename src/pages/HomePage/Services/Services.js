import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='py-10' id='services'>
            <div className="md:container md:mx-auto px-5 md:px-0">
                <div className="service-title text-center mb-16">
                    <h2 className='text-4xl md:text-5xl font-semibold mb-3 text-gray-600'>Our Services</h2>
                    <span className='block w-32 h-1 bg-blue-500 mx-auto mb-1'></span>
                    <span className='block w-20 h-1 bg-red-500 mx-auto'></span>
                    <p className='mt-3'>We are here to provide you the best services and we care our patients.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;