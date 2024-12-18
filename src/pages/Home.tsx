import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutMe from "../components/Home/AboutMe";

const Home: React.FC = () => {

    return (
        <div className="home">
            <HeroSection />
            <AboutMe />
        </div>
    );
}

export default Home;
