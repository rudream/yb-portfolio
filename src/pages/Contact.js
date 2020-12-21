import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Planet from "../components/Planet";
import { contactInfoVariants } from "../styles/animation";
import github from "../img/svgs/github.svg";
import email from "../img/icons/email.svg";
import linkedin from "../img/svgs/linkedin.svg";

import stars from "../img/svgs/stars.svg";
import bottomLeft from "../img/svgs/bottomleftgrid.svg";
import topRight from "../img/svgs/toprightgrid.svg";
import { StyledTopRightGrid, StyledBottomLeftGrid, StyledStars } from "./Home";

const Contact = () => {
    return (
        <>
            <StyledStars src={stars} alt="stars background" />
            <StyledTopRightGrid src={topRight} alt="toprightgrid" />
            <StyledBottomLeftGrid src={bottomLeft} alt="bottomleftgrid" />
            <StyledTitle
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "easeIn",
                        duration: 1,
                        delay: 1,
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
            <Planet />
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
                        window.open("mailto:rudream12@gmail.com");
                    }}
                >
                    <img src={email} alt="email icon" />
                    <h2>rudream12@gmail.com</h2>
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
                        window.open("https://www.linkedin.com/in/yassineboun/");
                    }}
                    exit="exit"
                >
                    <img src={linkedin} alt="email icon" />
                    <h2>linkedin.com/in/yassineboun</h2>
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
                        window.open("https://github.com/rudream");
                    }}
                    exit="exit"
                >
                    <img src={github} alt="email icon" />
                    <h2>github.com/rudream</h2>
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
    height: 55vh;
    overflow: hidden;
    padding-top: 2vh;
    img {
        height: 3vw;
        width: 3vw;
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
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3vw;
    height: 3vw;
    background: white;
`;

const ContactInfo = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-bottom: 5vh;
    h2 {
        font-size: 2.2vw;
        margin-left: 1vw;
        height: 3vw;
    }
    user-select: none;
    cursor: pointer;
    transform-origin: center left;
`;

export default Contact;
