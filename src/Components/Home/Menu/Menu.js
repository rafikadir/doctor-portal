import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menu.css'

const Manu = () => {
    return (
        <Container>
            <Navbar expand="lg">
            <Navbar.Brand href="#home">Doctor Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="menu-link" href="#">Home</Nav.Link>
                        <Nav.Link className="menu-link" href="#">About</Nav.Link>
                        <Nav.Link className="menu-link" href="#">Doctor Services</Nav.Link>
                        <Nav.Link className="menu-link" href="#">Reviews</Nav.Link>
                        <Nav.Link className="menu-link white-color" href="#">Blog</Nav.Link>
                        <Nav.Link className="menu-link white-color" href="#">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Manu;