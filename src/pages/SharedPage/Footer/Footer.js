import React from 'react';

const Footer = () => {
    return (
        <div className='py-10 border-t-2 border-blue-100'>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    <div className="footer-logo">
                        <p className='text-blue-500 text-4xl font-semibold'>Medi<span className='text-red-500'>Care+</span></p>
                        <p className='mt-3'>Our Clinic has grown to provide a world class facility for the clinic advanced restorative.
                            We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                    </div>
                    <div className="footer-department">
                        <h2 className='text-3xl mb-4 font-semibold text-blue-500'>Department</h2>
                        <p><i class="fas fa-plus text-red-400 mr-2 mb-2"></i> Surgery & Radiology</p>
                        <p><i class="fas fa-plus text-red-400 mr-2 mb-2"></i> Women's Health</p>
                        <p><i class="fas fa-plus text-red-400 mr-2 mb-2"></i> Cancer Diseases</p>
                        <p><i class="fas fa-plus text-red-400 mr-2 mb-2"></i> Heart Diseases</p>
                        <p><i class="fas fa-plus text-red-400 mr-2 mb-2"></i> Children Health</p>
                    </div>
                    <div className="footer-blog">
                        <h2 className='text-3xl mb-4 font-semibold text-blue-500'>Latest News</h2>
                        <div className="blog-1 flex mb-4 rounded">
                            <img className='w-20 mr-3' src="./images/blog/blog1.jpg" alt="blog1" />
                            <div className="blog-text">
                                <h3 className='font-semibold'>Keep healthy with 4 tips</h3>
                                <p className='text-sm'>Sep 2, 2021</p>
                            </div>
                        </div>
                        <div className="blog-2 flex mb-4 rounded">
                            <img className='w-20 mr-3' src="./images/blog/blog2.jpg" alt="blog2" />
                            <div className="blog-text">
                                <h3 className='font-semibold'>Get a free checkup with us</h3>
                                <p className='text-sm'>Oct 14, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-pages">
                        <h2 className='text-3xl mb-4 font-semibold text-blue-500'>Our pages</h2>
                        <p className='underline cursor-pointer hover:text-blue-500'>Privacy and Policy</p>
                        <p className='underline cursor-pointer hover:text-blue-500'>Terms and Condition</p>
                        <p className='underline cursor-pointer hover:text-blue-500'>About Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;