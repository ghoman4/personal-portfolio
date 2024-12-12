import React from "react";
import "../../styles/components/HeroSection.scss";
import epicMain from "../../assets/epic-main.png";

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
                    <button className="hero__button">Contact Me</button>
                </div>
                <div className="hero__image">
                    <img src={epicMain} alt="Griffin working"/>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
