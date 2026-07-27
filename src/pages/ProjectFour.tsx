import '../All.css'
import PageHero from '../templates/PageHero'
import ProjectSidebar from '../templates/ProjectSidebar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

// Template project page — copy this file to start a new project. See ProjectTwo.tsx
// for an example of the same structure filled in with real content.
export default function ProjectFour() {
    return (
        <>
            <PageHero
                title="Barbie Powerwheels Go-Kart"
                summary="Using a Powerwheels Barbie Jeep body, I built a custom full suspension tube frame. The chassis features a 10 hp engine with a front engine rear wheel drive configuration."
                image={{ src: asset("/project-four/barbiejeep.jpg"), caption: "Completed Go Kart.", width: "95%" }}
            />

            <div className="project-columns">
                <ProjectSidebar
                    year="2024"
                    skills={["Mig Welding", "Engine Modification"]}
                    tools={["Angle Grinder", "Mig Welder", "Torque Wrench"]}
                    links={[{ label: "Go Kart in action", url: "https://www.youtube.com/shorts/Z1wya_GssTo" }]}
                />
                <div className="project-body">

                    <ContentSection
                        tightTop
                        heading="Project Photos"
                        body={[
                            "While I was a teenager I was a huge fan of the YouTube channel Grind Hard Plumbing Co. They built of a lot of cool vehicles including Powerwheel Go-Karts. Inspired by them, I decided to buid my own. Check out the build photos below:"
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                            <figure className="content-section-figure content-section-figure--plain">
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-four/engine-bay-expansion.webp")} alt="Go-kart build photo one" />
                                    </div>
                                </div>
                                <figcaption>Finalized engine bay.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain">
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo" style={{ aspectRatio: '750 / 562' }}>
                                        <img src={asset("/project-four/finished-frame.webp")} alt="Go-kart build photo two" />
                                    </div>
                                </div>
                                <figcaption>Completed Frame.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain">
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-four/painted-a-arms.webp")} alt="Go-kart build photo three" />
                                    </div>
                                </div>
                                <figcaption>Painted A Arms.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain">
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-four/painted-swing-arm.webp")} alt="Go-kart build photo four" />
                                    </div>
                                </div>
                                <figcaption>Painted Swing Arm.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain">
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-four/painted-frame.webp")} alt="Go-kart build photo five" />
                                    </div>
                                </div>
                                <figcaption>Painted and assmebled frame.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain">
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-four/drive-mechanism.webp")} alt="Go-kart build photo six" />
                                    </div>
                                </div>
                                <figcaption>The jackshaft to transfer power to rear wheels.</figcaption>
                            </figure>
                        </div>
                    </section>

                    <section className="content-section" style={{ paddingTop: '20px' }}>
                        <figure className="content-section-figure content-section-figure--plain">
                            <div className="media-plain" style={{ width: '50%' }}>
                                <div className="frame-photo frame-photo--natural">
                                    <img src={asset("/project-four/compeleted.jpg")} alt="Completed go-kart" />
                                </div>
                            </div>
                            <figcaption>The completed go-kart minus Powerwheels body.</figcaption>
                        </figure>
                    </section>

                </div>
            </div>

            <ProjectNav
                prev={{ title: "Yamaha EV Conversion", path: "/yamaha-conversion" }}
                next={{ title: "WPI Robotics", path: "/wpi-robotics" }}
            />
        </>
    )
}
