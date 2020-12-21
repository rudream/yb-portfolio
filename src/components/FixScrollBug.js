import React from "react";

const FixScrollBug = () => {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    return <></>;
};

export default FixScrollBug;
