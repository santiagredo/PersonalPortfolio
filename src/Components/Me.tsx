import React from "react";

const githubIcon = new URL('../assets/Icons/github.png', import.meta.url).href;
const linkedIcon = new URL('../assets/Icons/linkedin_white.png', import.meta.url).href;

export function Me () {
    const sectionClasses = "w-11/12 max-w-xs mx-auto h-screen md:h-halfScreen lg:h-auto flex flex-col justify-center md:justify-end text-white";
    const H1Classes = "mb-2 text-4xl font-bold text-center";    
    const PClasses = "mb-2 text-center"
    const DivIconsContainerClasses = "flex justify-center";
    const IconsContainerAClasses = "mr-2";

    const figureClasses = "";
    const imgClasses = "w-16";

    return (
        <React.Fragment>
            <section id="about_me" className={sectionClasses}>
                <h1 className={H1Classes}>Santiago Sabogal Agredo</h1>
                <p className={PClasses}>
                    Full Stack developer
                    <br/>
                    Colombia
                    <br/>
                </p>

                <div className={DivIconsContainerClasses}>
                    <a href="https://github.com/santiagredo" target="_blank" className={IconsContainerAClasses}>
                        <figure className={figureClasses}>
                            <img alt="Github Icon" src={githubIcon} className={imgClasses}/>
                        </figure>
                    </a>

                    <a href="https://www.linkedin.com/in/santiago-sabogal-266525247" target="_blank">
                        <figure className={figureClasses}>
                            <img alt="LinkedIn Icon" src={linkedIcon} className={imgClasses}/>
                        </figure>
                    </a>
                </div>
            </section>
        </React.Fragment>
    );
};