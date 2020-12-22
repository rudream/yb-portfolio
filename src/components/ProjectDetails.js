import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import css from "../img/icons/css.svg";
import firebase from "../img/icons/firebase.svg";
import exit from "../img/icons/exit.svg";
import html from "../img/icons/html.svg";
import javascript from "../img/icons/javascript.svg";
import react from "../img/icons/react.svg";
import redux from "../img/icons/redux.svg";
import sass from "../img/icons/sass.svg";
import link from "../img/icons/link.svg";
import codeIcon from "../img/icons/code.svg";

const ProjectDetails = ({
    props,
    displayingDetails,
    setDisplayingDetails,
    icons,
}) => {
    const data = props.props;
    const { name, img, imgTwo, desc, techs, features, live, code } = data;

    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            setDisplayingDetails(false);
        }
    };

    const getTechnology = (tech) => {
        switch (tech) {
            case "React":
                return react;
            case "CSS":
                return css;
            case "Firebase":
                return firebase;
            case "Redux":
                return redux;
            case "HTML":
                return html;
            case "JavaScript":
                return javascript;
            case "SCSS":
                return sass;
            default:
                return "";
        }
    };

    return (
        <>
            {displayingDetails && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <StyledDetails layoutId={`${name}`} exit={{ opacity: 0 }}>
                        <ExitButton
                            className="shadow"
                            onClick={exitDetailHandler}
                        >
                            <img
                                className="shadow"
                                src={exit}
                                alt="close button"
                            />
                        </ExitButton>
                        <StyledHeader>
                            <StyledTitle>{name}</StyledTitle>
                            <Technologies>
                                <StyledLinks>
                                    <StyledLink
                                        whileHover={{ scale: 1.2 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(`${live}`);
                                        }}
                                    >
                                        <motion.img src={link} alt="link" />
                                        <motion.h3>Demo</motion.h3>
                                    </StyledLink>
                                    <StyledLink
                                        whileHover={{ scale: 1.2, opacity: 1 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(`${code}`);
                                        }}
                                    >
                                        <img src={codeIcon} alt="code" />
                                        <h3>Code</h3>
                                    </StyledLink>
                                </StyledLinks>
                                {techs.map((tech) => {
                                    return (
                                        <Technology key={tech}>
                                            <img
                                                src={getTechnology(tech)}
                                                alt={`${tech}`}
                                            />
                                            <p>{tech}</p>
                                        </Technology>
                                    );
                                })}
                            </Technologies>
                        </StyledHeader>
                        <StyledDetailsImage src={img} alt={`${name}`} />
                        <StyledDescription layoutId={`desc ${name}`}>
                            {desc}
                        </StyledDescription>
                        <h6>Features:</h6>
                        <Features>
                            {features.map((feature) => (
                                <Feature
                                    title={feature.title}
                                    info={feature.info}
                                    key={feature.title}
                                />
                            ))}
                        </Features>
                        <SecondImage src={imgTwo} alt={`${name}`} />
                    </StyledDetails>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #4d789e;
        border-radius: 2rem;
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
    }
`;

const ExitButton = styled(motion.div)`
    position: absolute;
    width: 3vw;
    height: 3vw;
    top: 1.5vw;
    right: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    @media screen and (max-width: 768px) {
        width: 5vw;
        height: 5vw;
    }
`;

const StyledDetails = styled(motion.div)`
    z-index: 10;
    width: 80%;
    padding: 0rem 1.9vw;
    background: #212121;
    position: absolute;
    left: 10%;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding-bottom: 3vh;
    img {
        width: 100%;
    }
    h6 {
        font-size: 3vw;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.15vw;
        margin-top: 2%;
        margin-bottom: 1%;
        text-align: left;
        width: 90%;
    }
    margin: 20vh 0rem;
    @media screen and (max-width: 768px) {
        padding: 0;
        padding-bottom: 17vh;
        width: 80vw;
        h6 {
            font-size: 8vw;
            text-align: center;
        }
    }
`;

const StyledDetailsImage = styled(motion.img)`
    max-width: 90%;
    filter: drop-shadow(25px 25px 20px rgba(0, 0, 0, 0.5));
    @media screen and (max-width: 768px) {
        margin-top: 3vh;
    }
`;

const SecondImage = styled(motion.img)`
    max-width: 90%;
    margin-bottom: 2%;
`;

const StyledLinks = styled(motion.div)`
    width: 30%;
    margin-right: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
    }
`;

const StyledLink = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    img {
        width: 3vw;
        user-select: none;
        user-drag: none;
    }
    h3 {
        font-weight: lighter;
        user-select: none;
        font-size: 1vw;
        opacity: 1;
        color: white;
    }
    cursor: pointer;
    @media screen and (max-width: 768px) {
        height: 5vh;
        h3 {
            font-size: 3vw;
        }
        img {
            width: 5vw;
        }
    }
`;

const StyledHeader = styled(motion.div)`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% 0%;
    height: 20vh;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        height: 15vh;
    }
`;

const StyledTitle = styled(motion.h1)`
    font-size: 3.2vw;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.15vw;
    padding: 5% 0;
    width: 40%;
    white-space: wrap;
    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 8vw;
        font-weight: normal;
        width: 100%;
    }
`;

const StyledDescription = styled(motion.h4)`
    width: 90%;
    font-weight: lighter;
    opacity: 0.8;
    font-size: 2.1vw;
    text-align: left;
    margin: 3% 0%;
    @media screen and (max-width: 768px) {
        font-size: 5vw;
        text-align: center;
    }
`;

const Technologies = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Technology = styled(motion.div)`
    .platform-name {
        font-size: 1vw;
        text-align: center;
        padding-top: 1%;
    }
    img {
        width: 2.5vw;
        max-height: 8vh;
    }
    @media screen and (max-width: 768px) {
        img {
            width: 5vw;
        }
    }
`;

const Features = styled.div`
    height: 30vh;
    display: flex;
    width: 90%;
    margin: 5% 0%;
    margin-top: 0%;
    align-items: top;
    padding: 0rem 0rem;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

const FeatureStyle = styled.div`
    height: 20vh;
    width: 25%;
    padding: 0rem 0rem;
    margin: 0rem 0rem;
    h3 {
        font-size: 1.9vw;
        white-space: nowrap;
        opacity: 0.9;
    }
    .line {
        width: 100%;
        background: #4d789e;
        height: 0.5rem;
        margin: 1vh 0rem;
    }
    p {
        font-size: 1.2vw;
        padding: 1% 0%;
        opacity: 0.8;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        h3 {
            font-size: 4vw;
        }
        p {
            font-size: 3vw;
        }
        .line {
            height: 0.5vh;
        }
    }
`;

const Feature = ({ title, info }) => {
    return (
        <FeatureStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{info}</p>
        </FeatureStyle>
    );
};

export default ProjectDetails;
