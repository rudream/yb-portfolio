import React from "react";
import styled from "styled-components";
import Planet from "../components/Planet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bottomLeft from "../img/svgs/bottomleftgrid.svg";
import topRight from "../img/svgs/toprightgrid.svg";
import github from "../img/svgs/github.svg";
import linkedin from "../img/svgs/linkedin.svg";
import stars from "../img/svgs/stars.svg";
import mobilestars from "../img/svgs/mobilestars.svg";

import { iconVariants } from "../styles/animation";
import NoScrollOnHome from "../components/NoScrollOnHome";

import CacheAllMedia from "../components/CacheAllMedia";

const Home = () => {
    return (
        <StyledHome>
            <CacheAllMedia />
            <NoScrollOnHome />
            <StyledTopRightGrid src={topRight} alt="top right dots" />
            <StyledBottomLeftGrid src={bottomLeft} alt="bottom left dots" />
            <StyledStars src={stars} alt="stars" />
            <MobileStars src={mobilestars} alt="mobile stars" />
            <Planet />
            <StyledInfo>
                <StyledName
                    key="name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    YASSINE BOUNEKHLA
                </StyledName>
                <StyledSubtitle
                    key="subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.1, delay: 1.2 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    SOFTWARE DEVELOPER
                </StyledSubtitle>
                <StyledPhrase
                    key="phrase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1.1, delay: 1.5 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    React developer based in Toronto, CA
                </StyledPhrase>
                <StyledButtons
                    id="buttons-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.1, delay: 1.8 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <Link to="/projects">
                        <StyledButton
                            key="button"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", duration: 0.2 }}
                        >
                            <p>SEE MY WORK</p>
                        </StyledButton>
                    </Link>
                    <StyledIcons>
                        <StyledIcon
                            key="linkedin"
                            variants={iconVariants}
                            whileHover="hover"
                            initial="show"
                            src={linkedin}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    "https://www.linkedin.com/in/yassineboun/"
                                );
                            }}
                        />
                        <StyledIcon
                            key="github"
                            initial="show"
                            variants={iconVariants}
                            whileHover="hover"
                            src={github}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("https://github.com/rudream");
                            }}
                        />
                    </StyledIcons>
                </StyledButtons>
            </StyledInfo>
        </StyledHome>
    );
};

const StyledHome = styled.div`
    max-height: 88vh;
    overflow-y: hidden;
    overflow-x: hidden;
`;

export const StyledTopRightGrid = styled(motion.img)`
    position: absolute;
    top: 0;
    right: 0;
    width: 12vw;
    user-select: none;
    z-index: -30;
    @media screen and (max-width: 768px) {
        width: 27vw;
        max-height: 60vh;
    }
`;

export const StyledBottomLeftGrid = styled(motion.img)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 12vw;
    user-select: none;
    z-index: -30;
    @media screen and (max-width: 768px) {
        width: 33vw;
        max-height: 60vh;
    }
`;

export const StyledStars = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 70vh;
    user-select: none;
    user-drag: none;
    z-index: -20;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileStars = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    user-select: none;
    user-drag: none;
    z-index: -20;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const StyledInfo = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 43%;
    transform: translate(-49%, -50%);
    display: flex;
    flex-direction: column;
    user-select: none;
    max-height: 100vh;
    @media screen and (max-width: 768px) {
        top: 47%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        height: 60vh;
        justify-content: center;
        text-align: center;
    }
`;

const StyledButtons = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
    button:focus {
        outline: 0;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;

const StyledIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 20%;
    @media screen and (max-width: 768px) {
        margin-top: 3vh;
    }
`;

const StyledName = styled(motion.h1)`
    letter-spacing: 0.3vw;
    font-size: 3.8vw;
    text-align: left;
    margin-bottom: 1vh;
    cursor: default;
    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 12vw;
        margin-bottom: 2vh;
    }
`;

const StyledSubtitle = styled(motion.h2)`
    font-weight: 600;
    font-size: 1.6vw;
    letter-spacing: 0.1vw;
    margin-bottom: 3vh;
    cursor: default;
    @media screen and (max-width: 768px) {
        font-size: 4.5vw;
    }
`;

const StyledPhrase = styled(motion.h3)`
    opacity: 0.7;
    font-weight: normal;
    font-size: 1.4vw;
    margin-bottom: 4vh;
    cursor: default;
    @media screen and (max-width: 768px) {
        font-size: 4vw;
    }
`;

const StyledButton = styled(motion.button)`
    border: none;
    background: #9f3b3b;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    outline: 1px solid transparent;
    width: 12vw;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.1vw;
    font-weight: bold;
    font-family: quiet-sans, sans-serif;
    line-height: 1.25;
    p {
        margin-bottom: 0.4vh;
    }
    @media screen and (max-width: 768px) {
        width: 40vw;
        max-height: 10vh;
        padding: 1vh 1vw;
        font-size: 4vw;
        line-height: 1.3;
    }
`;

const StyledIcon = styled(motion.img)`
    cursor: pointer;
    width: 2.5vw;
    opacity: 0.7;
    outline: 1px solid transparent;
    @media screen and (max-width: 768px) {
        width: 8vw;
    }
`;

export default Home;
