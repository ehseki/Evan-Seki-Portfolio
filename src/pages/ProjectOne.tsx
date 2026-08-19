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
                summary="This project was my senior capstone, or Major Qualifying Project (MQP), at WPI. I worked with four teammates to achieve the goal of creating a robotics platform capable of bipedal locomotion. I was personally responsible for redesigning the robot's lower body, constructing the robot's electrical harness, and creating sensor libraries for the robot's firmware."
                image={{ src: asset("/project-one/ava-stand.jpg"), caption: "Ava standing via a hard-coded zero positon.", width: "95%" }}
            />

            <div className="project-columns">
                <ProjectSidebar
                    year="2026"
                    skills={["CAD", "GD&T", "DFMA", "FEA", "FDM 3D Printing", "SLA 3D Printing", "Topology", "Soldering", "Firmware Design", "Circuit Design"]}
                    tools={["SOLIDWORKS", "C++", "Arduino", "GitHub"]}
                    links={[{ label: "Final Paper", url: "https://digital.wpi.edu/concern/student_works/qj72pc618" },
                             { label: "Project Repo", url: "https://github.com/KoalbyMQP" }]}
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
                    "When redesigning Ava our team had two main focuses: proper DFMA (design for manufacturing and assembly) and structural optimization. In regard to DFMA, our team utilized a top down assembly approach to organize our workflow. We used the position of the motors to drive the base geometry of the robotic links. This approached allowed for proper fitment as we were able to use tools such as interference detection to ensure correct GD&T (Geometric Dimensioning and Tolerancing). The base parts were then optimized for strength and weight using a topology study. This study was used as a guide to show where material could be removed. The finalized parts were then validated through a finite element analysis. Through our teams redesigns, the total weight of Ava was reduced by 5.11% and the stegnth increased by just over 20% (Von Mises Stress Criterion)."  
                ]}
                stackImages
                tightBottom
                images={[
                    { src: asset("/project-one/complete-robot-cad.png"), caption: "Finalized CAD.", framed: false, width: "85%", natural: true },
                ]}
            />

            <section className="content-section" style={{ paddingTop: '20px', paddingBottom: '52px' }}>
                <figure className="content-section-figure content-section-figure--plain">
                    <div className="media-plain" style={{ width: '100%' }}>
                        <div className="frame-photo frame-photo--natural">
                            <img src={asset("/project-one/calf-and-thigh.png")} alt="Thigh and calf redesign process" />
                        </div>
                    </div>
                    <figcaption>Thigh and calf redesign showing Topology Optimization and FEA validation.</figcaption>
                </figure>
            </section>

            <ContentSection
                tightBottom
                heading="Electrical Harness"
                body={[
                    "When redesigning the electrical harness for Ava, our team had two main focuses: connection robustness and failure-point reduction. In regard to robustness, the previous project team utilized 2-to-4 connector blocks to distribute power. While effective for prototyping, they proved unreliable during dynamic motion such as bipedal locomotion as the previous team had experienced issues with the reliability of the power distribution. I rebuilt the harness utilizing  XT-60 connectors, preserving the harness's modularity and eliminating the inconsistent power connections.",
                    "Another reliablity issue that the previous team faced was during the intial power-up phase. The previous circuit design had one power pack for the low voltage processing components (Raspberry Pi and Teensy Microcontroller) and the robot's actuators. As a result, there was a large surge of current during the intialization phase damaging the processing components. To solve this issue, a secondary battery pack was added for the Raspberry Pi and Teensy, thus preventing current surges during initialization.",
                    "In regard to reducing failure points, the prior team had one communication bus for all 25 motors. This meant if one motor failed to connect, all subsecuent motors in the communication chain also failed to connect. To combat this problem, the communication bus was split into five separate buses — one each for the legs, arms, and torso — reducing how many motors would be affected by a disconnection. Additionally this decision made it far easier to isolate and troubleshoot connectivity issues. Combining these changes with proper wire routing and managment resulted in a reliable harness that had 0 connectivity issues once completed."
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

            <section className="content-section" style={{ paddingTop: '5px', paddingBottom: '52px' }}>
                <figure className="content-section-figure content-section-figure--plain">
                    <div className="media-plain" style={{ width: '80%' }}>
                        <div className="frame-photo frame-photo--natural">
                            <img src={asset("/project-one/ava-wiring-diagram.png")} alt="Thigh and calf redesign process" />
                        </div>
                    </div>
                    <figcaption>Finalized circuit diagram.</figcaption>
                </figure>
            </section>

            <ContentSection
                tightBottom
                heading="Firware Implementation"
                body={[
                    "Similar to the mechanical state, the firmware we received was in poor shape. After testing it and speaking with the previous team, our team concluded it would not have been suitable for our application largely due to its high latency. Moreover, the firmware lacked the modularity and clear interfaces needed to reliably control the robot's motors. Our team set out to redesign the architecture to create firmware that could support our goal of bipedal locomotion.",
                    "When building the firmware for Ava, our team had two main focuses: low latency and clean modularity. I was focused on helping to reduced the firmware's latency by rebuilding the sensor libraries. I accomplished by seperating sensor reads and writes. The previous implementation used a blocking read then write method for determining motor position and IMU data. For this implementation, the micrcontroller would poll the first motor in the communication bus, sit idly until the motor's position was recieved, then move to the next motor in the communication chain. This inflated the communiation as the total round trip time included the sum of the of every motor's full send-wait-receive cycle. This setup did not allow for real time acutation as there was nearly a 1 second communication delay. ",
                    "By separating the reads and writes, all motor and sensor delays overlap instead of stacking sequentially. During the first phase, the Teensy sends a read command to each communication bus, one after another, without waiting for a response before moving to the next. Because the Teensy's UART transmission is non-blocking — the processor simply loads the request into a TX buffer and moves on, while hardware interrupts handle the actual bit transmission — every bus's request goes out almost immediately, and each motor's response time begins counting down in parallel rather than one after another. Only once the hardware buffers have had time to fill does the Teensy move to the second phase and collect the motor positions and sensor data, polling each buffer for a completed packet rather than blocking on any single one. This separation meant the total latency was no longer the sum of every motor's individual response time, but closer to the time of the single slowest response. That restructuring helped the team achieve a round-trip communication time of 6 ms ideal for real-time actuation."
                ]}
            />

            <section className="content-section" style={{ paddingTop: '20px' }}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1 }}>
                        <div className="media-plain" style={{ width: '95%' }}>
                            <div className="frame-photo frame-photo--natural">
                                <img src={asset("/project-one/communication-cycle.png")} alt="Complete communication cycle" />
                            </div>
                        </div>
                        <figcaption>Complete communication cycle.</figcaption>
                    </figure>
                    <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1 }}>
                        <div className="media-plain" style={{ width: '105%' }}>
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
                next={{ title: "Cephla", path: "/cephla" }}
            />
        </>
    )
}
