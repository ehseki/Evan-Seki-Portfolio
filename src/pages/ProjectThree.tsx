import '../All.css'
import PageHero from '../templates/PageHero'
import ProjectSidebar from '../templates/ProjectSidebar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

// Template project page — copy this file to start a new project. See ProjectTwo.tsx
// for an example of the same structure filled in with real content.
export default function ProjectThree() {
    return (
        <>
            <PageHero
                title="Yamaha TTR-125 Electric Vehicle Conversion"
                summary="For this project I aim to create a street legal commuter vehicle that can keep up with the flow of traffic on every public road apart from highways."
                image={{ src: asset("/project-three/Yamaha-mechanically-finished.jpg"), caption: "Mark 1 of the conversion mechanically finished.", width: "95%" }}
            />

            <div className="project-columns">
                <ProjectSidebar
                    year="2026"
                    skills={["Topology", "CAD", "FEA", "Battery Building", "Soldering", "FDM 3D Printing"]}
                    tools={["SOLIDWORKS"]}
                />
                <div className="project-body">

                    <ContentSection
                        tightTop
                        heading="Project Overview"
                        body={[
                            "During the summer of 2025 I completed a working prototype of the conversion. I was able to ride the bike around the block displaying a working drivetrain and electrcial system. I have since dismattled the prototype as I am overhauling the bike's mechanical features. However, the battery packs I designed have proven effective and will remain in use."
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px', paddingBottom: '52px' }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-three/yamaha-mark1-cad.webp")} alt="Mark 1 completed CAD." />
                                    </div>
                                </div>
                                <figcaption>Mark 1 completed CAD.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo" style={{ aspectRatio: '888 / 802' }}>
                                        <img src={asset("/project-three/yamaha-no-battery.webp")} alt="Mark 1 completed bike without battery." />
                                    </div>
                                </div>
                                <figcaption>Mark 1 completed bike without battery.</figcaption>
                            </figure>
                        </div>
                    </section>

                    <section className="content-section" style={{ paddingTop: '20px', paddingBottom: '52px' }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo frame-photo--natural">
                                        <img src={asset("/project-three/battery-cad.png")} alt="Battery pack in CAD without accessories." />
                                    </div>
                                </div>
                                <figcaption>Battery pack in CAD without accessories.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo" style={{ aspectRatio: '780 / 1060' }}>
                                        <img src={asset("/project-three/compressed.webp")} alt="Assembled battery pack without accessories." />
                                    </div>
                                </div>
                                <figcaption>Assembled battery pack without accessories.</figcaption>
                            </figure>
                            
                        </div>
                        
                    </section>

                    <section className="content-section" style={{ paddingTop: '4px' }}>
                        <p style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', margin: 0 }}>
                            More updates to come!
                        </p>
                    </section>

                </div>
            </div>

            <ProjectNav
                prev={{ title: "Cephla", path: "/cephla" }}
                next={{ title: "The Barbie Kart", path: "/barbie-kart" }}
            />
        </>
    )
}
