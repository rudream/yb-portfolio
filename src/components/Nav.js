import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "../img/logo.svg";

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <ul>
                <motion.li className={`${pathname === "/" ? "selected" : ""}`}>
                    <Link to="/">HOME</Link>
                </motion.li>
                <motion.li
                    className={`${pathname === "/projects" ? "selected" : ""}`}
                >
                    <Link to="/projects">PROJECTS</Link>
                </motion.li>
                <motion.li
                    className={`${pathname === "/contact" ? "selected" : ""}`}
                >
                    <Link to="/contact">CONTACT</Link>
                </motion.li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
    display: flex;
    height: 12vh;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 0rem 10vw 0rem 5vw;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    ul {
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: center;
        flex-grow: 8;
    }
    li {
        padding: 0rem 10rem;
        text-align: center;
        font-weight: bold;
        font-size: 1.2vw;
        opacity: 0.7;
    }
    .logo {
        width: 7vw;
        flex-grow: 2;
    }
    .selected {
        opacity: 1;
        font-size: 1.5vw;
    }
`;

export default Nav;
