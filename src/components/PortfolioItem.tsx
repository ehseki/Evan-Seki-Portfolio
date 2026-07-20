import './../All.css'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface PortfolioItemProps extends Project {
    index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
    desktopName,
    imageSrc,
    imagePosition,
    index,
    path,
}) => {
    const inner = (
        <article className="project-tile" style={{ ['--card-index' as string]: index }}>
            <img
                src={imageSrc}
                alt={desktopName}
                className="project-tile-image"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
            <div className="project-tile-overlay">
                <span>{desktopName}</span>
            </div>
        </article>
    )

    return path ? <Link to={path} className="project-tile-link">{inner}</Link> : inner
}

export default PortfolioItem
