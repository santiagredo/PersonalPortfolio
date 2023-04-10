import React from "react";
import './Projects.css';

const github_icon = new URL('../assets/Icons/github.png', import.meta.url).href;
const new_tab_icon = new URL('../assets/Icons/tab.png', import.meta.url).href;

const blog_site = new URL('../assets/BlogSiteJPG.JPG', import.meta.url).href;
const to_do_list = new URL('../assets/to_do_list.JPG', import.meta.url).href;
const aurotax = new URL('../assets/aurotax.JPG', import.meta.url).href;

export function Projects () {

    return (
        <React.Fragment>
            <h2 className="projects_title">Projects</h2>

            <section id="projects" className="projects_container">

                <div className="project_container">
                    <h3>BlogSite</h3>
                    
                    <div className="project_image_container">
                        <img src={blog_site}/>
                    </div>

                    <div className="project_techs_container">
                        <span>React</span>
                        <span>TypeScript / JavaScript</span>
                        <span>CSS</span>
                    </div>

                    <p>This static site is the result of Platzi's React-Router-Dom course, and me practing React context in general. The site allows you to create text blogs, and provides a pseudo auth, which was created for learning purposes.</p>
                    
                    <div className="project_links_container">
                        <a href="https://github.com/santiagredo/BlogSite" target="_blank"><span><img alt="" src={github_icon}/></span></a>
                        <a href="https://santiagredo.github.io/BlogSite/#/home" target="_blank"><span><img alt="" src={new_tab_icon}/></span></a>
                    </div>
                </div>

                <div className="project_container">
                    <h3>To Do list</h3>
                    
                    <div className="project_image_container">
                        <img src={to_do_list}/>
                    </div>

                    <div className="project_techs_container">
                        <span>React</span>
                        <span>TypeScript / JavaScript</span>
                        <span>CSS</span>
                    </div>

                    <p>Application that manages To Dos. This project is the outcome of Platzi's Intro to React course, where the foundations for a React application are explained, then put into practice immediately.</p>
                    
                    <div className="project_links_container">
                        <a href="https://github.com/santiagredo/ToDoList" target="_blank"><span><img alt="" src={github_icon}/></span></a>
                        <a href="https://santiagredo.github.io/ToDoList/" target="_blank"><span><img alt="" src={new_tab_icon}/></span></a>
                    </div>
                </div>


                <div className="project_container">
                    <h3>Aurotax.com</h3>
                    
                    <div className="project_image_container">
                        <img src={aurotax}/>
                    </div>

                    <div className="project_techs_container">
                        <span>Node</span>
                        <span>JavaScript</span>
                        <span>Bootstrap</span>
                        <span>Oracle Apex</span>
                    </div>

                    <p>Web application for filling out forms. Streamlines the tax filing process for immigrants in the United States. This project is the final project for Colombia's Misión TIC 2022.</p>
                    
                    <div className="project_links_container">
                        <a href="https://github.com/santiagredo/aurotax" target="_blank"><span><img alt="" src={github_icon}/></span></a>
                        <a href="https://aurotax.com/" target="_blank"><span><img alt="" src={new_tab_icon}/></span></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}