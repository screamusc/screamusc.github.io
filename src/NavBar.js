import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

const NavBar = () => {
    return (
        <Navbar className="nav" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src={process.env.PUBLIC_URL + "logo.png"}
                        width="70"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav" className="nav-link">
                    <Nav className="m-auto">
                        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="/eboard">Executive Board</Nav.Link>
                        <Nav.Link className="nav-link" href="/gallery">Gallery</Nav.Link>
                        <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;