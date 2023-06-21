import React from "react";


export function About_me () {
    const sectionClasses = "w-11/12 max-w-xs mx-auto my-3 h-auto md:h-halfScreen lg:h-auto flex flex-col justify-center md:justify-end text-white";
    const H2Classes = "m-2 text-4xl font-bold text-center";

    return (
        <React.Fragment>
            <section className={sectionClasses}>
                <h2 className={H2Classes}>
                    About me
                </h2>
                <p>I like to face challenges and experience new things. I am always looking for opportunities to learn on my own and improve my skills to achieve my personal and professional goals and objectives. I am a patient and kind person, and I always try to do my best in every situation.</p>
            </section>
        </React.Fragment>
    );
}