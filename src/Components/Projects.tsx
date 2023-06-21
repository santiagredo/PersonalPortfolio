import React from "react";

const github_icon = new URL('../assets/Icons/github.png', import.meta.url).href;
const new_tab_icon = new URL('../assets/Icons/tab.png', import.meta.url).href;

const TMDB = new URL('../assets/TMDB.JPG', import.meta.url).href;
const url_shortener = new URL('../assets/urlShortener.JPG', import.meta.url).href;
const to_do_list = new URL('../assets/to_do_list.JPG', import.meta.url).href;
const aurotax = new URL('../assets/aurotax.JPG', import.meta.url).href;

export function Projects () {
    const sectionClasses = "w-full mx-auto pb-2 justify-center bg-customDarkBlue text-white";
    const H2Classes = "p-8 text-4xl font-bold text-center";

    const projectsContainerClasses = "w-11/12 mx-auto grid lg:grid-cols-2 gap-10";

    const articleClasses = "grid grid-flow-row gap-y-3";

    const H3Classes = "py-4 text-3xl font-bold";

    const figureClasses = "";
    const imgClasses = "";

    const ulClasses = "flex flex-wrap";
    const liClasses = "mr-4 mt-1 px-2 bg-gray-700 rounded font-semibold";
    
    const LinksContainerClasses = "ml-auto flex";
    const linksImagesClasses = "w-12 pl-5";

    return (
        <React.Fragment>
            <section className={sectionClasses}>
                <h2 id="projects" className={H2Classes}>
                    Projects
                </h2>

                <div className={projectsContainerClasses}>

                    <article className={articleClasses}>
                        <h3 className={H3Classes}>TMDB</h3>
                        
                        <figure className="project_image_container">
                            <img src={TMDB}/>
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>React</li>
                            <li className={liClasses}>TypeScript</li>
                            <li className={liClasses}>CSS</li>
                        </ul>

                        <p>Movies and tv shows database. Made this project to reinforce all knowledge acquired in React, and CSS. The site allows you to see what movies and shows are trending, as to make search for details about past or upcoming releases.</p>
                        
                        <div className={LinksContainerClasses}>
                            <a href="https://github.com/santiagredo/TMDB" target="_blank">
                                <figure>
                                    <img alt="github icon" src={github_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>

                            <a href="https://santiagredo.github.io/TMDB/" target="_blank">
                                <figure>
                                    <img alt="new tab icon" src={new_tab_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>
                        </div>
                    </article>

                    <article className={articleClasses}>
                        <h3 className={H3Classes}>URL Shortener</h3>
                        
                        <figure className="project_image_container">
                            <img src={url_shortener}/>
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>React</li>
                            <li className={liClasses}>NodeJS</li>
                            <li className={liClasses}>TypeScript</li>
                            <li className={liClasses}>Tailwind</li>
                            <li className={liClasses}>MongoDB</li>
                        </ul>

                        <p>Project created solely for educational purposes, I tried to implement everything I learned on React and NodeJS architecture in this full stack application. URL Shortener makes your URLs more concise and user-friendly. It's a simple and intuitive solution that allows you to enter a long URL and instantly generate a shorter, more manageable version.</p>
                        
                        <div className={LinksContainerClasses}>
                            <a href="https://github.com/santiagredo/URLShortener" target="_blank">
                                <figure>
                                    <img alt="github icon" src={github_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>

                            <a href="https://us-rinp.onrender.com/" target="_blank">
                                <figure>
                                    <img alt="new tab icon" src={new_tab_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>
                        </div>
                    </article>

                    <article className={articleClasses}>
                        <h3 className={H3Classes}>To Do list</h3>
                        
                        <figure className="project_image_container">
                            <img src={to_do_list}/>
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>React</li>
                            <li className={liClasses}>TypeScript</li>
                            <li className={liClasses}>CSS</li>
                        </ul>

                        <p>Application that manages To Dos. This project is the outcome of Platzi's Intro to React course, where the foundations for a React application are explained, then put into practice immediately.</p>
                        
                        <div className={LinksContainerClasses}>
                            <a href="https://github.com/santiagredo/ToDoList" target="_blank">
                                <figure>
                                    <img alt="github icon" src={github_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>

                            <a href="https://santiagredo.github.io/ToDoList/" target="_blank">
                                <figure>
                                    <img alt="new tab icon" src={new_tab_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>
                        </div>
                    </article>


                    <article className={articleClasses}>
                        <h3 className={H3Classes}>Aurotax.com</h3>
                        
                        <figure className="project_image_container">
                            <img src={aurotax}/>
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>NodeJS</li>
                            <li className={liClasses}>JavaScript</li>
                            <li className={liClasses}>Bootstrap</li>
                            <li className={liClasses}>Oracle Apex</li>
                        </ul>

                        <p>Web application for filling out forms. Streamlines the tax filing process for immigrants in the United States. This project is the final project for Colombia's Misión TIC 2022.</p>
                        
                        <div className={LinksContainerClasses}>
                            <a href="https://github.com/santiagredo/aurotax" target="_blank">
                                <figure>
                                    <img alt="github icon" src={github_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>

                            <a href="https://aurotax.com/" target="_blank">
                                <figure>
                                    <img alt="new tab icon" src={new_tab_icon} className={linksImagesClasses}/>
                                </figure>
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </React.Fragment>
    );
}