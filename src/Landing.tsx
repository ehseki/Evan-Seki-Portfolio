import './All.css'
import PortfolioItem from "./components/PortfolioItem.tsx";
import HeroCarousel from "./components/HeroCarousel.tsx";
import projects from "./data/projects.ts";

function Landing() {
    return (
        <>
            <header className="hero flex-col">
                <div className="flex">
                    <div className="w-1/2">
                        <div className="hero-inner">
                            <h1>One or two lines describing who you are and what kind of work you do</h1>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <HeroCarousel
                            images={[
                                { src: "/hero/hero-1.svg" },
                                { src: "/hero/hero-2.svg" },
                                { src: "/hero/hero-3.svg" },
                            ]}
                        />
                    </div>
                </div>
                <div className="h-16">
                </div>
                <div className="flex">
                    <div className="w-full">
                        <p>
                            Replace this paragraph with your own bio: your background, what you studied or
                            currently do, what kind of problems you enjoy working on, and what ties your
                            projects together. Two to four sentences is usually enough — this is context for
                            the project grid below, not the main event.
                        </p>
                    </div>
                </div>
            </header>

            <div className="divider">
                <span className="line" />
                <span className="mark" />
                <span className="line" />
            </div>

            <main className="project-grid" id="work">
                {projects.map((project, i) => (
                    <PortfolioItem key={project.path ?? project.desktopName} {...project} index={i} />
                ))}
            </main>

            <footer>
                <span>© 2026 Your Name</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </footer>
        </>
    )
}

export default Landing;
