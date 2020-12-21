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
            duration: 3,
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
