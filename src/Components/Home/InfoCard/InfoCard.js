import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import './InfoCard.css';

const infoCard = ({info}) => {
    return (
        <Col lg={4} md={6}>
            <div className={`infoCard justify-content-center d-flex info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </Col>
    );
};

export default infoCard;