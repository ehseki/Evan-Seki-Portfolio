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
    path?: string;
}

// Add one entry here per project. Each entry drives one card on the
// homepage grid, linking through to a matching page in `src/pages/`.
const projects: Project[] = [
    {
        no: "01",
        category: "Category One",
        desktopName: "Project One Title",
        mobileName: "Project One Title",
        description:
            "One or two sentences describing what this project is and the outcome you achieved.",
        toolsUsed: ["Tool A", "Tool B", "Tool C"],
        skillsLearned: ["Skill A", "Skill B"],
        imageSrc: "/project-one/cover.svg",
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
        imageSrc: "/project-two/cover.svg",
        path: "/project-two",
    },
];

export default projects;
