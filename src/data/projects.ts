import { asset } from '../lib/asset'

export interface Project {
    no: string;
    category: string;
    desktopName: string;
    mobileName: string;
    /** Optional bold text shown before the description (e.g. an award). */
    descriptionLead?: string;
    description: string;
    toolsUsed: string[];
    skillsLearned: string[];
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
        description:
            "One or two sentences describing what this project is and the outcome you achieved.",
        toolsUsed: ["Tool A", "Tool B", "Tool C"],
        skillsLearned: ["Skill A", "Skill B"],
        imageSrc: asset("/project-one/ava-stand.jpg"),
        imagePosition: "center 35%",
        path: "/project-one",
    },
    {
        no: "02",
        category: "Category Two",
        desktopName: "Project Two Title",
        mobileName: "Project Two Title",
        descriptionLead: "Optional award or headline callout",
        description:
            "One or two sentences describing what this project is and the outcome you achieved.",
        toolsUsed: ["Tool D", "Tool E"],
        skillsLearned: ["Skill C", "Skill D"],
        imageSrc: asset("/project-two/cover.svg"),
        path: "/project-two",
    },
];

export default projects;
