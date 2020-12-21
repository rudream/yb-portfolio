import React from "react";

const NoScrollOnHome = () => {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    return <></>;
};

export default NoScrollOnHome;
