import React from "react";

export function Header () {
    const headerClasses = "w-full fixed flex justify-around bg-white border-b border-black";
    const aClasses = "font-semibold cursor-pointer hover:underline";

    return (
        <React.Fragment>
            <header className={headerClasses}>
                <a href="#about_me" className={aClasses}>About me</a>
                <a href="#projects" className={aClasses}>Projects</a>
                <a href="#contact" className={aClasses}>Contact</a>
            </header>
        </React.Fragment>
    );
}