import React from "react";

const github_icon = new URL("../assets/Icons/github.png", import.meta.url).href;
const new_tab_icon = new URL("../assets/Icons/tab.png", import.meta.url).href;

const TMDB = new URL("../assets/TMDB.JPG", import.meta.url).href;
const url_shortener = new URL("../assets/urlShortener.JPG", import.meta.url)
    .href;
const riddlerChat = new URL("../assets/riddlerChat.JPG", import.meta.url).href;
const booksReview = new URL("../assets/booksReview.JPG", import.meta.url).href;

export function Projects() {
    const sectionClasses =
        "w-full mx-auto pb-2 justify-center bg-customDarkBlue text-white";
    const H2Classes = "p-8 text-4xl font-bold text-center";

    const projectsContainerClasses =
        "w-11/12 mx-auto grid lg:grid-cols-2 gap-10";

    const articleClasses = "grid grid-flow-row gap-y-3";

    const H3Classes = "py-4 text-3xl font-bold";

    const figureClasses = "w-full h-full";
    const imgClasses = "w-full h-full object-cover";

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

                        <figure className={figureClasses}>
                            <img src={TMDB} />
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>React</li>
                            <li className={liClasses}>TypeScript</li>
                            <li className={liClasses}>CSS</li>
                        </ul>

                        <p>
                            Movies and tv shows database. Made this project to
                            reinforce all knowledge acquired in React, and CSS.
                            The site allows you to see what movies and shows are
                            trending, as to make search for details about past
                            or upcoming releases.
                        </p>

                        <div className={LinksContainerClasses}>
                            <a
                                href="https://github.com/santiagredo/TMDB"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="github icon"
                                        src={github_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>

                            <a
                                href="https://santiagredo.github.io/TMDB/"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="new tab icon"
                                        src={new_tab_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>
                        </div>
                    </article>

                    <article className={articleClasses}>
                        <h3 className={H3Classes}>Books Review</h3>

                        <figure className={figureClasses}>
                            <img src={booksReview} />
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>TypeScript</li>
                            <li className={liClasses}>React</li>
                            <li className={liClasses}>Node</li>
                            <li className={liClasses}>NestJS</li>
                            <li className={liClasses}>MongoDB</li>
                            <li className={liClasses}>Tailwind</li>
                        </ul>

                        <p>
                            Technical test for Controlbox in which a simple page
                            was created for leaving book reviews. The page
                            includes functionalities for authentication,
                            authorization, user creation, password reset, book
                            search by category, author, or title, filtering
                            books by category, and the ability for users to view
                            and delete their own reviews.
                        </p>

                        <div className={LinksContainerClasses}>
                            <a
                                href="https://github.com/santiagredo/BooksReview"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="github icon"
                                        src={github_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>

                            <a
                                href="https://booksreview.onrender.com/"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="new tab icon"
                                        src={new_tab_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>
                        </div>
                    </article>

                    <article className={articleClasses}>
                        <h3 className={H3Classes}>URL Shortener</h3>

                        <figure className={figureClasses}>
                            <img src={url_shortener} className={imgClasses} />
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>React</li>
                            <li className={liClasses}>NodeJS</li>
                            <li className={liClasses}>TypeScript</li>
                            <li className={liClasses}>Tailwind</li>
                            <li className={liClasses}>MongoDB</li>
                        </ul>

                        <p>
                            Project created solely for educational purposes, I
                            tried to implement everything I learned on React and
                            NodeJS architecture in this full stack application.
                            URL Shortener makes your URLs more concise and
                            user-friendly. It's a simple and intuitive solution
                            that allows you to enter a long URL and instantly
                            generate a shorter, more manageable version.
                        </p>

                        <div className={LinksContainerClasses}>
                            <a
                                href="https://github.com/santiagredo/URLShortener"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="github icon"
                                        src={github_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>

                            <a
                                href="https://us-rinp.onrender.com/"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="new tab icon"
                                        src={new_tab_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>
                        </div>
                    </article>

                    <article className={articleClasses}>
                        <h3 className={H3Classes}>The Riddler Chat</h3>

                        <figure className={figureClasses}>
                            <img src={riddlerChat} />
                        </figure>

                        <ul className={ulClasses}>
                            <li className={liClasses}>TypeScript</li>
                            <li className={liClasses}>React</li>
                            <li className={liClasses}>Node</li>
                            <li className={liClasses}>Nest</li>
                            <li className={liClasses}>Tailwind</li>
                        </ul>

                        <p>
                            THERIDDLERCHAT is a chat application inspired by the
                            interface used in the movie "The Batman (2022)" In
                            the movie, the antagonist, The Riddler, communicates
                            with Batman through a chat and provides him with
                            clues about his next victim.
                        </p>

                        <div className={LinksContainerClasses}>
                            <a
                                href="https://github.com/santiagredo/THERIDDLERCHAT"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="github icon"
                                        src={github_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>

                            <a
                                href="https://riddlerchat.onrender.com/"
                                target="_blank">
                                <figure>
                                    <img
                                        alt="new tab icon"
                                        src={new_tab_icon}
                                        className={linksImagesClasses}
                                    />
                                </figure>
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </React.Fragment>
    );
}
