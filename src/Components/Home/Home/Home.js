import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Feature></Feature>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;