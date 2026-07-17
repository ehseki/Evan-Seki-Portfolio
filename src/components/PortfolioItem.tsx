import './../All.css'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface PortfolioItemProps extends Project {
    index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
    category,
    desktopName,
    descriptionLead,
    description,
    toolsUsed,
    skillsLearned,
    imageSrc,
    index,
    path,
}) => {
    const inner = (
        <article className="card" style={{ ['--card-index' as string]: index }}>
            <div className="tag">
                <span>{category}</span>
            </div>

            <div className="frame">
                <div className="frame-photo">
                    {imageSrc
                        ? <img src={imageSrc} alt={desktopName} />
                        : <span>Photograph</span>
                    }
                </div>
            </div>

            <div className="card-body">
                <h3>{desktopName}</h3>
                <p className="desc">{descriptionLead && <><b>{descriptionLead}</b><br /></>}{description}</p>
                <div className="spec">
                    <div className="spec-col">
                        <h4>Tools</h4>
                        <ul>{toolsUsed.map((t) => <li key={t}>{t}</li>)}</ul>
                    </div>
                    <div className="spec-col">
                        <h4>Skills</h4>
                        <ul>{skillsLearned.map((s) => <li key={s}>{s}</li>)}</ul>
                    </div>
                </div>
            </div>
        </article>
    )

    return path ? <Link to={path} style={{ display: 'contents' }}>{inner}</Link> : inner
}

export default PortfolioItem
