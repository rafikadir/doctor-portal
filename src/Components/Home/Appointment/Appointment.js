import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Appointment.css';
import doctor from '../../../Images/doctor.png';

const Appointment = () => {
    return (
        <section className="appointment">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <img className="appointment-img" src={doctor} alt="appoinment"/>
                    </Col>
                    <Col lg={7}>
                        <div className="appointment-text">
                            <h4>Appointment</h4>
                            <h1>Make an Appointment Today</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero harum maxime quasi laboriosam!</p>
                            <button className="btn btn-gradient">Learn More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appointment;