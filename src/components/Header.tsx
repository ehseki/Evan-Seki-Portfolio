import './../All.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="nav">
            <Link className="wordmark" to="/">
                <b>Evan Seki</b>
            </Link>
            <div className="nav-links">
                <a className="nav-cta" href="https://www.linkedin.com/in/evan-seki-1050ba260/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
        </nav>
    )
}

export default Header
