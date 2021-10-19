import React from 'react';

const Doctors = () => {
    return (
        <div>
            <div className="md:container md:mx-auto px-5 md:px-0 py-10">
                <div className="service-title text-center mb-16">
                    <h2 className='text-4xl md:text-5xl font-semibold mb-3 text-gray-600'>Our Doctors</h2>
                    <span className='block w-32 h-1 bg-blue-500 mx-auto mb-1'></span>
                    <span className='block w-20 h-1 bg-red-500 mx-auto'></span>
                    <p className='mt-3'>We are here to provide you the best services and we care our patients.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div style={{ transition: '.3s all' }} className="single-doctor text-center shadow-xl border-b-4 border-t-4 border-transparent hover:border-blue-500 rounded py-6">
                        <img className='mx-auto rounded' style={{ height: '300px', width: '320px' }} src="./images/doctors/doctor1.jpg" alt="" />
                        <div className="doctor-meta">
                            <h3 className='text-xl font-semibold mt-4'>Dr. Ana Dia</h3>
                            <p>Cancer Specalist</p>
                        </div>
                    </div>
                    <div style={{ transition: '.3s all' }} className="single-doctor text-center shadow-xl border-b-4 border-t-4 border-transparent hover:border-blue-500 rounded py-6">
                        <img className='mx-auto rounded' style={{ height: '300px', width: '320px' }} src="./images/doctors/doctor2.jpg" alt="" />
                        <div className="doctor-meta">
                            <h3 className='text-xl font-semibold mt-4'>Dr. Pulok Stephen</h3>
                            <p>Neuro Specalist</p>
                        </div>
                    </div>
                    <div style={{ transition: '.3s all' }} className="single-doctor text-center shadow-xl border-b-4 border-t-4 border-transparent hover:border-blue-500 rounded py-6">
                        <img className='mx-auto rounded' style={{ height: '300px', width: '320px' }} src="./images/doctors/doctor3.jpg" alt="" />
                        <div className="doctor-meta">
                            <h3 className='text-xl font-semibold mt-4'>Dr. Priyanka Sen</h3>
                            <p>Fever Specalist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;