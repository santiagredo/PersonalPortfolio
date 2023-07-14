import React from "react";

const htmlIcon = new URL("../assets/Icons/html5.svg", import.meta.url).href;
const cssIcon = new URL("../assets/Icons/css3.svg", import.meta.url).href;
const javaScriptIcion = new URL("../assets/Icons/javascript.svg", import.meta.url).href;
const typeScriptIcon = new URL("../assets/Icons/typescript.svg", import.meta.url).href;
const reactIcon = new URL("../assets/Icons/react.svg", import.meta.url).href;
const nodejsIcon = new URL("../assets/Icons/nodejs.svg", import.meta.url).href;
const nestjsIcon = new URL("../assets/Icons/nestjs.svg", import.meta.url).href;
const tailwindIcon = new URL("../assets/Icons/tailwind.svg", import.meta.url).href;
const mongodbIcon = new URL("../assets/Icons/mongodb.svg", import.meta.url).href;

export function TechStack () {
    const sectionClasses = "w-11/12 max-w-xs mx-auto mt-3 pb-10 lg:pb-0 h-auto md:h-halfScreen flex flex-col justify-center text-white";

    const H2Classes = "m-2 text-4xl font-bold text-center";

    const divClasses = "grid grid-cols-3 md:grid-cols-4 gap-2";

    const figureClasses = "flex flex-col items-center text-center";
    const imgClasses = "w-16";
    const PClasses = "text-xs";

    return (
        <React.Fragment>
            <section className={sectionClasses}>
                <h2 className={H2Classes}>
                    Tech Stack
                </h2>

                <div className={divClasses}>
                    <figure className={figureClasses}>
                        <img alt="Html icon" src={htmlIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            HTML
                        </p>
                    </figure>

                    <figure className={figureClasses}>
                        <img alt="Css icon" src={cssIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            CSS
                        </p>
                    </figure>
                    
                    <figure className={figureClasses}>
                        <img alt="Javascript icon" src={javaScriptIcion} className={imgClasses}/>
                        <p className={PClasses}>
                            JavaScript
                        </p>
                    </figure>

                    <figure className={figureClasses}>
                        <img alt="Typescript icon" src={typeScriptIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            TypeScript
                        </p>
                    </figure>

                    <figure className={figureClasses}>
                        <img alt="React icon" src={reactIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            React
                        </p>
                    </figure>

                    <figure className={figureClasses}>
                        <img alt="Nodejs icon" src={nodejsIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            NodeJS
                        </p>
                    </figure>

                    <figure className={figureClasses}>
                        <img alt="Nestjs icon" src={nestjsIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            NestJS
                        </p>
                    </figure>
                    
                    <figure className={figureClasses}>
                        <img alt="Tailwind icon" src={tailwindIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            Tailwind
                        </p>
                    </figure>

                    <figure className={figureClasses}>
                        <img alt="Mongodb icon" src={mongodbIcon} className={imgClasses}/>
                        <p className={PClasses}>
                            MongoDB
                        </p>
                    </figure>
                </div>
            </section>
        </React.Fragment>
    );
};