import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../styles/pages/Projects.scss";
import localifyImage from "../assets/localify-preview.png";
import charityTreeImage from "../assets/charity-tree-preview.png";

interface SimpleProject {
    id: string;
    name: string;
    image: string;
    stillWorking: boolean;
    startDate: Date;
    endDate?: Date;
    keywords: string[];
    style: string;
}

const projects: SimpleProject[] = [
    {
        id: "localify",
        name: "Localify.org",
        image: localifyImage,
        stillWorking: true,
        startDate: new Date(2022, 3),
        endDate: undefined,
        keywords: ["React", "SCSS", "TypeScript", "SwiftUI"],
        style: "localify-text-glow"
    },
    {
        id: "charity-tree",
        name: "Charity Tree",
        image: charityTreeImage,
        stillWorking: false,
        startDate: new Date(2024, 0),
        endDate: new Date(2024, 4),
        keywords: ["Spring Boot", "Java", "JWT Auth."],
        style: "charity-tree-text-glow"
    },
    {
        id: "localify",
        name: "Localify.org",
        image: localifyImage,
        stillWorking: false,
        startDate: new Date(2023, 0),
        endDate: new Date(2023, 2),
        keywords: [
            "React",
            "SCSS",
            "TypeScript",
        ],
        style: "secondary-text-glow"
    },
];

const Projects: React.FC = () => {
    const formatter = new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    });
    const navigate = useNavigate();

    return (
        <div className="projects">
            <h1 className="title">Projects</h1>
            <div className="card-container">
                {projects.map((project, index) => {
                    const startDate = formatter.format(project.startDate);
                    const endDate = project.endDate
                        ? formatter.format(project.endDate)
                        : "Present";

                    return (
                        <div className="card" key={index}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="card__image"
                            />
                            <div className="card__text-container">
                                <div>
                                    <h3 className={`card__name ${project.style}`}>{project.name}</h3>
                                    <p className="card__date">{`${startDate} - ${endDate}`}</p>
                                    <ul className="card__languages">
                                        {project.keywords.map((keyword, i) => (
                                            <li key={i}>{keyword}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button
                                    className="view-all-button"
                                    onClick={() => navigate(`/project/${project.id}`)}
                                >
                                    <h5>View All</h5>
                                    <ChevronRightIcon />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
