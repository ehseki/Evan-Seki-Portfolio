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
                title=""
                summary="Cephla is a lab automation company based out of Mountain View, California. They are most known for their robotic microscopes and open source software. I started working as a Mechanical Engineering Intern in March of 2025. I now work here full time as a Mechanical Engineer."
                image={{ src: asset("/project-two/cephla-logo.jpg"), width: "60%" }}
                gap="0px"
            />

            <div className="project-columns">
                <ProjectSidebar
                    role="Mechanical Engineer"
                    skills={["CAD", "GD&T", "FDM 3D Printing", "2D Engineering Drawings", "Soldering", "Project Managment", "PDM"]}
                    tools={["SOLIDWORKS", "Python", "GitHub", "C++"]}
                    links={[{ label: "Company Website", url: "https://www.cephla.com/" }
                             ]}
                />
                <div className="project-body">

                    <ContentSection
                        tightTop
                        heading="Role Overview"
                        body={[
                            "When I started working at Cephla I was soley focused on mechanical design, hardware production, and deployment. I created hardware solution to automate various lab processes. I have worked on a variety of projects, anything from high precision microscope components, to complex assemblies for microscope accessories. After graduating, I transistioned to a full time engineer. Now, in addition to mechanical design, I manage a team of interns and I am working on creating a proper PDM infastructure for the company. Check out some of the projects I have worked on below."
                        ]}
                    />

                    <ContentSection
                        tightBottom
                        heading="Lens Adapter"
                        body={[
                            "In microscopy, liquid immersion is a common technique used to increase resolution without changing objectives. By replacing the air gap between the sample and the lens with a medium of higher refractive index such as water or oil, the objective's numerical apeture is increased, resulting in a greater resolution. Shown below is a lens adapter and pump module I designed to enable controlled dispensing of the immersion fluid. ",
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px', paddingBottom: '52px' }}>
                        <div className="flex flex-col sm:flex-row gap-1">
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: 'fit-content', margin: '0 auto' }}>
                                    <div className="frame-photo frame-photo--natural" style={{ height: '340px', width: 'fit-content', background: 'transparent' }}>
                                        <img src={asset("/project-two/Lense-Adapter.png")} alt="Placeholder photo one" style={{ height: '100%', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                                <figcaption>Lens Adapter.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: 'fit-content', margin: '0 auto' }}>
                                    <div className="frame-photo frame-photo--natural" style={{ height: '340px', width: 'fit-content', background: 'transparent' }}>
                                        <img src={asset("/project-two/Pump-system.png")} alt="Placeholder photo two" style={{ height: '100%', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                                <figcaption>Pump Module.</figcaption>
                            </figure>
                        </div>
                    </section>

                </div>
            </div>

            <ProjectNav
                prev={{ title: "Embodied AI", path: "/embodied-ai" }}
                next={{ title: "Yamaha EV conversion", path: "/yamaha-conversion" }}
            />
        </>
    )
}
