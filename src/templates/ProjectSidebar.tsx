import './../All.css'

interface ProjectSidebarProps {
    /** Optional — add per project only when relevant. */
    role?: string;
    year?: string;
    tools?: string[];
    skills?: string[];
    links?: { label: string; url: string }[];
}

/**
 * Template: ProjectSidebar
 * Sticky sidebar shown beside a project's content (Role, Year, Tools, Skills, Links).
 * Replaces SpecBar's horizontal strip with a persistent side column.
 */
export default function ProjectSidebar({ role, year, tools, skills, links }: ProjectSidebarProps) {
    return (
        <aside className="project-sidebar">
            {role && (
                <div className="sidebar-item">
                    <div className="sidebar-label">Role</div>
                    <div className="sidebar-value">{role}</div>
                </div>
            )}
            {year && (
                <div className="sidebar-item">
                    <div className="sidebar-label">Year</div>
                    <div className="sidebar-value">{year}</div>
                </div>
            )}
            {tools && tools.length > 0 && (
                <div className="sidebar-item">
                    <div className="sidebar-label">Tools</div>
                    <div className="sidebar-tags">
                        {tools.map((t) => <span className="sidebar-tag" key={t}>{t}</span>)}
                    </div>
                </div>
            )}
            {skills && skills.length > 0 && (
                <div className="sidebar-item">
                    <div className="sidebar-label">Skills</div>
                    <div className="sidebar-tags">
                        {skills.map((s) => <span className="sidebar-tag" key={s}>{s}</span>)}
                    </div>
                </div>
            )}
            {links && links.length > 0 && (
                <div className="sidebar-item">
                    <div className="sidebar-label">Links</div>
                    <div className="sidebar-value">
                        {links.map((l, i) => (
                            <span key={l.url}>
                                <a href={l.url} className="sidebar-link" target="_blank" rel="noreferrer">{l.label}</a>
                                {i < links.length - 1 && <br />}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    )
}
