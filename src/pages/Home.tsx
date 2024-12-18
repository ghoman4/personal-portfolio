import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutMe from "../components/Home/AboutMe";
import RecentProjects from "../components/Home/RecentProjects";

const Home: React.FC = () => {

    return (
        <div className="home">
            <HeroSection />
            <AboutMe />
            <RecentProjects />
        </div>
    );
}

export default Home;
