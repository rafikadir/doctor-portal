import React from 'react';
import { Col } from 'react-bootstrap';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <Col lg={4} md={6}>
            <div className="serviceCard">
                <img src={service.icon}  alt="service icon"/>
                <h4>{service.name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quas perspiciatis? Autem, quos!</p>
            </div>
        </Col>
    );
};

export default ServiceDetails;