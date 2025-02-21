import React from "react";
import "../../styles/pages/Home.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {useNavigate} from "react-router-dom";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h2>Hey, I'm</h2>
                    <h1>Griffin Homan</h1>
                    <p>
                        Full stack developer dedicated to designing and building innovative,
                        scalable solutions that tackle real-world challenges.
                    </p>
                    <button
                        className="hero__button"
                        onClick={() => navigate("/contact")}
                    >
                        Contact Me
                        <ChevronRightIcon/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
