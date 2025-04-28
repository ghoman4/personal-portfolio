import React from "react";
import "../styles/pages/About.scss";
import headshot from "../assets/san_fran.jpeg";

const About: React.FC = () => {
    return (
        <section className="about">
            <div className="about__container">
                <img src={headshot} alt="profile"/>

                <h1>About Me</h1>
                <p>
                    Hey, I'm Griffin. I consider myself a curious and driven individual with a passion
                    for both creative problem solving and connecting with people. Growing up in Marblehead,
                    MA, a coastal town about 45 minutes north of Boston, I experienced a close-knit family
                    life that taught me the value of hard work and dedication. My parents, with my mom being
                    a third-grade teacher and my dad managing his business as an electrician, provided me with
                    a strong foundation that influenced the way I approach challenges and opportunities. They
                    taught me the importance of never giving up and the value of perseverance, which has shaped
                    me into who I am today.
                </p>

                <p>
                    During high school, I focused on excelling academically, particularly in math and science,
                    which laid a solid foundation for my future interest in computer science. At the same time,
                    my involvement in choir and music provided a creative outlet that balanced my analytical
                    pursuits. While managing these commitments, I also worked part-time in the restaurant
                    industry. Starting as a busser and eventually moving up to server and bartender, I developed
                    essential people skills, learned to stay organized under pressure, and discovered the true
                    value of teamwork. These experiences together not only refined my work ethic but also set
                    high personal standards, ultimately inspiring me to pursue higher education in a field that
                    blends technical expertise with creative solutions.
                </p>

                <p>
                    At Ithaca College, I have been able to blend my interests by studying computer science and
                    emerging media while nurturing my passion for music through a minor. The diverse projects
                    I have worked on, ranging from innovative app prototypes to collaborative research, have
                    allowed me to expand my technical expertise in languages and frameworks such as React JS,
                    TypeScript, SwiftUI, Python, Java, C, and C++. As I continue to build on these experiences,
                    I am excited about the opportunity to transition into a role where I can combine my technical
                    abilities with my strong interpersonal skills to make a meaningful impact in the real world.
                </p>

                <p>
                    Outside of work and academics, I'm an avid explorer. I grew up skiing at Loon Mountain
                    almost every weekend since I was five, and that early love for the outdoors has stayed with
                    me. My passion for adventure expanded as I embraced swimming and hiking, experiences that
                    flourished in Ithaca, NY, with its stunning gorges and hiking trails. I've also come to
                    appreciate the relaxing appeal of the beaches near my home. When I'm not out exploring, I
                    enjoy going out with friends and am always up for a fun karaoke night.
                </p>
            </div>
        </section>
    );
};

export default About;
