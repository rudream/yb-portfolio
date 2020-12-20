import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import stars from "../img/stars.svg";
import Planet from "../components/Planet";
import { StyledStars } from "./Home";
import topLeft from "../img/toprightgrid.svg";
import bottomRight from "../img/bottomleftgrid.svg";
import ProjectPreview from "../components/ProjectPreview";

const Projects = () => {
    return (
        <>
            <StyledStars src={stars} />
            <StyledTopLeftGrid src={topLeft} />
            <StyledBottomRightGrid src={bottomRight} />
            <Planet />
            <StyledTitle
                key="projects-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
                PROJECTS
            </StyledTitle>
            <StyledPreviews
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
            >
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
            </StyledPreviews>
        </>
    );
};

const StyledTopLeftGrid = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 12vw;
    user-select: none;
    z-index: -30;
`;

const StyledBottomRightGrid = styled(motion.img)`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12vw;
    user-select: none;
    z-index: -30;
`;

const StyledTitle = styled(motion.h1)`
    letter-spacing: 0.5vw;
    font-size: 4.7vw;
    text-align: left;
    cursor: default;
    position: absolute;
    left: 27vw;
    top: 25vh;
    user-select: none;
`;

const StyledPreviews = styled(motion.div)`
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translateX(-50%);
    width: 66vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 2vh 1vw;
`;

export default Projects;
