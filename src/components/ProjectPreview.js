import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectPreview = () => {
    return <StyledPreview></StyledPreview>;
};

const StyledPreview = styled(motion.div)`
    width: 100%;
    min-height: 40vh;
    background-color: #121212;
`;

export default ProjectPreview;
