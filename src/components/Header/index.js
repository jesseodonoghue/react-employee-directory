import React from 'react';
import Container from 'react-bootstrap/Container';
import { AiOutlineApartment } from 'react-icons/ai';
import './style.css';

function Header() {
    return (
        <header className="hero-image">
            <Container>
                <h1 className="text-center text-color"><AiOutlineApartment />  React Employee Directory  <AiOutlineApartment /></h1>
            </Container>
        </header>
    )
}


export default Header;