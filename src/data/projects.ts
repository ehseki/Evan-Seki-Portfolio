import { asset } from '../lib/asset'

export interface Project {
    desktopName: string;
    imageSrc: string;
    /** CSS object-position for the homepage tile image, e.g. "center 80%" to show more of the bottom. Defaults to centered. */
    imagePosition?: string;
    path?: string;
}

// Add one entry here per project. Each entry drives one card on the
// homepage grid, linking through to a matching page in `src/pages/`.
const projects: Project[] = [
    {
        desktopName: "Embodied AI: Humanoid Robot for Bipedal Locomotion",
        imageSrc: asset("/project-one/ava-stand.jpg"),
        imagePosition: "center 0%",
        path: "/embodied-ai",
    },
    {
        desktopName: "Cephla",
        imageSrc: asset("/project-two/cephla.png"),
        path: "/cephla",
    },
    {
        desktopName: "Yamaha TTR-125 EV Conversion",
        imageSrc: asset("/project-three/yamaha-drivetrain.jpeg"),
        path: "/yamaha-conversion",
    },
    {
        desktopName: "The Barbie Kart",
        imageSrc: asset("/project-four/barbiejeep.jpg"),
        path: "/barbie-kart",
    },
    {
        desktopName: "WPI Robotics",
        imageSrc: asset("/project-five/2001-robot.webp"),
        path: "/wpi-robotics",
    },
    {
        desktopName: "Plants Restoring Wairarap Moana",
        imageSrc: asset("/project-six/wairarapa-cover.JPG"),
        path: "/wairarapa",
    },
];

export default projects;
