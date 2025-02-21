import React from "react";
import "../../styles/pages/Home.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h2>Hey, I'm</h2>
                    <h1>Griffin Homan</h1>
                    <p>
                        Boston developer driven by curiosity and a love for solving real-world problems,
                        always seeking new challenges to build impactful, scalable solutions.
                    </p>
                    <button className="hero__button">
                        Contact Me
                        <ChevronRightIcon/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
