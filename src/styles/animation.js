export const iconVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 0.7,
        transition: {
            duration: 1.1,
            delay: 3,
        },
    },
    hover: {
        opacity: 1,
        scale: 1.2,
    },
};

export const redPlanetVariants = {
    hidden: {
        rotate: 45,
    },
    show: {
        rotate: 0,
        transition: {
            type: "spring",
            duration: 2.5,
        },
    },
    exit: {
        rotate: 45,
        transition: {
            type: "tween",
            duration: 0.7,
        },
    },
};

export const bluePlanetInVariants = {
    hidden: {
        rotate: -44,
    },
    show: {
        rotate: 0,
        transition: {
            type: "spring",
            duration: 3,
        },
    },
    exit: {
        rotate: -44,
        transition: {
            type: "tween",
            duration: 0.7,
        },
    },
};

export const purplePlanetVariants = {
    hidden: {
        left: "140vw",
    },
    show: {
        left: "7vw",
        transition: {
            type: "spring",
            duration: 1.8,
        },
    },
    exit: {
        left: "140vw",
        transition: {
            type: "tween",
            duration: 1,
        },
    },
};

export const contactInfoVariants = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 0.8,
        y: 0,
        transition: {
            type: "tween",
            duration: 1,
            delay: 2,
        },
    },
    hover: {
        scale: 1.2,
        opacity: 1,
    },
    exit: {
        x: 100,
        opacity: 0,
        transition: {
            type: "tween",
            duration: 0.2,
        },
    },
};
