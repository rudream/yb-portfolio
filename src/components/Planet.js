import React from "react";
import redPlanet from "../img/redplanet.svg";
import bluePlanet from "../img/blueplanet.svg";
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
                    drag
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    dragElastic={0.1}
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
                    drag
                    dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    dragElastic={0.1}
                    initial="hidden"
                    animate="show"
                    variants={bluePlanetInVariants}
                    src={bluePlanet}
                    exit="hidden"
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
