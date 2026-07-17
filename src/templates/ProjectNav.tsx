import './../All.css'
import { Link } from 'react-router-dom'

interface ProjectNavProps {
    prev?: { title: string; path: string };
    next?: { title: string; path: string };
}

/**
 * Template: ProjectNav
 * Prev / Next navigation shown at the bottom of every project page.
 */
export default function ProjectNav({ prev, next }: ProjectNavProps) {
    return (
        <nav className="project-nav">
            <div className="project-nav-inner">
                {prev ? (
                    <Link to={prev.path} className="project-nav-link project-nav-link--prev">
                        <span className="project-nav-dir">← Previous</span>
                        <span className="project-nav-title">{prev.title}</span>
                    </Link>
                ) : <span />}

                {next ? (
                    <Link to={next.path} className="project-nav-link project-nav-link--next">
                        <span className="project-nav-dir">Next →</span>
                        <span className="project-nav-title">{next.title}</span>
                    </Link>
                ) : <span />}
            </div>
        </nav>
    )
}
