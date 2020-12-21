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

import { iconVariants } from "../styles/animation";
import FixScrollBug from "../components/FixScrollBug";

const Home = () => {
    return (
        <StyledHome>
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
                    transition={{ duration: 1.1, delay: 1.8 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    SOFTWARE DEVELOPER
                </StyledSubtitle>
                <StyledPhrase
                    key="phrase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1.1, delay: 2.4 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    React developer based in Toronto, CA
                </StyledPhrase>
                <motion.div
                    id="buttons-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.1, delay: 3 }}
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
                </motion.div>
            </StyledInfo>
        </StyledHome>
    );
};

const StyledHome = styled.div`
    max-height: 88vh;
    overflow-y: hidden;
    overflow-x: hidden;
`;

const StyledTopRightGrid = styled(motion.img)`
    position: absolute;
    top: 0;
    right: 0;
    width: 12vw;
    user-select: none;
    z-index: -30;
`;

const StyledBottomLeftGrid = styled(motion.img)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 12vw;
    user-select: none;
    z-index: -30;
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
`;

const StyledInfo = styled(motion.div)`
    position: fixed;
    top: 56%;
    left: 43%;
    transform: translate(-49%, -50%);
    display: flex;
    flex-direction: column;
    user-select: none;
    #buttons-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20vw;
    }
    img {
        width: 2vw;
    }
`;

const StyledName = styled(motion.h1)`
    letter-spacing: 0.3vw;
    font-size: 3.3vw;
    text-align: left;
    margin-bottom: 1vh;
    cursor: default;
`;

const StyledSubtitle = styled(motion.h2)`
    font-weight: 600;
    font-size: 1.6vw;
    letter-spacing: 0.1vw;
    margin-bottom: 3vh;
    cursor: default;
`;

const StyledPhrase = styled(motion.h3)`
    opacity: 0.7;
    font-weight: normal;
    font-size: 1.4vw;
    margin-bottom: 4vh;
    cursor: default;
`;

const StyledButton = styled(motion.button)`
    border: none;
    background: #9f3b3b 0% 0% no-repeat padding-box;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    width: 12vw;
    cursor: pointer;
    user-select: none;
    will-change: transform;
    p {
        font-family: "Quiet Sans", sans-serif;
        text-align: center;
        font-weight: bold;
        letter-spacing: 0.1vw;
        font-size: 1.1vw;
        white-space: nowrap;
    }
    :focus {
        outline: 0;
    }
`;

const StyledIcon = styled(motion.img)`
    cursor: pointer;
    opacity: 0.6;
`;

export default Home;
