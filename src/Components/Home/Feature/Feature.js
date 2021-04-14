import React from 'react';
import {Container, Row,Col } from 'react-bootstrap';
import featureimage from '../../../Images/feature.png';
import './Feature.css';

const Feature = () => {
    return (
       <section className="pb-70">
           <Container>
           <Row className="align-items-center">
               <Col lg={6}>
                    <img className="featureImage" src={featureimage} alt="feature"/>
               </Col>
               <Col lg={6}>
                    <div className="featuretext">
                        <h1>Execptional Dental Care, on Your Terms</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit laudantium unde fugit iusto nesciunt rem repellat quidem ea modi, numquam delectus maiores, excepturi corrupti qui! Dignissimos quidem temporibus voluptatem. Iusto vitae enim, vel dolore possimus repellendus hic ab atque voluptatum et porro nulla. Vitae maxime fugiat iure voluptatum ex repellat.</p>
                        <button className="btn btn-gradient">Learn More</button>
                    </div>
               </Col>
           </Row>
       </Container>
       </section>
    );
};

export default Feature;