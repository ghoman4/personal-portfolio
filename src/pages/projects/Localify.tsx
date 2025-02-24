import React from "react";
import "../../styles/projects/Localify.scss";

const Localify: React.FC = () => {
    return (
        <section className="localify-project-page">
            <div className="container">
                <header className="project-header">
                    <h1>Localify.org</h1>
                    <p className="tagline">
                        Connecting Music Lovers with Local Artists & Events
                    </p>
                </header>

                <section className="project-section background">
                    <h2>Background</h2>
                    <p>
                        Localify.org is a platform that connects music lovers with local
                        artists and events through personalized recommendations, making it
                        easier to discover and support emerging talent. Its mission is to
                        connect these smaller artists to audiences, fostering the growth of
                        community-based music scenes.
                    </p>
                    <p>
                        I joined the project in April 2022 as a freshman at Ithaca College
                        after excelling in Doug Turnbull’s introductory computer science
                        class. Doug — both the project’s founder and a professor at the
                        college — reached out and offered me a position in the summer
                        scholars program to work on the project. While my programming skills
                        were limited at the time, the project piqued my interest as it
                        aligned with both my majors (B.S. in Computer Science & B.S. in
                        Emerging Media) as well as my Minor in Music. Three years later, I
                        continue to work on the project, contributing to its development,
                        particularly on the frontend, in addition to its promotion.
                    </p>
                </section>

                <section className="project-section contributions">
                    <h2>Languages / Libraries Worked On</h2>
                    <ul>
                        <li>React</li>
                        <li>SCSS</li>
                        <li>Swift UI</li>
                        <li>React Native</li>
                    </ul>
                    <h2>My Contributions</h2>
                    <div className="contribution-item">
                        <h3>React Web App</h3>
                        <p>
                            I serve as the lead developer on Localify.org’s web-based frontend,
                            building and organizing the React codebase in Typescript and SCSS.
                            I built the foundation of every page and core functionalities,
                            with the exception of the landing page, while collaborating with
                            teammates, Paul Gagliano and Ruth Ayambem, who contributed minor
                            refinements and new features. The web application utilizes Axios
                            to communicate with a Spring Boot backend which I built in
                            collaboration with lead backend developers April Trainor and Paul
                            Gagliano. Today, I conduct user tests to improve and maintain the
                            website while integrating new features as innovative ideas come to
                            light. (November 2023 - Now)
                        </p>
                    </div>
                    <div className="contribution-item">
                        <h3>React Native App</h3>
                        <p>
                            In my first summer at Localify.org, I updated the frontend for a new
                            Spring Boot backend after the previous Flask setup was overhauled
                            with many new endpoints and data structures. Instead of patching
                            the old code, the team opted to rebuild from scratch with a
                            mobile-first approach. Collaborating with Emmet Barry and Elizabeth
                            Richards, we developed a React Native prototype—showcased at the
                            17th ACM Conference on Recommender Systems in Singapore in 2023—that
                            allowed me to hone skills in React Native development, mobile UX
                            design, and API integration. Ultimately, the mobile app was scrapped
                            in favor of focusing on a responsive website version, with mobile
                            support deferred to a later phase. (July 2022 - September)
                        </p>
                    </div>
                    <div className="contribution-item">
                        <h3>SwiftUI</h3>
                        <p>
                            The SwiftUI-based iOS app is currently in development alongside our
                            fully featured React web application. I built all of the core API
                            functionalities to properly communicate with the backend, as well as
                            the foundational structure for every page. Working alongside Fisher
                            Griesel and Ruth Ayambem, we're enhancing our iOS app to match the
                            capabilities of our web version. By utilizing SwiftUI's robust
                            features, we're expanding our coding expertise while crafting a
                            seamless and optimized mobile experience.
                        </p>
                    </div>
                </section>

                <section className="project-section papers">
                    <h2>Papers & Conferences</h2>
                    <div className="paper">
                        <h3>
                            Paper 1: Localify.org: Locally-focused Music Artist and Event
                            Recommendation
                        </h3>
                        <p>
                            Co-authored during my second summer, this paper delves into the
                            technical backbone of Localify.org, focusing on the platform’s core
                            recommendation algorithms and system architecture. It discusses how
                            we leverage artist-to-artist similarity data and address challenges
                            like popularity bias to recommend local talent and events effectively.
                            Presented at the 17th ACM Conference on Recommender Systems in the
                            Philippines, this work highlights our data-driven approach and the
                            scalability of our system.
                        </p>
                    </div>
                    <div className="paper">
                        <h3>
                            Paper 2: Localify.org: Contextualizing Long-Tail Music For Local Artist
                            Discovery
                        </h3>
                        <p>
                            Co-authored during my fall semester of senior year, this paper details
                            how Localify.org empowers users to discover emerging local artists
                            through personalized music recommendations. It outlines the system’s
                            design, which adapts a Weighted Regularized Matrix Factorization
                            algorithm to rank lesser-known artists relative to familiar seed
                            artists, and highlights innovative UI/UX strategies including
                            personalized playlists and weekly email digests.
                        </p>
                    </div>
                    <div className="paper">
                        <h3>Paper 2 (San Francisco): ISMIR Conference</h3>
                        <p>
                            Following the paper, I had the opportunity to attend the demo in
                            San Francisco with Doug Turnbull and Paul Gagliano at the 25th
                            International Society for Music Information Retrieval (ISMIR)
                            Conference. It was an exciting event sponsored by Music.AI, Adobe,
                            and Google, among others, featuring numerous talks, poster sessions,
                            and networking opportunities with industry and academic professionals.
                        </p>
                    </div>
                </section>

                <section className="project-section gratitude">
                    <h2>Thank You</h2>
                    <p>
                        I want to extend a heartfelt thank you to Doug Turnbull for welcoming
                        me on the Localify project with so little experience at the end of my
                        freshman year. I truly learned so much—probably more than in my classes—and
                        I was privileged to work alongside so many talented individuals. I’m grateful
                        for the lab space that allowed me to work between classes, the opportunities
                        for independent research, unforgettable trips, and the chance to connect with
                        industry professionals. Most importantly, this project enabled me to help rising
                        artists find their audiences. It has been more than just a job; it’s been a
                        transformative experience that I am proud to be a part of.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default Localify;
