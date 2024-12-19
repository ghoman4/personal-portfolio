import React from "react";
import "../styles/pages/About.scss";
import headshot from "../assets/headshot.png";
import luluImage from "../assets/lulu.png";
import grayCircle from "../assets/gray-circle.png";

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about__container">
                {/* Intro Section */}
                <div className="about__section reverse">
                    <div className="about__image-container">
                        <img src={headshot} alt="Profile" className="about__image"/>
                    </div>
                    <div className="about__text-container">
                        <h2 className="about__title primary-text-glow">Hey Again, I’m Griffin!</h2>
                        <p className="about__description">
                            If you didn’t already see, I’m a computer science student at Ithaca College with a passion
                            for learning new things and solving problems with creative solutions. My curiosity drives
                            everything I do, whether it’s in the classroom, while working on personal projects, or
                            during my time as a developer on Localify.org. I’m always looking for the next challenge
                            and opportunity to expand my knowledge. For me, every problem is a chance to think
                            creatively and build something that can have real-world impact.
                        </p>
                    </div>
                </div>

                {/* Story Section (Reversed) */}
                <div className="about__section">
                    <div className="about__image-container">
                        <img src={luluImage} alt="Lulu" className="about__image"/>
                    </div>
                    <div className="about__text-container">
                        <h3 className="about__title secondary-text-glow">Growing Up in Marblehead</h3>
                        <p className="about__description">
                            I grew up in Marblehead, MA, a coastal New England town about 45 minutes north of Boston
                            with my parents, my two sisters, Blaze and Kiya, and our spoiled dog, Lulu, who insists
                            on being the center of attention. My mom, a third-grade teacher at Lynn Public Schools,
                            and my dad, an electrician and business owner, instilled in me the values of hard work,
                            perseverance, and the importance of following through on my commitments, even when
                            challenges arise. I attended Marblehead Public Schools, where I was actively involved in
                            musical theatre productions and choir, all while maintaining a strong focus on academic
                            success, particularly in my AP courses.
                        </p>
                    </div>
                </div>

                <div className="about__section reverse">
                    <div className="about__image-container">
                        <img src={grayCircle} alt="Fill In" className="about__image"/>
                    </div>
                    <div className="about__text-container">
                        <h3 className="about__title orange-glow">Navigating a Fast-Paced World</h3>
                        <p className="about__description">
                            After two summers bussing at a local yacht club, I moved to Maddie’s Sail Loft in 2019
                            as a busser. During the pandemic in 2020, I worked through the uncertainty and became a
                            server, learning to manage tables, handle the computer system, and cater to individual
                            requests in a constantly changing environment. In 2023, after returning from college, I
                            started bartending—a role I had admired for years but wasn’t sure I’d get soon. It’s been
                            incredibly rewarding, allowing me to connect with people, think on my feet, and thrive
                            under pressure, making me realize just how much of a people person I’ve become through
                            countless conversations. I’ve brought these skills into my projects, guiding teams to work
                            efficiently and communicate effectively, helping push the group forward as the extrovert in
                            the room.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
