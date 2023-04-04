import React from "react";
import './Header.css';

export function Header () {

    return (
        <React.Fragment>
            <header className="header_container">
                <a href="#about_me">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </header>
        </React.Fragment>
    );
}