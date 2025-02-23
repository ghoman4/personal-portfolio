import React from "react";
import "../../styles/pages/Home.scss";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import localifyPreview from "../../assets/localify-preview.png";
import charityTreePreview from "../../assets/charity-tree-preview.png";
import porchfestPreview from "../../assets/porchfest-preview.png";
import {useNavigate} from "react-router-dom";

const RecentProjects: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="recent-projects">
            <h1 className="title">Notable Projects</h1>
            <div className="project">
                <div className="project__image">
                    <img src={localifyPreview} alt="Localify Preview"/>
                </div>
                <div className="project__content">
                    <h4 className="project__title localify-title">Localify.org</h4>
                    <h5 className="project__role">Frontend Developer</h5>
                    <h5 className="project__duration">May 2022 - Present</h5>
                    <p className="project__description">
                        A platform for discovering local music, offering personalized artist recommendations and
                        promoting community engagement.
                    </p>
                    <div className="project__tags">
                        <span className="tag">React JS</span>
                        <span className="tag">Typescript</span>
                        <span className="tag">Web App</span>
                    </div>
                    <span className="project__button localify-button">
                        <h6>View More</h6>
                        <ChevronRightIcon/>
                    </span>
                </div>
            </div>


            {/*
            <div className="project">
                <div className="project__image">
                    <img src={charityTreePreview} alt="Charity Tree Preview"/>
                </div>
                <div className="project__content">
                    <h4 className="project__title charity-tree-title">Charity Tree</h4>
                    <h5 className="project__role">Full-Stack Developer</h5>
                    <h5 className="project__duration">February 2024 - Present</h5>
                    <p className="project__description">
                        An application designed to connect local charities with individuals and
                        organizations looking to contribute, streamlining the process of discovering
                        and supporting charitable causes within the community.
                    </p>
                    <div className="project__tags">
                        <span className="tag">React JS</span>
                        <span className="tag">Springboot</span>
                        <span className="tag">PostgreSQL</span>
                    </div>
                    <span className="project__button charity-tree-button">
                        <h6>View More</h6>
                        <ChevronRightIcon/>
                    </span>
                </div>
            </div>
            <div className="project">
                <div className="project__image">
                    <img src={porchfestPreview} alt="Porch Fest Preview"/>
                </div>
                <div className="project__content">
                    <h4 className="project__title porchfest-title">Porchfest</h4>
                    <h5 className="project__role">Frontend Developer</h5>
                    <h5 className="project__duration">August 2024 - Present</h5>
                    <p className="project__description">
                        An app developed to enhance the PorchFest experience, allowing users to explore live music
                        events with a location-based map that tracks nearby performances without requiring user
                        interaction.
                    </p>
                    <div className="project__tags">
                        <span className="tag">Swift UI</span>
                        <span className="tag">Mobile App</span>
                        <span className="tag">MapKit</span>
                    </div>
                    <span className="project__button porchfest-button">
                        <h6>View More</h6>
                        <ChevronRightIcon/>
                    </span>
                </div>
            </div>
            */}

            <h2
                className="coming-soon"
            >( More projects coming soon )</h2>
            <button
                className="view-all-button"
                onClick={() => navigate("/projects")}
            >
                <h5>View All Projects</h5>
                <ChevronRightIcon/>
            </button>
        </section>
    );
};

export default RecentProjects;
