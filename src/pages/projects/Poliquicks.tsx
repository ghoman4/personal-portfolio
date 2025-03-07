import React from "react";
import "../../styles/pages/ProjectPage.scss";

const Poliquicks: React.FC = () => {
    return (
        <section className="project-page">
            <div className="container">
                <header className="project-header">
                    <h1>Poliquicks</h1>
                    <p className="tagline">
                        Simplifying politics with clear, objective information.
                    </p>
                </header>

                <section className="project-section background">
                    <h2>Background</h2>
                    <p>
                        I'm excited to share that I’ve begun a frontend development role at Poliquicks for this semester! Over the past few weeks, I have been working with React Native—focusing on backend tests from the frontend, reorganizing the codebase, and getting acquainted with the project. Poliquicks simplifies politics by delivering clear, objective information about local elections, bill actions, representatives, and more. The app uses AI to cut through the noise and present just the facts.
                    </p>
                </section>

                <section className="project-section contributions">
                    <h2>Role & Contributions</h2>
                    <ul>
                        <li>
                            Leveraged React Native to streamline frontend development, focusing on integrating backend tests to ensure robust functionality.
                        </li>
                        <li>
                            Reorganized and refactored the codebase to enhance maintainability and performance while quickly adapting to the project's architecture.
                        </li>
                        <li>
                            Actively engaged in agile development processes, participating in early sprint planning and iterative cycles to set clear objectives and deliver timely updates.
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default Poliquicks;
