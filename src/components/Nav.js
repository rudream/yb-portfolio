import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import logo from "../img/svgs/logo.svg";

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/">
                        <StyledNavItem
                            initial={{ opacity: "0.7", scale: "1" }}
                            animate={{
                                opacity: `${pathname === "/" ? "1" : "0.7"}`,
                                scale: `${pathname === "/" ? "1.2" : "1"}`,
                            }}
                        >
                            HOME
                        </StyledNavItem>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <StyledNavItem
                            initial={{ opacity: "0.7", scale: "1" }}
                            animate={{
                                opacity: `${
                                    pathname === "/projects" ? "1" : "0.7"
                                }`,
                                scale: `${
                                    pathname === "/projects" ? "1.2" : "1"
                                }`,
                            }}
                        >
                            PROJECTS
                        </StyledNavItem>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <StyledNavItem
                            initial={{ opacity: "0.7", scale: "1" }}
                            animate={{
                                opacity: `${
                                    pathname === "/contact" ? "1" : "0.7"
                                }`,
                                scale: `${
                                    pathname === "/contact" ? "1.2" : "1"
                                }`,
                            }}
                        >
                            CONTACT
                        </StyledNavItem>
                    </Link>
                </li>
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
    z-index: 3;
    max-width: 100vw;
    ul {
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: center;
        flex-grow: 8;
    }
    .logo {
        width: 7vw;
        flex-grow: 2;
    }
    @media screen and (max-width: 768px) {
        .logo {
            display: none;
        }
    }
`;

const StyledNavItem = styled(motion.h5)`
    padding: 0rem 8vw;
    text-align: center;
    font-weight: bold;
    font-size: 1.2vw;
    @media screen and (max-width: 768px) {
        font-size: 3vw;
    }
`;

export default Nav;
