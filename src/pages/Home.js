import React, { useEffect } from "react";
import styled from "styled-components";
import Planet from "../components/Planet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bottomLeft from "../img/svgs/bottomleftgrid.svg";
import topRight from "../img/svgs/toprightgrid.svg";
import github from "../img/svgs/github.svg";
import linkedin from "../img/svgs/linkedin.svg";
import stars from "../img/svgs/stars.svg";

import { iconVariants } from "../styles/animation";
import NoScrollOnHome from "../components/NoScrollOnHome";

const Home = () => {
    return (
        <StyledHome>
            <NoScrollOnHome />
            <StyledTopRightGrid src={topRight} alt="top right dots" />
            <StyledBottomLeftGrid src={bottomLeft} alt="bottom left dots" />
            <StyledStars src={stars} alt="stars" />
            <Planet />
            <StyledInfo>
                <StyledName
                    key="name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    YASSINE BOUNEKHLA
                </StyledName>
                <StyledSubtitle
                    key="subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.1, delay: 1.3 }}
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
                    transition={{ duration: 1.1, delay: 1.7 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <Link to="/projects">
                        <StyledButton
                            key="button"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.p>SEE MY WORK</motion.p>
                        </StyledButton>
                    </Link>
                    <StyledIcons>
                        <StyledIcon
                            key="linkedin"
                            variants={iconVariants}
                            whileHover="hover"
                            initial="show"
                            src={linkedin}
                        />
                        <StyledIcon
                            key="github"
                            initial="show"
                            variants={iconVariants}
                            whileHover="hover"
                            src={github}
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

const StyledInfo = styled(motion.div)`
    position: absolute;
    top: 56%;
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
    font-size: 3.3vw;
    text-align: left;
    margin-bottom: 1vh;
    cursor: default;
    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 11vw;
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
    width: 12vw;
    cursor: pointer;
    user-select: none;
    p {
        font-family: quiet-sans, sans-serif;
        text-align: center;
        font-weight: bold;
        letter-spacing: 0.1vw;
        font-size: 1.1vw;
        white-space: nowrap;
        line-height: 100%;
    }
    @media screen and (max-width: 768px) {
        width: 40vw;
        max-height: 10vh;
        padding: 2.2vh 1vw;
        p {
            font-size: 4vw;
            text-align: center;
        }
    }
`;

const StyledIcon = styled(motion.img)`
    cursor: pointer;
    opacity: 0.7;
    @media screen and (max-width: 768px) {
        width: 8vw;
    }
`;

export default Home;
