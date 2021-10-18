import React from 'react';

const Feature = () => {
    return (
        <div className='feature-area py-10'>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div style={{ transition: '.3s all' }} className="single-feature text-center shadow-xl py-10 px-6 rounded">
                        <div className="feature-icon">
                            <i style={{ transition: '.3s all' }} class="fas fa-briefcase-medical text-5xl text-blue-500 mb-4"></i>
                        </div>
                        <div className="feature-text">
                            <h3 style={{ transition: '.3s all' }} className='text-3xl font-semibold mb-3 text-gray-600'>Quality & Safety</h3>
                            <p>We provide the best services ever of all other medical industry.We believe quality and safety.</p>
                        </div>
                    </div>
                    <div style={{ transition: '.3s all' }} className="single-feature text-center shadow-xl py-10 px-6 rounded">
                        <div className="feature-icon">
                            <i style={{ transition: '.3s all' }} class="fas fa-syringe text-5xl text-blue-500 mb-4"></i>
                        </div>
                        <div className="feature-text">
                            <h3 style={{ transition: '.3s all' }} className='text-3xl font-semibold mb-3 text-gray-600'>Leading Technology</h3>
                            <p>We provide the best services ever of all other medical industry.We believe quality and safety.</p>
                        </div>
                    </div>
                    <div style={{ transition: '.3s all' }} className="single-feature text-center shadow-xl py-10 px-6 rounded">
                        <div className="feature-icon">
                            <i style={{ transition: '.3s all' }} class="fas fa-user-md text-5xl text-blue-500 mb-4"></i>
                        </div>
                        <div className="feature-text">
                            <h3 style={{ transition: '.3s all' }} className='text-3xl font-semibold mb-3 text-gray-600'>Expert Doctors</h3>
                            <p>We provide the best services ever of all other medical industry.We believe quality and safety.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;