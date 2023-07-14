import React from "react";

const emailIcon = new URL('../assets/Icons/envelope.svg', import.meta.url).href;
const linkedinIcon = new URL('../assets/Icons/linkedin.svg', import.meta.url).href;
const cvIcon = new URL("../assets/Icons/CVIcon.svg", import.meta.url).href;

const CV = new URL("../assets/WebDeveloper-SantiagoSabogal.pdf", import.meta.url).href;

export function Footer () {

    const footerClasses = "w-11/12 mx-auto";
    const H2Classes = "p-4 text-4xl font-bold text-center";
    const pClasses = "text-center";

    const iconContainerClasses = "flex justify-around items-center py-4";
    const figureClasses = "w-12";

    return (
        <React.Fragment>
            <footer id="contact" className={footerClasses}>
                <h2 className={H2Classes}>
                    Contact
                </h2>

                <p className={pClasses}>Thanks for checking out my portfolio! If you want to chat about a potential project, have any questions or just want to say hello, I'd love to hear from you. Feel free to contact me through email or LinkedIn. I'm really excited about the possibility of working together and can't wait to hear about what you have in mind.</p>

                <div className={iconContainerClasses}>
                    <a href="mailto:santiagoagredo@live.com">
                        <figure className={figureClasses}>
                            <img alt="Email Icon" src={emailIcon}/>
                        </figure>
                    </a>

                    <a href="https://www.linkedin.com/in/santiago-sabogal-266525247" target="_blank">
                        <figure className={figureClasses}>
                            <img alt="LinkedIn Icon" src={linkedinIcon}/>
                        </figure>
                    </a>

                    <a href={CV} target="_blank">
                        <figure className={figureClasses}>
                            <img alt="CV Icon" src={cvIcon}/>
                        </figure>
                    </a>
                </div>
            </footer>
        </React.Fragment>
    );
}