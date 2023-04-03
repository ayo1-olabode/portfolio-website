import React from "react";
import { Container } from "@chakra-ui/react";
import "./hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

function Hero() {
  const handleEmail = () => {
    window.location.assign("mailto:ayoolabode23@outlook.com");
  };

  const opentab = (url: string) => {
    window.open(url);
  };

  const originalText = "discord";
  const discordTag = "vergil#2952";
  const [text, setText] = useState(originalText);

  return (
    <div>
      <Container maxW="container.xl" centerContent>
        <h1 className="hero-name">
          <span className="span-name">Ayo</span> Olabode
        </h1>
        <h2 className="hero-title">
          Software Engineer · Aspiring Fullstack Developer
        </h2>
        <div className="hero-socials">
          <a
            className="hero-socials__item"
            href="https://www.linkedin.com/in/ayo-olabode-99b18b206/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            className="hero-socials__item"
            href="https://github.com/ayo1-olabode"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={35} />
          </a>
        </div>
        <hr className="hero-line" />

        <div className="hero-text">
          <p>
            Hey there! I'm Ayo, a 3rd-year Software Engineering student at the{" "}
            {""}
            <span
              onClick={() =>
                opentab(
                  "https://www.ucalgary.ca/future-students/undergraduate/explore-programs/software-engineering"
                )
              }
            >
              University of Calgary
            </span>
            , and a full-stack developer. I am enthusiastic about creating
            user-friendly and efficient applications that cater to diverse
            needs.
            <br />
            <br />
            Apart from my professional experience, I am an active member of{" "}
            <span onClick={() => opentab("https://www.codethechangeyyc.ca/")}>
              {" "}
              Code The Change
            </span>
            , a club that provides software services/programs to non-profit
            organizations in the development team, I take pride in using my
            technical skills to positively impact the community.
            <br />
            <br />
            When I'm not working on my academic projects, you'll find me engaged
            in various programming challenges and exploring the latest web
            development technologies. I'm always excited to learn and grow,
            pushing the boundaries of what's possible in software engineering.
            <br />
            <br />
            In my free time, I love fitness, which helps me maintain a healthy
            balance between work and personal life. Staying active allows me to
            clear my mind and boosts my creativity, making me even more
            passionate about developing innovative software solutions. If you'd
            like to connect or have any questions, don't hesitate to reach out
            via{" "}
            <span onClick={handleEmail} className="email">
              email
            </span>{" "}
            or{" "}
            <span
              className="discord"
              onMouseEnter={() => setText(discordTag)}
              onMouseLeave={() => setText(originalText)}
            >
              {text}
            </span>
            . Let's create something amazing together.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
