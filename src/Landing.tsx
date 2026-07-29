import './All.css'
import PortfolioItem from "./components/PortfolioItem.tsx";
import projects from "./data/projects.ts";
import { asset } from "./lib/asset";

function Landing() {
    return (
        <>
            <header className="hero flex-col">
                <div className="flex items-center">
                    <div className="w-1/2">
                        <div className="hero-inner">
                            <p>
                                I am Evan Seki. In may of 2026 I graduated from Worcester Polytechnic Institute with a Bachelor's of Science in Robotics Engineering and a Bachelor's of Science in Mechanical Engineering. I am passionate and curious about mechanical design and robotic firmware. Currently I am a mechanical Engineer for Cephla. Check out my portfolio below.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div style={{ padding: 0, background: 'transparent', border: 'none', width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <div className="frame-photo frame-photo--natural">
                                <img src={asset("/hero/mountain-ehs.jpeg")} alt="" style={{ transform: 'scale(1.25)' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16">
                </div>
            </header>

            <main className="project-grid" id="work">
                {projects.map((project, i) => (
                    <PortfolioItem key={project.path ?? project.desktopName} {...project} index={i} />
                ))}
            </main>
        </>
    )
}

export default Landing;
