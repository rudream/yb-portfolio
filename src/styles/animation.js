export const iconVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 0.6,
        transition: {
            duration: 1.1,
            delay: 3,
        },
    },
    hover: {
        opacity: 1,
        scale: 1.1,
        transition: {
            duration: 0.1,
            type: "tween",
        },
    },
};

export const redPlanetVariants = {
    hidden: {
        rotate: 50,
    },
    show: {
        rotate: 0,
        transition: {
            type: "spring",
            duration: 3.2,
        },
    },
    exit: {
        rotate: -50,
        transition: {
            type: "tween",
            duration: 2,
        },
    },
};

export const bluePlanetInVariants = {
    hidden: {
        rotate: -50,
    },
    show: {
        rotate: 0,
        transition: {
            type: "spring",
            duration: 3.2,
        },
    },
};
