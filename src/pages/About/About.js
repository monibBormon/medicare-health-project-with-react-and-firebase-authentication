import React from 'react';

const About = () => {
    return (
        <div className='py-10'>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div className="about-bg">
                        <img className='rounded-lg' src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg" alt="about-bg" />
                    </div>
                    <div className="about-text">
                        <h2 className='text-5xl font-semibold text-gray-600'>About Us</h2>
                        <p className='text-xl mt-5'>We are the health care service agency who provide the best hospital services to the patients.We ensure you that if you come to us we will help you to recover your diseases.We have more than enough experienced doctors to serve you better health care.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;