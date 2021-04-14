import React from 'react';
import {Container, Row } from 'react-bootstrap';
import imageOne from '../../../Images/1.png';
import imageTwo from '../../../Images/2.png';
import imageThree from '../../../Images/3.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonial.css';

const testimonialData = [
    {
        name:'Winson Herry',
        address:  'california',
        image: imageOne
    },
    {
        name:'Tom Cruise',
        address:  'New York',
        image: imageTwo
    },
    {
        name:'Arland swarzlager',
        address:  'Los Angels',
        image: imageThree
    }
]

const Testimonial = () => {
    return (
        <section className="pt-100 pb-70">
            <Container>
                <Row>
                    <div className="testimonial-text">
                        <h4>Testimonial</h4>
                        <h1>What's Our Patients Says?</h1>
                    </div>
                </Row>
                <Row>
                    {
                        testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;