import React from "react";
import redPlanet from "../img/svgs/redplanet.svg";
import bluePlanet from "../img/svgs/blueplanet.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { redPlanetVariants, bluePlanetInVariants } from "../styles/animation";
import { useLocation } from "react-router-dom";

const Planet = () => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/" && (
                <StyledRedPlanet
                    initial="hidden"
                    animate="show"
                    variants={redPlanetVariants}
                    src={redPlanet}
                    style={{ originX: "200%", originY: "200%" }}
                    exit="exit"
                    key="red planet"
                />
            )}
            {pathname === "/projects" && (
                <StyledBluePlanet
                    initial="hidden"
                    animate="show"
                    variants={bluePlanetInVariants}
                    src={bluePlanet}
                    style={{ originY: "200%", originX: "-120%" }}
                    exit="exit"
                    key="blue planet"
                />
            )}
        </>
    );
};

const StyledRedPlanet = styled(motion.img)`
    position: absolute;
    left: 50.8vw;
    top: 14vh;
    width: 30vw;
    z-index: -5;
    user-select: none;
    user-drag: none;
`;

const StyledBluePlanet = styled(motion.img)`
    position: absolute;
    right: 50.8vw;
    top: 14vh;
    width: 30vw;
    z-index: -5;
    user-select: none;
    user-drag: none;
    transform-origin: -120% 200%;
`;

export default Planet;
