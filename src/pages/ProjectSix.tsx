import '../All.css'
import PageHero from '../templates/PageHero'
import ProjectSidebar from '../templates/ProjectSidebar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

// Template project page — copy this file to start a new project. See ProjectTwo.tsx
// for an example of the same structure filled in with real content.
export default function ProjectSix() {
    return (
        <>
            <PageHero
                title="Plants Restoring Wairarapa Moana"
                summary="During my junior year at WPI I spent two months abroad in Aotearoa New Zealand completing my Interactive Qualifying Project (IQP). During this time my team and I created a documentary investing the cultural value of the Wairarapa wetlands."
                image={{ src: asset("/project-six/wairarapa-team.jpg"), caption: "The project team with our collaborator Ian.", width: "95%" }}
            />

            <div className="project-columns">
                <ProjectSidebar
                    year="2025"
                    skills={["Interviewing", "Editing", "Fieldwork"]}
                    tools={["Davinic Resolve", "Lavalier Mics", "Filming Equiptment"]}
                    links={[{ label: "Final Paper", url: "https://digital.wpi.edu/concern/student_works/np193f156?locale=en" }]}
                />
                <div className="project-body">

                    <ContentSection
                        tightTop
                        heading="Nga Mihi (Welcome)"
                        body={[
                            "While I was abroad, I had the opportunity to learn about the cultural and economic significance of Wairarapa Moana, a wetland located about an hour and a half northeast of the country's capital, Wellington. The wetland supports a wide range of communities: some hold deep spiritual ties to the land and sea as a connection to their ancestors, others depend on its rich soil to farm and make a living. For some the needs overlap, and they depend on the region for both. ",
                            "When our team first arrived we had a pre-conceived notion of what our project would be. We were going to conduct interviews for the purpose of building a documentary that captured how plants were being used in restoration efforts. It was not until we arrived and started to engage with the locals, that we began to grasp the importance of the region. Through site exploration, interviews, and hearing stories not only did we create a documentary, but we built personal connections to the land and sea. The time I spent in New Zealand and the memories I created are ones that I will cherish for the rest of my life. I am truly grateful to have had the opportunity to travel abroad and immerse myself in New Zealand's culture. If you are interested, our final documentary is linked below. Please enjoy. "
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '4px' }}>
                        <figure className="content-section-figure">
                            <div style={{ width: '97.5%', margin: '0 auto' }}>
                                <div className="frame-video">
                                    <iframe
                                        src="https://www.youtube.com/embed/p71G0YiaUX0"
                                        title="Wairarapa Moana Documentary"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </figure>
                    </section>

                    <ContentSection
                        heading="Presidents Award"
                        body={[
                            "The President's IQP Award is WPI's way of recognizing the best Interactive Qualifying Project completed each year. Out of the ~70 IQP projects submitted for consideration, our project was selected as one of five finalist. In January of 2026, we presented our work to a panel of judges that included the university president. After a day of listening to the other amazing finalist we were selected as one of two winning groups."
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px', paddingBottom: '52px' }}>
                        <figure className="content-section-figure content-section-figure--plain">
                            <div className="media-plain" style={{ width: '70%' }}>
                                <div className="frame-photo frame-photo--natural">
                                    <img src={asset("/project-six/award.png")} alt="Thigh and calf redesign process" />
                                </div>
                            </div>
                            <figcaption>Team accepting the award.</figcaption>
                        </figure>
                    </section>
                </div>
            </div>

            <ProjectNav
                prev={{ title: "WPI Robotics", path: "/wpi-robotics" }}
            />
        </>
    )
}
