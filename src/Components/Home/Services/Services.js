import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css';
import fluoride from '../../../Images/flouoride.png';
import cavity from '../../../Images/cavity.png';
import white from '../../../Images/white.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        icon: fluoride
    },
    {
        name: 'Cavity Filling',
        icon: cavity
    },
    {
        name: 'Teeth Whitening',
        icon: white
    }
]


const Services = () => {
    return (
        <section className="pt-100 pb-70">
            <Container>
                <div className="serviceHeading">
                    <h4>Our Services</h4>
                    <h1>Services We Provide</h1>
                </div>
                <Row>
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;