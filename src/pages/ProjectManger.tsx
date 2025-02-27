import React from "react";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";

// Import each project page:
import Localify from "./projects/Localify";
import CharityTree from "./projects/CharityTree";
import Poliquicks from "./projects/Poliquicks";

// Map route params to their respective components.
// Note that the keys match the `id` in your projects array (e.g., "charity-tree").
const projectsMap: { [key: string]: React.FC } = {
    "localify": Localify,
    "charity-tree": CharityTree,
    "poliquicks": Poliquicks,
};

const ProjectManager: React.FC = () => {
    const { projectTitle } = useParams<{ projectTitle: string }>();

    // If no project title was provided in the route, show 404
    if (!projectTitle) {
        return <Error404 />;
    }

    // Normalize the route param to lowercase
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
