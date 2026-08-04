import '../All.css'
import PageHero from '../templates/PageHero'
import ProjectSidebar from '../templates/ProjectSidebar'
import ContentSection from '../templates/ContentSection'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

// Template project page — copy this file to start a new project. See ProjectTwo.tsx
// for an example of the same structure filled in with real content.
export default function ProjectFive() {
    return (
        <>
            <PageHero
                title="WPI Core Robotics Courses"
                summary=""
                image={{ src: asset("/project-five/cropped-WPI.png"), width: "80%", transparent: true }}
            />

            <div className="project-columns">
                <ProjectSidebar
                    skills={["Time Management", "Robot Kinematics", "Path Planning","Computer Vision"]}
                    tools={["MATLAB", "Git","Github","Python","C++","ROS", "SOLIDWORKS", "Linux"]}
                    links={[{ label: "WPI Robotics", url: "https://www.wpi.edu/academics/departments/robotics-engineering" }]}
                />
                <div className="project-body">

                    <ContentSection
                        tightTop
                        heading="Overview"
                        body={[
                            "My favorite classes during my undergrad were the Robotics Engineering courses. Each class presented a unique challenge that focused a on specific robotics principle. The courses had weekly labs where I could apply concepts learned during lecture. These weekly labs would culminate at the end of course where I would apply everything I had learned to complete the final project. Below I have highlighted my three favorite courses."
                        ]}
                    />
 
                    <ContentSection
                        tightBottom
                        heading="RBE2001: Actuation"
                        body={[
                            "This class placed a large emphasis on mechanical design. For the final project I needed to design a custom four bar linkage to place and remove solar panels on two scale houses. We had to use FEA, calculate optimal gear ratios, and build a non blocking finite state machine in order to complete the final."
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px' }}>
                        <figure className="content-section-figure content-section-figure--plain">
                            <div className="media-plain" style={{ width: '85%' }}>
                                <div className="frame-photo frame-photo--natural">
                                    <img src={asset("/project-five/2001-robot.webp")} alt="Placeholder photo" />
                                </div>
                            </div>
                            <figcaption>Robot created for the final project.</figcaption>
                        </figure>
                    </section>

                    <ContentSection
                        tightBottom
                        heading="RBE3001: Manipulation"
                        body={[
                            "This course focused on the math behind how a robotic arm functions. For the final project I needed to program a pick and place control system for a four degree of freedom robotic arm. This involved deriving forward and inverse kinematics, velocity control, and trajectories in both joint and task space. Then computer vision and image-processing techniques were utilized to detect and map object's positions within the robot’s workspace which enabled reliable manipulation. Check our final paper and video below."
                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '32px' }}>
                        <div className="pdf-viewer">
                            <iframe src={asset("/project-five/rbe3001-report.pdf")} title="RBE3001 Final Report" />
                            <a className="pdf-open-link" href={asset("/project-five/rbe3001-report.pdf")} target="_blank" rel="noreferrer">
                                Open report in new tab ↗
                            </a>
                        </div>

                        <figure className="content-section-figure" style={{ marginTop: '32px' }}>
                            <div>
                                <div className="frame-video">
                                    <iframe
                                        src="https://www.youtube.com/embed/9P7hzNfme7k"
                                        title="RBE3001 Final Project Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </figure>
                    </section>

                    <ContentSection
                        tightBottom
                        heading="RBE3002: Navigation"
                        body={[
                            "This was the last core robotics course and by far the most involved. This class focused on navigation and path planning. For the final project there were three tasks: mapping an unknown maze, navigating back to the start, and  localizing when placed randomly within the maze. For the first task we used ROS's gmapping package to convert raw LIDAR into a live occupancy map. From this map we identified exploration frontiers by using OpenCV techniques like binary dilation and contour detection. Using A* to compute travel cost we were able to prioritize continuing down hallways rather than prematurely backtracking to explore new areas. Once the entire maze was mapped it was time for the second task, returning to the start. We used A* once more to calculate the most efficient path. For the third and final task our robot was placed randomly in the maze. We used Monte Carlo localization implemented in the AMCL ROS package to localize our robot within the maze. Then using A* the robot was able to sucessfully navigate the maze."

                        ]}
                    />

                    <section className="content-section" style={{ paddingTop: '20px' }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo" style={{ aspectRatio: '1143 / 894' }}>
                                        <img src={asset("/project-five/turtlebot-mapping.PNG")} alt="Turtlebot mapping the maze" />
                                    </div>
                                </div>
                                <figcaption>Robot navigating and mapping the maze.</figcaption>
                            </figure>
                            <figure className="content-section-figure content-section-figure--plain" style={{ flex: 1, minWidth: 0 }}>
                                <div className="media-plain" style={{ width: '100%' }}>
                                    <div className="frame-photo" style={{ aspectRatio: '1143 / 894' }}>
                                        <img src={asset("/project-five/wall-distance-path.png")} alt="Planned path relative to wall distance" />
                                    </div>
                                </div>
                                <figcaption>Planned path prioritizing new frontier discovery and distance from wall.</figcaption>
                            </figure>
                        </div>
                    </section>

                </div>
            </div>

            <ProjectNav
                prev={{ title: "The Barbie Kart", path: "/barbie-kart" }}
                next={{ title: "Wairarapa Documentary", path: "/wairarapa" }}
            />
        </>
    )
}
