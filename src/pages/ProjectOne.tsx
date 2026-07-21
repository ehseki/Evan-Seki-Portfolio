import '../All.css'
import PageHero from '../templates/PageHero'
import ProjectSidebar from '../templates/ProjectSidebar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

export default function ProjectOne() {
    return (
        <>
            <PageHero
                title="Embodied AI: Humanoid Robot for Bipedal Locomotion"
                summary="This project was my senior capstone, or Major Qualifying Project (MQP), at WPI. I worked with four teammates to achieve the goal of creating a robotics platform capable of bipedal locomotion. I was personally responsible for redesigning the robot's lower body, creating sensor libraries for the robots firmware, and optimizing the robot's electrical system."
                image={{ src: asset("/project-one/ava-stand.jpg"), caption: "Ava standing via a hard-coded zero positon.", width: "95%" }}
            />

            <div className="project-columns">
                <ProjectSidebar
                    year="2026"
                    skills={["CAD", "GD&T", "DMFA", "FEA", "FDM 3D Printing", "SLA 3D Printing", "Topology", "Soldering", "Firmware Design"]}
                    tools={["SOLIDWORKS", "C++", "Arduino"]}
                     links={[{ label: "Final Paper", url: "https://digital.wpi.edu/concern/student_works/qj72pc618" },
                             { label: "Project GitHub", url: "https://github.com/KoalbyMQP" }]}
                />
                <div className="project-body">

            <ContentSection
                tightTop
                heading="Project Overview"
                body={[
                    "This project builds on prior MQPs completed under the same advisor's supervision. The humanoid robot, named Ava, stands one meter tall and combines servo motors with 3D-printed links to lower the cost of the robotics platform, with the goal of eventual deployment as a nursing assistant in a senior living facility.",
                    "Our team's central goal was to use a reinforcement learning model to generate a robust walking gait for the physical robot. Achieving this required improvements across the platform: the robot's structure needed to be redesigned for greater strength, its electrical harness rebuilt for improved reliability, and its firmware optimized to support the responsiveness demanded by the walking controller."]}
            />

            <ContentSection
                heading="Mechanical Redesigns"
                body={[
                    "When we first received the robot, its mechanical condition was in rough shape. Many of the robotic links showed signs of excessive wear such as creep and cracking. Moreover, after remanufacturing the links the lack of consistent hardware and accurate CAD models led to difficulties assembling the robot. Our team concluded that the robot simply would not be able to support our goal of reliable bipedal locomotion and that major mechanical redesigns were required.",
                    "When redesigning Ava our team had two main focuses: proper DMFA (design for manufacturing and assembly) and structural optimization. In regard to DMFA, our team utilized a top down assembly approach to organize our workflow. We used the position of the motors to drive the base geometry of the robotic links. This approached allowed for proper fitment as we were able to use tools such as interference detection to ensure correct tolerancing. The base parts were then optimized for strength and weight using a topology study. This study was used as a guide to show where material could be removed. The finalized parts were then validated through a finite element analysis. Through our teams redesigns, the total weight of Ava was reduced by 5.11% and the stegnth increased by just over 20% (Von Mises Stress Criterion)."  
                ]}
                stackImages
                tightBottom
                images={[
                    { src: asset("/project-one/complete-robot-cad.png"), caption: "Finalized CAD.", framed: false, width: "85%", natural: true },
                ]}
            />

            <section className="content-section" style={{ paddingTop: '20px', paddingBottom: '52px' }}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                        <div className="media-plain" style={{ width: '100%' }}>
                            <div className="frame-photo frame-photo--natural">
                                <img src={asset("/project-one/thigh-redesign-process.png")} alt="Thigh redesign process" />
                            </div>
                        </div>
                        <figcaption style={{ whiteSpace: 'nowrap' }}>Thigh redesign showing Topology Optimization and FEA validation.</figcaption>
                    </figure>
                    <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                        <div className="media-plain" style={{ width: '100%' }}>
                            <div className="frame-photo frame-photo--natural">
                                <img src={asset("/project-one/calf-redesign-process.png")} alt="Calf redesign process" />
                            </div>
                        </div>
                        <figcaption>Calf redesign showing Topology Optimization and FEA validation.</figcaption>
                    </figure>
                </div>
            </section>

            <ContentSection
                tightBottom
                heading="Electrcical Harness"
                body={[
                    "When redesigning the electrical harness for Ava, our team had two main focuses: connection robustness and failure-point reduction. In regard to robustness, we replaced the 2-to-4 connector blocks with soldered parallel joints, using XT-60 connectors to preserve the harness's modularity while eliminating the intermittent disconnections seen before. We also added a dedicated secondary battery pack for the Raspberry Pi and Teensy to prevent current surges from damaging those components during power-up. In regard to reducing failure points, we split the single communication bus carrying all 25 motors into five separate buses — one each for the legs, arms, and torso — allowing each section to be powered and tested independently, which made it far easier to isolate and troubleshoot connectivity issues. We also routed and bundled all wiring closely along the robot's frame to further cut down on potential points of failure. Together, these changes created a robust and reliable wiring harness."
                ]}
            />

            <section className="content-section" style={{ paddingTop: '32px' }}>
                <figure className="content-section-figure content-section-figure--plain">
                    <div className="flex gap-4">
                        <div style={{ flex: 1 }}>
                            <div className="media-plain" style={{ width: '100%' }}>
                                <div className="frame-photo frame-photo--natural">
                                    <img src={asset("/project-one/ava-electrical-harness.jpg")} alt="Ava electrical harness" />
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className="media-plain" style={{ width: '100%' }}>
                                <div className="frame-photo frame-photo--natural">
                                    <img src={asset("/project-one/ava-breaker.JPG")} alt="Ava breaker" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <figcaption>Both photos display the wiring harness created for Ava.</figcaption>
                </figure>
            </section>

            <ContentSection
                tightBottom
                heading="Firware Implementation"
                body={[
                    "Similar to the mechanical state, the firmware we received was in poor shape. After testing it and speaking with the previous team, our team concluded it would not have been suitable for our application largely due to its high latency. Moreover, the software was tightly coupled and difficult to build on, lacking the modularity and clear interfaces needed to reliably control the robot's motors. Our team set out to redesign the architecture to create firmware that could support our goal of bipedal locomotion.",
                    "When building the firmware for Ava, our team had two main focuses: low latency and clean modularity. In regard to latency, we aimed for a sub 10 ms communication loop. To do this, we adopted a multi-serial-bus approach to control and communicate with the motors. This change increased data throughput. We also upgraded our microprocessor from an Arduino MEGA2560 to a Teensy 4.1, giving us more compute power and RAM in addition to the extra communication buses. To make the firmware easier to work with, we broke it into four separate building blocks — RPIComs, SerialBusManager, HerkulexMotor, and Herkulex — each handling its own specific job. Only a few of these pieces are visible to whoever is writing the higher-level code, which keeps things simple and hides the messy details of talking to the motors. Combining this with the multi-channel communication setup brought the round trip communication time down 6.94 ms, perfect for real time locomotion."
                ]}
            />

            <section className="content-section" style={{ paddingTop: '20px' }}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1 }}>
                        <div className="media-plain" style={{ width: '100%' }}>
                            <div className="frame-photo frame-photo--natural">
                                <img src={asset("/project-one/communication-cycle.png")} alt="Complete communication cycle" />
                            </div>
                        </div>
                        <figcaption>Complete communication cycle.</figcaption>
                    </figure>
                    <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1 }}>
                        <div className="media-plain" style={{ width: '100%' }}>
                            <div className="frame-photo frame-photo--natural">
                                <img src={asset("/project-one/teensy-uml.png")} alt="Firmware UML Diagram" />
                            </div>
                        </div>
                        <figcaption>Firmware UML Diagram.</figcaption>
                    </figure>
                </div>
            </section>


                </div>
            </div>

            <ProjectNav
                next={{ title: "Project Two Title", path: "/project-two" }}
            />
        </>
    )
}
