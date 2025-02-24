import React from "react";
import "../../styles/pages/Home.scss";
import profileImage from "../../assets/profile-image.png";
import {useNavigate} from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AboutMe: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="about-me">
            <div className="container">
                <div className="about-me__content">
                    <h2>About Me</h2>
                    <p>
                        I'm a Boston-based computer science student double majoring in Computer Science and Emerging Media
                        at Ithaca College, with a minor in Music. My passion for building impactful projects drives my work,
                        including leading frontend development on Localify.org, a platform for discovering local music,
                        using React and SCSS. Some of my other projects include Charity Tree, a web app supporting local charities
                        built with React and Spring Boot, and the PorchFest app, leveraging Swift and MapKit to enhance the
                        experience without distraction. Outside of coding, I enjoy skiing, karaoke, and exploring new places,
                        always driven by curiosity and a passion for continuous learning.
                    </p>
                    <div className="about-me__buttons">
                        <button
                            className="about-me__button secondary"
                            onClick={() => navigate("/#/about")}
                        >
                            See More About Me
                            <ChevronRightIcon className="chevron" />
                        </button>
                        <button
                            className="about-me__button primary"
                            onClick={() => navigate("/#/projects")}
                        >
                            View My Projects
                            <ChevronRightIcon className="chevron" />
                        </button>
                    </div>
                </div>
                <div className="about-me__image">
                    <img src={profileImage} alt="Griffin Homan"/>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
