import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import css from "../img/icons/css.svg";
import firebase from "../img/icons/firebase.svg";
import firestore from "../img/icons/firestore.svg";
import html from "../img/icons/html.svg";
import javascript from "../img/icons/javascript.svg";
import react from "../img/icons/react.svg";
import redux from "../img/icons/redux.svg";
import sass from "../img/icons/sass.svg";
import link from "../img/icons/link.svg";
import codeIcon from "../img/icons/code.svg";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

const ProjectDetails = ({ props, displayingDetails, setDisplayingDetails }) => {
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
            case "Firestore":
                return firestore;
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
                            <h1 className="shadow" onClick={exitDetailHandler}>
                                X
                            </h1>
                        </ExitButton>
                        <StyledHeader>
                            <StyledTitle>{name}</StyledTitle>
                            <Technologies>
                                <StyledLink
                                    whileHover={{ scale: 1.2, opacity: 1 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(`${live}`);
                                    }}
                                >
                                    <motion.img src={link} alt="link" />
                                    <motion.h3>Live Demo</motion.h3>
                                </StyledLink>
                                <StyledLink
                                    whileHover={{ scale: 1.2, opacity: 1 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(`${code}`);
                                    }}
                                >
                                    <img src={codeIcon} alt="code" />
                                    <h3>Source Code</h3>
                                </StyledLink>
                                {techs.map((tech) => {
                                    return (
                                        <Technology key={tech}>
                                            <img
                                                src={getTechnology(tech)}
                                                alt={`${tech}`}
                                            />
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
    background: #b32400;
    width: 2vw;
    height: 2vw;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        text-align: center;
        user-select: none;
        height: 100%;
        line-height: 100%;
    }
    cursor: pointer;
`;

const StyledDetails = styled(motion.div)`
    z-index: 10;
    width: 80%;
    padding: 0rem 2rem;
    background: #212121;
    position: absolute;
    left: 10%;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    img {
        width: 100%;
    }
    h6 {
        font-size: 3vw;
        font-weight: normal;
        margin-top: 2%;
        margin-bottom: 2%;
    }
    margin: 20vh 0rem;
`;

const StyledDetailsImage = styled(motion.img)`
    max-width: 90%;
    filter: drop-shadow(25px 25px 20px rgba(0, 0, 0, 0.5));
`;

const SecondImage = styled(motion.img)`
    max-width: 90%;
    margin-bottom: 2%;
`;

const StyledLink = styled(motion.div)`
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 2.5vw;
        user-select: none;
        user-drag: none;
    }
    h3 {
        font-weight: normal;
        user-select: none;
    }
    cursor: pointer;
`;

const StyledHeader = styled(motion.div)`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% 0%;
    height: 20vh;
`;

const StyledTitle = styled(motion.h1)`
    font-size: 3.4vw;
    font-weight: lighter;
    text-align: left;
    padding: 5% 0;
    width: 40%;
    white-space: nowrap;
`;

const StyledDescription = styled(motion.h4)`
    max-width: 80%;
    font-weight: lighter;
    opacity: 0.8;
    font-size: 2.1vw;
    text-align: left;
    margin: 5% 5%;
    margin-bottom: 3%;
`;

const Technologies = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
`;

const Technology = styled(motion.div)`
    .platform-name {
        font-size: 1vw;
        text-align: center;
        padding-top: 1%;
    }
    img {
        width: 5vw;
        max-height: 8vh;
    }
`;

const Features = styled.div`
    height: 30vh;
    display: flex;
    margin: 5% 5%;
    margin-top: 1%;
    align-items: center;
    justify-content: center;
`;

const FeatureStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 1.7vw;
        white-space: nowrap;
        opacity: 0.9;
    }
    .line {
        width: 100%;
        background: #4d789e;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        font-size: 1.2vw;
        padding: 1% 0%;
        opacity: 0.8;
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
