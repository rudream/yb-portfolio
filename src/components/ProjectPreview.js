import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ProjectPreviewVariant } from "../styles/animation";

const ProjectPreview = ({ props, setDisplayingDetails, setCurrentData }) => {
    const displayDetailsHandler = () => {
        document.body.style.overflow = "hidden";
        setCurrentData({ props });
        setDisplayingDetails(true);
    };

    return (
        <>
            <StyledPreview
                whileHover={{ scale: 1.1 }}
                onClick={displayDetailsHandler}
                layoutId={`${props.name}`}
            >
                <PreviewImage
                    layoutId={`image ${props.name}`}
                    src={props.img}
                    alt={`${props.name} preview`}
                    key={`${props.name}`}
                />
                <StyledTextWrapper>
                    <StyledTitle key={`${props.name}`}>
                        {props.name}
                    </StyledTitle>
                    <StyledSubtitle
                        layoutId={`desc ${props.name}`}
                        key={`${props.name}2`}
                    >
                        {props.desc}
                    </StyledSubtitle>
                </StyledTextWrapper>
            </StyledPreview>
        </>
    );
};

const StyledPreview = styled(motion.div)`
    width: 100%;
    min-height: 50vh;
    padding: 5vh 1vw;
    padding-bottom: 3vh;
    background-color: #212121;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: 1;
`;

const PreviewImage = styled.img`
    width: 90%;
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.7);
`;

const StyledTitle = styled.h2`
    font-size: 2vw;
    text-align: left;
`;

const StyledSubtitle = styled.h4`
    font-weight: lighter;
    font-size: 1vw;
    text-align: left;
    max-width: 80%;
    opacity: 0.7;
`;

const StyledTextWrapper = styled.div`
    width: 90%;
    margin-top: 4%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export default ProjectPreview;
