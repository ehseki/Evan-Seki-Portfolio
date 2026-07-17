import './../All.css'

interface SpecBarProps {
    tools: string[];
    skills: string[];
}

/**
 * Template: SpecBar
 * Full-width tools + skills strip shown near the top of every project page.
 * Mirrors the card spec columns but spans the full content width.
 */
export default function SpecBar({ tools, skills }: SpecBarProps) {
    return (
        <div className="spec-bar">
            <div className="spec-bar-inner">
                <div className="spec-bar-col">
                    <h4>Tools</h4>
                    <ul>
                        {tools.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                </div>
                <div className="spec-bar-divider" />
                <div className="spec-bar-col">
                    <h4>Skills</h4>
                    <ul>
                        {skills.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
