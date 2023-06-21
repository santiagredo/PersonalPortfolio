import React from "react";
import { Me } from "./Me";
import { About_me } from "./About_me";
import { TechStack } from "./TechStack";

export function Main () {
    const mainClasses = "h-max md:h-screen flex flex-wrap items-center bg-customDarkBlue";

    return (
        <React.Fragment>
            <main className={mainClasses}>
                <Me/>
                <About_me/>
                <TechStack/>
            </main>
        </React.Fragment>
    );
};