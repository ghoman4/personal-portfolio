import React from "react";
import "../styles/pages/Projects.scss";

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <div className="container">
                <h1 className="title">Projects</h1>
                <div className="card-container">
                    {[1, 2, 3, 4, 5, 6].map(num => (
                        <div className="card" key={num}>
                            <h6>{num}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
