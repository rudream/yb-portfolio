import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import stars from "../img/svgs/stars.svg";
import Planet from "../components/Planet";
import topLeft from "../img/svgs/toprightgrid.svg";
import bottomRight from "../img/svgs/bottomleftgrid.svg";
import ProjectPreview from "../components/ProjectPreview";
import ProjectsData from "../ProjectsData";
import ProjectDetails from "../components/ProjectDetails";
import { StyledStars } from "./Home";
import FixScrollBug from "../components/FixScrollBug";

const Projects = () => {
    const [displayingDetails, setDisplayingDetails] = useState(false);
    const [data, setData] = useState(ProjectsData);
    const [currentData, setCurrentData] = useState({});

    return (
        <div>
            <AnimateSharedLayout type="crossfade">
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
                    initial={{ opacity: 0, top: "100vh" }}
                    animate={{ opacity: 1, top: "52vh" }}
                    transition={{
                        duration: 1,
                        delay: 2,
                        type: "spring",
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                >
                    <ProjectPreview
                        y={"bottom"}
                        x={"right"}
                        props={data.gamezilla}
                        displayingDetails={displayingDetails}
                        setDisplayingDetails={setDisplayingDetails}
                        setCurrentData={setCurrentData}
                        key={data.gamezilla.name}
                    />
                    <ProjectPreview
                        y={"bottom"}
                        x={"left"}
                        props={data.studyplayer}
                        displayingDetails={displayingDetails}
                        setDisplayingDetails={setDisplayingDetails}
                        setCurrentData={setCurrentData}
                        key={data.studyplayer.name}
                    />
                    <ProjectPreview
                        y={"top"}
                        x={"right"}
                        props={data.kbphotography}
                        displayingDetails={displayingDetails}
                        setDisplayingDetails={setDisplayingDetails}
                        setCurrentData={setCurrentData}
                        key={data.kbphotography.name}
                    />
                    <ProjectPreview
                        y={"top"}
                        x={"left"}
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
    left: 28vw;
    top: 30vh;
    user-select: none;
`;

const StyledPreviews = styled(motion.div)`
    position: absolute;
    top: 100vh;
    left: 50vw;
    transform: translateX(-50%);
    width: 66vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 3vw 3vw;
`;

const StyledStars2 = styled(motion.img)`
    position: absolute;
    left: 50%;
    top: 150%;
    transform: translate(-50%, -50%);
    width: 70vw;
    user-select: none;
    user-drag: none;
    z-index: -20;
`;

export default Projects;
