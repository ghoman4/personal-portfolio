import React from "react";
import "../../styles/pages/Home.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {useNavigate} from "react-router-dom";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="container">
                <h1>Griffin Homan</h1>
                <p>
                    Full stack computer science student dedicated to designing and building innovative,
                    scalable solutions that tackle real-world challenges.
                </p>
                <div className="button-container">
                    <button
                        className="hero__button"
                        onClick={() => navigate("/projects")}
                    >
                        View My Projects
                        <ChevronRightIcon/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
