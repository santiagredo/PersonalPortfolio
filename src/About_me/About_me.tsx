import React from "react";
import './About_me.css';

const profile_picture = new URL('../assets/profile_picture.jpg', import.meta.url).href;

const github_icon = new URL('../assets/Icons/github.png', import.meta.url).href;
const linkedin_icon = new URL('../assets/Icons/linkedin_white.png', import.meta.url).href;


export function About_me () {

    return (
        <React.Fragment>
            <section className="aboutme_container">
                <div className="aboutme_title_container">
                    <h1>Santiago Sabogal Agredo</h1>
                    <p>
                        Web developer
                        <br/>
                        Colombia
                        <br/>
                        <a href="https://github.com/santiagredo" target="_blank"><span><img alt="" src={github_icon}/></span></a>
                        <a href="https://www.linkedin.com/in/santiago-sabogal-266525247" target="_blank"><span><img alt="LinkedIn Icon" src={linkedin_icon}/></span></a>
                    </p>
                </div>

                <div id="about_me" className="aboutme_description_container">
                    <div className="aboutme_picture_container">
                        <img alt="Profile picture" src={profile_picture}/>
                    </div>

                    <div className="aboutme_paragraph_container">
                        <h2>About me</h2>
                        <p>I like to face challenges and experience new things. I am always looking for opportunities to learn on my own and improve my skills to achieve my personal and professional goals and objectives. I am a patient and kind person, and I always try to do my best in every situation.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}