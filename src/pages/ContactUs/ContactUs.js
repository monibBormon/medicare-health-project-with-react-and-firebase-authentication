import React from 'react';

const ContactUs = () => {
    return (
        <div className='py-10'>
            <div className="md:container md:mx-auto px-5 md:px-0">
                <h2 className='text-5xl font-semibold text-gray-600 text-center mb-10'>Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="contact-bg">
                        <img className='rounded-lg' src="https://image.freepik.com/free-photo/medical-practitioner-answering-phone-calls_482257-6464.jpg" alt="contact-bg" />
                    </div>
                    <div className="contact-text">
                        <div className="contact-meta grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div style={{ transition: '.3s all' }} className="address text-center shadow-lg py-11 px-5 border-b-4 rounded border-transparent hover:border-blue-500">
                                <img className='mx-auto' src="./images/logo.png" alt="" />
                                <h3 className='font-semibold'><i class="fas fa-map-marker-alt"></i> San Fransisco, Usa</h3>
                            </div>
                            <div style={{ transition: '.3s all' }} className="contact-phone shadow-lg py-12 px-5 border-b-4 rounded border-transparent hover:border-blue-500 text-center">
                                <h2 className='font-semibold text-xl text-blue-500 mb-2'>Cell <span className='text-red-500'>Phone</span></h2>
                                <p className='font-semibold'><i class="fas fa-phone-alt"></i>+3339422234</p>
                                <p className='font-semibold'><i class="fas fa-phone-alt"></i>+5830932223</p>
                            </div>
                            <div style={{ transition: '.3s all' }} className="contact-phone shadow-lg py-12 px-5 border-b-4 rounded border-transparent hover:border-blue-500 text-center">
                                <h2 className='font-semibold text-xl text-blue-500 mb-2'>Social <span className='text-red-500'>Media</span></h2>
                                <p className='font-semibold'>Facebook</p>
                                <p className='font-semibold'>Google</p>
                            </div>
                            <div style={{ transition: '.3s all' }} className="contact-phone shadow-lg py-12 px-5 border-b-4 rounded border-transparent hover:border-blue-500 text-center">
                                <h2 className='font-semibold text-xl text-blue-500 mb-2'>Have any <span className='text-red-500'>Question?</span></h2>
                                <p className='font-semibold'><i class="far fa-envelope"></i> medicare@gmail.com</p>
                                <p className='font-semibold'>Open Sat-Thu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;