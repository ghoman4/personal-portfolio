import React from "react";
import "../../styles/pages/Home.scss";
import localifyPreview from "../../assets/localify-preview.png";

const RecentProjects: React.FC = () => {
    return (
        <section className="recent-projects">
            {/* Project Card */}
            <div className="project">
                <div className="project__image">
                    <img src={localifyPreview} alt="Localify Preview"/>
                </div>
                <div className="project__content">
                    <h5 className="project__localify-title">Localify.org</h5>
                    <h6 className="project__role">Frontend Developer</h6>
                    <p className="project__duration">May 2022 - Present</p>
                    <p className="project__description">
                        A platform for discovering local music, offering personalized artist recommendations and
                        promoting community engagement.
                    </p>
                    <div className="project__tags">
                        <span className="tag">React JS</span>
                        <span className="tag">Typescript</span>
                        <span className="tag">Web App</span>
                    </div>
                    <button className="project__button">View More</button>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
