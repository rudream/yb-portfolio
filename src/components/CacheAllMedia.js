import React from "react";
import styled from "styled-components";
import css from "../img/icons/css.svg";
import firebase from "../img/icons/firebase.svg";
import exit from "../img/icons/exit.svg";
import html from "../img/icons/html.svg";
import javascript from "../img/icons/javascript.svg";
import react from "../img/icons/react.svg";
import redux from "../img/icons/redux.svg";
import sass from "../img/icons/sass.svg";
import link from "../img/icons/link.svg";
import codeIcon from "../img/icons/code.svg";
import logo from "../img/svgs/logo.svg";
import colorpalette from "../img/screenshots/colorpalette.jpg";
import colorpalette2 from "../img/screenshots/colorpalette2.jpg";
import gamezilla from "../img/screenshots/gamezilla.jpg";
import gamezilla2 from "../img/screenshots/gamezilla2.jpg";
import kbphotography from "../img/screenshots/kbphotography.jpg";
import kbphotography2 from "../img/screenshots/kbphotography2.jpg";
import studyplayer from "../img/screenshots/studyplayer.jpg";
import studyplayer2 from "../img/screenshots/studyplayer2.jpg";
import redPlanet from "../img/svgs/redplanet.svg";
import bluePlanet from "../img/svgs/blueplanet.svg";
import purpleplanet from "../img/svgs/purpleplanet.svg";
import bottomLeft from "../img/svgs/bottomleftgrid.svg";
import topRight from "../img/svgs/toprightgrid.svg";
import github from "../img/svgs/github.svg";
import linkedin from "../img/svgs/linkedin.svg";
import stars from "../img/svgs/stars.svg";
import mobilestars from "../img/svgs/mobilestars.svg";
import email from "../img/icons/email.svg";

const CacheAllMedia = () => {
    const media = [
        css,
        firebase,
        exit,
        html,
        javascript,
        react,
        redux,
        sass,
        link,
        codeIcon,
        logo,
        colorpalette,
        colorpalette2,
        gamezilla,
        gamezilla2,
        kbphotography,
        kbphotography2,
        studyplayer,
        studyplayer2,
        redPlanet,
        bluePlanet,
        purpleplanet,
        bottomLeft,
        topRight,
        github,
        linkedin,
        stars,
        mobilestars,
        email,
        exit,
    ];

    return (
        <StyledGhettoFix>
            {media.map((img) => (
                <img src={img} alt={img} key={img} />
            ))}
        </StyledGhettoFix>
    );
};

const StyledGhettoFix = styled.div`
    display: none;
`;

export default CacheAllMedia;
