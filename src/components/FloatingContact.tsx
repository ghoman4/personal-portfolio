import React from "react";
import "../styles/components/FloatingContact.scss";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const FloatingContact: React.FC = () => {
    const handleClick = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <div className="floating-contact">
            <a href="mailto:griffinhomanj@gmail.com" className="floating-contact__icon">
                <FaEnvelope />
            </a>
            <FaLinkedin
                className="floating-contact__icon"
                onClick={() => handleClick("https://www.linkedin.com/in/griffin-homan-2b4042231/")}
            />
            <FaGithub
                className="floating-contact__icon"
                onClick={() => handleClick("https://github.com/ghoman4")}
            />
        </div>
    );
};

export default FloatingContact;
