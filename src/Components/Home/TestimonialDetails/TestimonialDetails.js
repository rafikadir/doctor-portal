import React from 'react';
import { Col } from 'react-bootstrap';
import './TestimonialDetails.css';

const TestimonialDetails = ({testimonial}) => {
    return (
        <Col lg={4}>
            <div className="testimonial-box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt earum voluptas fugiat ipsam facilis sunt eveniet architecto possimus quos?</p>

                <div className="testimonial-info d-flex">
                    <img src={testimonial.image} alt="testimonial"/>

                    <div>
                        <h5>{testimonial.name}</h5>
                        <p>{testimonial.address}</p>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default TestimonialDetails;