import './../All.css'

function Header() {
    return (
        <nav className="nav">
            <a className="wordmark" href="/">
                <b>Evan Seki</b>
            </a>
            <div className="nav-links">
                <a className="nav-cta" href="https://www.linkedin.com/in/evan-seki-1050ba260/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
        </nav>
    )
}

export default Header
