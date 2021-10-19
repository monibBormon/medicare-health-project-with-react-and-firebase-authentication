import React from 'react';

const Counter = () => {
    return (
        <div>
            <div className="md:container md:mx-auto px-5 md:px-0 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="single-counter text-center border-2 py-10 rounded border-blue-500 hover:border-0 hover:shadow-xl">
                        <div className="counter-icon">
                            <i class="text-5xl text-blue-500 mb-4 fas fa-layer-group"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='font-semibold'>Years of Experience</h4>
                            <h4 className='text-4xl font-semibold text-blue-500'>5</h4>
                        </div>
                    </div>
                    <div className="single-counter text-center border-2 py-10 rounded border-blue-500 hover:border-0 hover:shadow-xl">
                        <div className="counter-icon">
                            <i class="text-5xl text-blue-500 mb-4 fas fa-user-md"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='font-semibold'>Total Specalist</h4>
                            <h4 className='text-4xl font-semibold text-blue-500'>10</h4>
                        </div>
                    </div>
                    <div className="single-counter text-center border-2 py-10 rounded border-blue-500 hover:border-0 hover:shadow-xl">
                        <div className="counter-icon">
                            <i class="text-5xl text-blue-500 mb-4 far fa-smile-beam"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='font-semibold'>Happy Patients</h4>
                            <h4 className='text-4xl font-semibold text-blue-500'>400</h4>
                        </div>
                    </div>
                    <div className="single-counter text-center border-2 py-10 rounded border-blue-500 hover:border-0 hover:shadow-xl">
                        <div className="counter-icon">
                            <i class="text-5xl text-blue-500 mb-4 fas fa-dollar-sign"></i>
                        </div>
                        <div className="counter-text">
                            <h4 className='font-semibold'>Investors</h4>
                            <h4 className='text-4xl font-semibold text-blue-500'>2</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;