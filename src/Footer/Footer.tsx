import React from "react";
import './Footer.css';

const email_icon = new URL('../assets/Icons/envelope.svg', import.meta.url).href;
const linkedin_icon = new URL('../assets/Icons/linkedin.svg', import.meta.url).href;


export function Footer () {

    return (
        <React.Fragment>
            <footer id="contact" className="footer_container">
                <h2>Contact</h2>

                <p>Thanks for checking out my portfolio! If you want to chat about a potential project, have any questions or just want to say hello, I'd love to hear from you. Feel free to contact me through email or LinkedIn. I'm really excited about the possibility of working together and can't wait to hear about what you have in mind.</p>

                <div className="footer_contact_icons_container">
                    <a href="mailto:santiagoagredo@live.com"><span><img alt="Email Icon" src={email_icon}/></span></a>
                    <a href="https://www.linkedin.com/in/santiago-sabogal-266525247" target="_blank"><span><img alt="LinkedIn Icon" src={linkedin_icon}/></span></a>
                </div>
            </footer>
        </React.Fragment>
    );
}