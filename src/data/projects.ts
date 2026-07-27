import { asset } from '../lib/asset'

export interface Project {
    no: string;
    category: string;
    desktopName: string;
    mobileName: string;
    /** Optional bold text shown before the description (e.g. an award). */
    imageSrc: string;
    /** CSS object-position for the homepage tile image, e.g. "center 80%" to show more of the bottom. Defaults to centered. */
    imagePosition?: string;
    path?: string;
}

// Add one entry here per project. Each entry drives one card on the
// homepage grid, linking through to a matching page in `src/pages/`.
const projects: Project[] = [
    {
        no: "01",
        category: "Category One",
        desktopName: "Embodied AI: Humanoid Robot for Bipedal Locomotion",
        mobileName: "Embodied AI: Humanoid Robot for Bipedal Locomotion",
        imageSrc: asset("/project-one/ava-stand.jpg"),
        imagePosition: "center 0%",
        path: "/embodied-ai",
    },
    {
        no: "02",
        category: "Category Two",
        desktopName: "Cephla",
        mobileName: "Cephla",
        imageSrc: asset("/project-two/cephla.png"),
        path: "/cephla",
    },
    {
        no: "03",
        category: "Category Three",
        desktopName: "Yamaha TTR-125 EV Conversion",
        mobileName: "Yamaha TTR-125 EV Conversion",
        imageSrc: asset("/project-three/yamaha-drivetrain.jpeg"),
        path: "/yamaha-conversion",
    },
    {
        no: "04",
        category: "Category Four",
        desktopName: "The Barbie Kart",
        mobileName: "The Barbie Kart",
        imageSrc: asset("/project-four/barbiejeep.jpg"),
        path: "/barbie-kart",
    },
    {
        no: "05",
        category: "Category Five",
        desktopName: "WPI Robotics",
        mobileName: "WPI Robotics",
        imageSrc: asset("/project-five/2001-robot.webp"),
        path: "/wpi-robotics",
    },
    {
        no: "06",
        category: "Category Six",
        desktopName: "Plants Restoring Wairarap Moana",
        mobileName: "Plants Restoring Wairarap Moana",
        imageSrc: asset("/project-six/wairarapa-cover.JPG"),
        path: "/wairarapa",
    },
];

export default projects;
