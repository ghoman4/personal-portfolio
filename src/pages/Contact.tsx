import React from "react";
import "../styles/pages/Contact.scss";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
    const handleClick = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <section className="contact">
            <div className="contact__container">
                <h1>Contact Me</h1>
                <p>
                    Whether you have a question, collaboration idea, or just want to say hello,
                    feel free to drop me an email or connect with me on LinkedIn or GitHub.
                </p>
                <div className="contact__icons">
                    <a
                        href="mailto:griffinhomanj@gmail.com"
                        className="contact__icon"
                        aria-label="Send Email"
                    >
                        <FaEnvelope />
                    </a>
                    <div
                        className="contact__icon"
                        onClick={() =>
                            handleClick("https://www.linkedin.com/in/griffin-homan-2b4042231/")
                        }
                        aria-label="Visit LinkedIn"
                    >
                        <FaLinkedin />
                    </div>
                    <div
                        className="contact__icon"
                        onClick={() => handleClick("https://github.com/ghoman4")}
                        aria-label="Visit GitHub"
                    >
                        <FaGithub />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
