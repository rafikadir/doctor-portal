import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import chair from '../../../Images/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <Container>
            <Row className=" headerRow d-flex align-items-center">
                <Col lg={4}>
                    <div className="headerText">
                        <h1>Your New Smile Starts Here</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum voluptates molestias inventore culpa.</p>
                        <button className="btn btn-gradient">Get Appointment</button>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="headerImage">
                        <img src={chair} alt="chair"/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderMain;