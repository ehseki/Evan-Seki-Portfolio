import './../All.css'

function Header() {
    return (
        <nav className="nav">
            <a className="wordmark" href="/">
                <b>Evan's Project Portfolio</b>
            </a>
            <div className="nav-links">
                <a className="nav-cta" href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
        </nav>
    )
}

export default Header
