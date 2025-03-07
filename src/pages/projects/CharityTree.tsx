import React from "react";
import "../../styles/projects/ProjectPage.scss";

const CharityTree: React.FC = () => {
    return (
        <section className="project-page">
            <div className="container">
                <header className="project-header">
                    <h1>Charity Tree</h1>
                    <p className="tagline">
                        A junior project for designing a backend system with JWT authentication.
                    </p>
                </header>

                <section className="project-section background">
                    <h2>Background</h2>
                    <p>
                        Charity Tree was a junior project aimed at designing a backend system that utilized JWT token-based authentication. Although it never evolved into a full-fledged application, it served as a prototype to test secure user access and data protection with a mock frontend.
                    </p>
                </section>

                <section className="project-section contributions">
                    <h2>Role & Contributions</h2>
                    <ul>
                        <li>
                            Developed the backend using Spring Boot, implementing a JWT token-based authentication system to ensure secure user access and data protection.
                        </li>
                        <li>
                            Built the frontend in React (TypeScript) in collaboration with a designer to create a responsive, user-friendly interface.
                        </li>
                        <li>
                            Implemented a RESTful API for efficient communication between the frontend and backend, streamlining interactions between users and local charities.
                        </li>
                    </ul>
                </section>

                <section className="project-section links">
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <a
                                href="https://www.figma.com/file/your-figma-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Figma Design
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/your-backend-repo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Backend on GitHub
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default CharityTree;
