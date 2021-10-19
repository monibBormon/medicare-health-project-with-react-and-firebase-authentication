import React from 'react';
import Appointment from '../Appointment/Appointment';
import Counter from '../Counter/Counter';
import Doctors from '../Doctors/Doctors';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <Services></Services>
            <Doctors></Doctors>
            <Counter></Counter>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;