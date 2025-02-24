import React from "react";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import Localify from "./projects/Localify";

const projectsMap: { [key: string]: React.FC } = {
    localify: Localify,
};

const ProjectManager: React.FC = () => {
    const { projectTitle } = useParams<{ projectTitle: string }>();

    if (!projectTitle) {
        return <Error404 />;
    }

    const normalizedTitle = projectTitle.toLowerCase();
    const ProjectComponent = projectsMap[normalizedTitle];

    // If the project doesn't exist in our map, render 404
    if (!ProjectComponent) {
        return <Error404 />;
    }

    return (
        <div className="project-page">
            <ProjectComponent />
        </div>
    );
};

export default ProjectManager;
