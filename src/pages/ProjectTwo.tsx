import '../All.css'
import PageHero from '../templates/PageHero'
import ProjectSidebar from '../templates/ProjectSidebar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

// Template project page — mirrors the section patterns used on Project One:
// a PageHero image, a sidebar (Year/Skills/Tools/Links), a text-only overview,
// then repeating "ContentSection + a side-by-side photo row below it" blocks.
export default function ProjectTwo() {
    return (
        <>
            <PageHero
                title="Project Two Title"
                summary="A one-sentence summary of the project that expands on the homepage card description."
                image={{ src: asset("/project-two/cover.svg"), caption: "Replace with a hero photo of the project.", width: "95%" }}
            />

            <div className="project-columns">
                <ProjectSidebar
                    year="2026"
                    skills={["Skill A", "Skill B", "Skill C"]}
                    tools={["Tool A", "Tool B"]}
                />
                <div className="project-body">

                    <ContentSection
                        tightTop
                        heading="Project Overview"
                        body={[
                            "Paragraph one: what the project is, why it exists, and what problem it solves.",
                            "Paragraph two: your specific role, the team (if any), and the outcome you achieved."
                        ]}
                    />

                    <ContentSection
                        heading="Section Two Title"
                        body={[
                            "Describe the first major phase of work here — e.g. research, design, or initial prototyping.",
                            "Add a second paragraph with more detail: decisions made, tools used, or challenges encountered."
                        ]}
                        stackImages
                        tightBottom
                        images={[
                            { src: asset("/project-two/detail-1.svg"), caption: "Placeholder — swap in a real photo.", framed: false, width: "85%", natural: true },
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px', paddingBottom: '52px' }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-two/detail-1.svg")} alt="Placeholder photo one" />
                                    </div>
                                </div>
                                <figcaption>Placeholder — swap in a real photo.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-two/cover.svg")} alt="Placeholder photo two" />
                                    </div>
                                </div>
                                <figcaption>Placeholder — swap in a real photo.</figcaption>
                            </figure>
                        </div>
                    </section>

                    <ContentSection
                        tightBottom
                        heading="Section Three Title"
                        body={[
                            "Describe the next phase of the project — e.g. implementation, testing, or iteration.",
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '32px' }}>
                        <figure className="content-section-figure content-section-figure--plain">
                            <div className="flex gap-4">
                                <div style={{ flex: 1 }}>
                                    <div className="media-plain" style={{ width: '100%' }}>
                                        <div className="frame-photo frame-photo--natural">
                                            <img src={asset("/project-two/detail-1.svg")} alt="Placeholder photo three" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div className="media-plain" style={{ width: '100%' }}>
                                        <div className="frame-photo frame-photo--natural">
                                            <img src={asset("/project-two/cover.svg")} alt="Placeholder photo four" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <figcaption>Shared caption describing both photos above.</figcaption>
                        </figure>
                    </section>

                    <ContentSection
                        tightBottom
                        heading="Section Four Title"
                        body={[
                            "Wrap up with results, what you learned, or what you'd do differently next time.",
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px' }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-two/detail-1.svg")} alt="Placeholder photo five" />
                                    </div>
                                </div>
                                <figcaption>Placeholder — swap in a real photo.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-two/cover.svg")} alt="Placeholder photo six" />
                                    </div>
                                </div>
                                <figcaption>Placeholder — swap in a real photo.</figcaption>
                            </figure>
                        </div>
                    </section>

                </div>
            </div>

            <ProjectNav
                prev={{ title: "Project One Title", path: "/project-one" }}
            />
        </>
    )
}
