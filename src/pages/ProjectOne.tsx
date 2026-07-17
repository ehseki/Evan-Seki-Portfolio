import '../All.css'
import PageHero from '../templates/PageHero'
import SpecBar from '../templates/SpecBar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'

export default function ProjectOne() {
    return (
        <>
            <PageHero
                category="Category One"
                title="Project One Title"
                summary="A one-sentence summary of the project that expands on the homepage card description."
            />

            <SpecBar
                tools={["Tool A", "Tool B", "Tool C"]}
                skills={["Skill A", "Skill B"]}
            />

            <div className="page-body">
                <ContentSection
                    heading="Project Overview"
                    body={[
                        "Paragraph one: what the project is, why it exists, and what problem it solves.",
                        "Paragraph two: your specific role and the key technical decisions you made."
                    ]}
                    image={{ src: "/project-one/detail-1.svg", caption: "Replace with a real photo, diagram, or screenshot." }}
                />

                <ContentSection
                    callout
                    body="Use a callout section like this to pull out one key result or takeaway."
                />

                <ContentSection
                    heading="Another Section"
                    body="Add as many ContentSection blocks as you need — each can hold text, an image, an image gallery, or an embedded video."
                    imageLeft
                    image={{ src: "/project-one/detail-1.svg" }}
                />
            </div>

            <ProjectNav
                next={{ title: "Project Two Title", path: "/project-two" }}
            />
        </>
    )
}
