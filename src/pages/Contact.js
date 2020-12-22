import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Planet from "../components/Planet";
import { contactInfoVariants } from "../styles/animation";
import github from "../img/svgs/github.svg";
import email from "../img/icons/email.svg";
import linkedin from "../img/svgs/linkedin.svg";

import stars from "../img/svgs/stars.svg";
import mobilestars from "../img/svgs/mobilestars.svg";
import bottomLeft from "../img/svgs/bottomleftgrid.svg";
import topRight from "../img/svgs/toprightgrid.svg";
import {
    StyledTopRightGrid,
    StyledBottomLeftGrid,
    StyledStars,
    MobileStars,
} from "./Home";

const Contact = () => {
    return (
        <>
            <Planet />
            <StyledStars src={stars} alt="stars background" />
            <MobileStars src={mobilestars} alt="mobile stars" />
            <StyledTopRightGrid src={topRight} alt="toprightgrid" />
            <StyledBottomLeftGrid src={bottomLeft} alt="bottomleftgrid" />
            <StyledTitle
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                        delay: 0.9,
                    },
                }}
                exit={{
                    x: 100,
                    opacity: 0,
                    transition: {
                        type: "tween",
                        duration: 0.2,
                    },
                }}
            >
                GET IN TOUCH
            </StyledTitle>
            <ContactStyle>
                <ContactInfo
                    initial={{ opacity: 0, y: 200 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "easeIn",
                            duration: 1,
                            delay: 1.5,
                        },
                    }}
                    variants={contactInfoVariants}
                    whileHover="hover"
                    exit="exit"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("mailto:yassineboun12@gmail.com");
                    }}
                >
                    <img src={email} alt="email icon" />
                    <h2>yassineboun12@gmail.com</h2>
                </ContactInfo>
                <ContactInfo
                    initial={{ opacity: 0, y: 200 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "easeIn",
                            duration: 1,
                            delay: 1.7,
                        },
                    }}
                    variants={contactInfoVariants}
                    whileHover="hover"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/rudream");
                    }}
                    exit="exit"
                >
                    <img src={github} alt="email icon" />
                    <h2>github.com/rudream</h2>
                </ContactInfo>
                <ContactInfo
                    initial={{ opacity: 0, y: 200 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "easeIn",
                            duration: 1,
                            delay: 1.9,
                        },
                    }}
                    variants={contactInfoVariants}
                    whileHover="hover"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open("https://www.linkedin.com/in/yassineboun/");
                    }}
                    exit="exit"
                >
                    <img src={linkedin} alt="email icon" />
                    <h2 id="linkedin-text">linkedin.com/in/yassineboun</h2>
                </ContactInfo>
            </ContactStyle>
        </>
    );
};

const ContactStyle = styled(motion.div)`
    position: absolute;
    left: 40vw;
    top: 35vh;
    width: 50vw;
    color: white;
    height: 40vh;
    overflow: hidden;
    padding-top: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        justify-content: space-around;
        width: 80vw;
        height: 30vh;
        left: 15vw;
        top: 25vh;
    }
`;

const StyledTitle = styled(motion.h1)`
    letter-spacing: 0.15vw;
    font-size: 4.7vw;
    text-align: left;
    cursor: default;
    position: absolute;
    left: 18vw;
    top: 15vh;
    user-select: none;
    @media screen and (max-width: 768px) {
        font-size: 8vw;
        left: 22vw;
    }
`;

const ContactInfo = styled(motion.div)`
    outline: 1px solid transparent;
    display: flex;
    align-items: center;
    margin-bottom: 5vh;
    h2 {
        font-size: 2.2vw;
        margin-left: 1vw;
        height: 3vw;
        line-height: 1;
    }
    img {
        height: 3vw;
        width: 3vw;
    }
    #linkedin-text {
        line-height: 1.25;
    }
    user-select: none;
    cursor: pointer;
    transform-origin: center left;
    @media screen and (max-width: 768px) {
        h2 {
            font-size: 5vw;
            height: 7vw;
        }
        img {
            height: 7vw;
            width: 7vw;
        }
    }
`;

export default Contact;
