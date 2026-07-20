import '../All.css'
import PageHero from '../templates/PageHero'
import SpecBar from '../templates/SpecBar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

export default function ProjectOne() {
    return (
        <>
            <PageHero
                title="Embodied AI: Humanoid Robot for Bipedal Locomotion"
                summary="This project was my senior capstone, or Major Qualifying Project (MQP), at WPI. I worked with four teammates to achieve the goal of creating a robotics platform capable of bipedal locomotion. I was personally responsible for redesigning the robot's lower body, creating sensor libraries for the robots firmware, and optimizing the robot's electrical system."
                image={{ src: asset("/project-one/ava-stand.jpg"), caption: "Ava standing via a hard-coded zero positon." }}
            />
            <ContentSection
                heading="Project Overview"
                body={[
                    "This project builds on prior MQPs completed under the same advisor's supervision. The humanoid robot, named Ava, stands one meter tall and combines servo motors with 3D-printed links to lower the cost of the robotics platform, with the goal of eventual deployment as a nursing assistant in a senior living facility.",
                    "Our team's central goal was to use a reinforcement learning model to generate a robust walking gait for the physical robot. Achieving this required improvements across the platform: the robot's structure needed to be redesigned for greater strength, its electrical harness rebuilt for improved reliability, and its firmware optimized to support the responsiveness demanded by the walking controller."]}
                image={{ src: asset("/project-one/ava-electrical-harness.jpg"), caption: "Ava's redesigned harness.", framed: false }}
            />

            <ContentSection
                heading="Mechanical Redesigns"
                body={[
                    "When we first received the robot, its mechanical condition was in rough shape. Many of the robotic links showed signs of excessive wear such as creep and cracking. Moreover, after remanufacturing the links the lack of consistent hardware and accurate CAD models led to difficulties assembling the robot. Our team concluded that the robot simply would not be able to support our goal of reliable bipedal locomotion and that major mechanical redesigns were required.",
                    "When redesigning Ava our team had two main focuses: proper DMFA (design for manufacturing and assembly) and structural optimization. In regard to DMFA, our team utilized a top down assembly approach to organize our workflow. We used the position of the motors to drive the base geometry of the robotic links. This approached allowed for proper fitment as we were able to use tools such as interference detection to ensure correct tolerancing. The base parts were then optimized for strength and weight using a topology study. This study was used as a guide to show where material could be removed. The finalized parts were then validated through a finite element analysis. The combination of both studies gave our team confidence that our mechanical redesigns would create an excellent robotics platform."  
                ]}
                imageLeft
                image={{ src: asset("/project-one/old_motor_mount.png"), caption: "Old worn motor mount.", framed: false, width: "60%" }}
            />

            <section className="content-section">
                <div className="flex gap-4">
                    <div className="w-1/2 flex justify-center">
                        <figure className="content-section-figure content-section-figure--plain flex flex-col">
                            <div className="media-plain" style={{ width: 'auto', height: '50%' }}>
                                <div className="frame-photo frame-photo--natural" style={{ height: '100%' }}>
                                    <img
                                        src={asset("/project-one/complete-robot-cad.png")}
                                        alt="Complete robot CAD"
                                        style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                            <figcaption>Finalized CAD.</figcaption>
                        </figure>
                    </div>
                    <div className="w-1/2 flex flex-col gap-3">
                        <figure className="content-section-figure content-section-figure--plain">
                            <div className="media-plain">
                                <div className="frame-photo frame-photo--natural">
                                    <img src={asset("/project-one/thigh-redesign-process.png")} alt="Thigh redesign process" />
                                </div>
                            </div>
                            <figcaption>Thigh redesign process starting from Topology Optimization to FEA validation.</figcaption>
                        </figure>
                        <figure className="content-section-figure content-section-figure--plain" style={{ marginTop: '80px' }}>
                            <div className="media-plain">
                                <div className="frame-photo frame-photo--natural">
                                    <img src={asset("/project-one/calf-redesign-process.png")} alt="Calf redesign process" />
                                </div>
                            </div>
                            <figcaption>Calf redesign process starting from Topology Optimization to FEA validation.</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

                        <SpecBar
                tools={["Tool A", "Tool B", "Tool C"]}
                skills={["Skill A", "Skill B"]}
            />

            <ContentSection
                callout
                body="Use a callout section like this to pull out one key result or takeaway."
            />


            <ProjectNav
                next={{ title: "Project Two Title", path: "/project-two" }}
            />
        </>
    )
}
