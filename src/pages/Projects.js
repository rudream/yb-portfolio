import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import stars from "../img/svgs/stars.svg";
import Planet from "../components/Planet";
import bottomLeft from "../img/svgs/bottomleftgrid.svg";
import topRight from "../img/svgs/toprightgrid.svg";

import ProjectPreview from "../components/ProjectPreview";
import ProjectsData from "../ProjectsData";
import ProjectDetails from "../components/ProjectDetails";
import { StyledStars } from "./Home";
import FixScrollBug from "../components/FixScrollBug";

import { StyledTopRightGrid, StyledBottomLeftGrid } from "./Home";

const Projects = () => {
    const [displayingDetails, setDisplayingDetails] = useState(false);
    const [data, setData] = useState(ProjectsData);
    const [currentData, setCurrentData] = useState({});

    return (
        <div>
            <AnimateSharedLayout>
                <AnimatePresence>
                    {displayingDetails ? (
                        <ProjectDetails
                            props={currentData}
                            displayingDetails={displayingDetails}
                            setDisplayingDetails={setDisplayingDetails}
                        />
                    ) : (
                        <FixScrollBug />
                    )}
                </AnimatePresence>
                <StyledStars src={stars} />
                <StyledStars2 src={stars} />
                <StyledBottomLeftGrid src={bottomLeft} />
                <StyledTopRightGrid src={topRight} />
                <Planet />
                <StyledTitle
                    key="projects-title"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    PROJECTS
                </StyledTitle>
                <StyledPreviews
                    initial={{ top: "100vh", opacity: 0 }}
                    animate={{
                        top: `${window.innerWidth > 768 ? "52vh" : "35vh"}`,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                        type: "spring",
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                >
                    <ProjectPreview
                        props={data.gamezilla}
                        displayingDetails={displayingDetails}
                        setDisplayingDetails={setDisplayingDetails}
                        setCurrentData={setCurrentData}
                        key={data.gamezilla.name}
                    />
                    <ProjectPreview
                        props={data.studyplayer}
                        displayingDetails={displayingDetails}
                        setDisplayingDetails={setDisplayingDetails}
                        setCurrentData={setCurrentData}
                        key={data.studyplayer.name}
                    />
                    <ProjectPreview
                        props={data.kbphotography}
                        displayingDetails={displayingDetails}
                        setDisplayingDetails={setDisplayingDetails}
                        setCurrentData={setCurrentData}
                        key={data.kbphotography.name}
                    />
                    <ProjectPreview
                        props={data.colorpalette}
                        displayingDetails={displayingDetails}
                        setDisplayingDetails={setDisplayingDetails}
                        setCurrentData={setCurrentData}
                        key={data.colorpalette.name}
                    />
                </StyledPreviews>
            </AnimateSharedLayout>
        </div>
    );
};

const StyledTitle = styled(motion.h1)`
    letter-spacing: 0.3vw;
    font-size: 4.7vw;
    text-align: left;
    cursor: default;
    position: absolute;
    left: 28vw;
    top: 30vh;
    user-select: none;
    @media screen and (max-width: 768px) {
        top: 18vh;
        left: 26vw;
        font-size: 10vw;
    }
`;

const StyledPreviews = styled(motion.div)`
    position: absolute;
    top: 52vh;
    left: 50vw;
    transform: translateX(-50%);
    width: 66vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 3vw 3vw;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        top: 35vh;
        width: 80vw;
    }
`;

const StyledStars2 = styled(motion.img)`
    position: absolute;
    left: 50%;
    top: 150%;
    transform: translate(-50%, -50%);
    width: 70vw;
    z-index: -20;
`;

export default Projects;
