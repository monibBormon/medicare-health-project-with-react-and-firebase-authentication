import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    const { title } = useParams()
    const history = useHistory()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // go back button
    const handleGoBack = () => {
        history.push('/')
    }
    return (
        <div className='py-5'>
            {
                services?.filter(item => item.title === title)?.map((service) => (
                    <div className='container mx-auto' key={service.id}>
                        <img src={service.image} alt="" />
                        <h2 className='text-5xl capitalize font-semibold my-5'>{service.title}</h2>
                        <p className='text-lg'>{service.description}</p>
                    </div>
                ))
            }
            <div className="container mx-auto">
                <div className="back mt-5">
                    <button onClick={handleGoBack} style={{ transition: '.3s all' }} className='font-semibold mr-4 bg-blue-500 text-white py-2 border-2 border-transparent hover:border-blue-500 px-8 hover:text-blue-500 hover:bg-white rounded'>Go Back..</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;