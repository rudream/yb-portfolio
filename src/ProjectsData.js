import colorpalette from "./img/screenshots/colorpalette.png";
import colorpalette2 from "./img/screenshots/colorpalette2.png";
import gamezilla from "./img/screenshots/gamezilla.png";
import gamezilla2 from "./img/screenshots/gamezilla2.png";
import kbphotography from "./img/screenshots/kbphotography.png";
import kbphotography2 from "./img/screenshots/kbphotography2.png";
import studyplayer from "./img/screenshots/studyplayer.png";
import studyplayer2 from "./img/screenshots/studyplayer2.png";

export const ProjectsData = () => {
    return {
        gamezilla: {
            img: gamezilla,
            imgTwo: gamezilla2,
            name: "GameZilla",
            live: "https://gamezilla-53154.web.app/",
            code: "https://github.com/rudream/gamezilla",
            desc:
                "Browse through thousands of games and save them to your account library.",
            techs: ["React", "Redux", "Firebase", "JavaScript"],
            features: [
                {
                    title: "Discover",
                    info:
                        "Browse through popular games or search for your own among thousands of selections.",
                },
                {
                    title: "Add To Library",
                    info:
                        "Sign up for an account and save as many games as you want to your library stored in our database.",
                },
                {
                    title: "Learn",
                    info:
                        "Read details about every game including the description, ratings, platforms, and in-game screenshots.",
                },
            ],
        },
        colorpalette: {
            img: colorpalette,
            imgTwo: colorpalette2,
            name: "Color Palette Maker",
            live: "https://rudream.github.io/Color-Palette-Maker/",
            code: "https://github.com/rudream/Color-Palette-Maker",
            desc:
                "Generate and tweak color palettes to add them to your collection.",
            techs: ["JavaScript", "CSS", "HTML"],
            features: [
                {
                    title: "Randomize & Lock",
                    info: "Generate random colors and lock the ones you like!",
                },
                {
                    title: "Adjust",
                    info:
                        "Change the brightness, hue and saturation of any color you wish.",
                },
                {
                    title: "Save A Palette",
                    info:
                        "Save all the color palettes you generate to your library so you can easily access them later!",
                },
            ],
        },
        studyplayer: {
            img: studyplayer,
            imgTwo: studyplayer2,
            name: "Study Player",
            live: "https://rudream.github.io/Study-Music-Player/",
            code: "https://github.com/rudream/Study-Music-Player",
            desc:
                "A sleek music player featuring a collection of music perfect for studying and relaxing.",
            techs: ["React", "JavaScript", "SCSS"],
            features: [
                {
                    title: "Great Songs",
                    info:
                        "Listen through a curated playlist of 20 incredible relaxing, and non-distracting songs to help you focus.",
                },
                {
                    title: "Shuffle & Replay",
                    info:
                        "Randomize the next song in the playlist, or keep listening to this one on repeat.",
                },
                {
                    title: "Library",
                    info:
                        "Find and select the song you want to listen to straight from the easy-to-use library.",
                },
            ],
        },
        kbphotography: {
            img: kbphotography,
            imgTwo: kbphotography2,
            name: "Personal Portfolio",
            live: "http://www.karimboun.ca/",
            code: "https://github.com/rudream/KB-Photography",
            desc: "Portfolio website for a Software Engineer and Photographer.",
            techs: ["React", "JavaScript", "CSS"],
            features: [
                {
                    title: "Minimalist Design",
                    info: "Everything you want to see within a click's reach.",
                },
                {
                    title: "Galleries",
                    info:
                        "Easily browse through catalogues of stunning photos.",
                },
                {
                    title: "Animations",
                    info:
                        "Page transitions and effects for a seamless experience.",
                },
            ],
        },
    };
};

export default ProjectsData;
