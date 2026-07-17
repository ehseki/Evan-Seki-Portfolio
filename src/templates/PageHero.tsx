import './../All.css'

interface PageHeroProps {
    category: string;
    title: string;
    summary: string;
}

/**
 * Template: PageHero
 * Top of every project detail page.
 * Renders a category badge, large display title, and one-sentence summary.
 */
export default function PageHero({ category, title, summary }: PageHeroProps) {
    return (
        <header className="page-hero">
            <div className="page-hero-inner">
                <span className="page-hero-badge">{category}</span>
                <h1>{title}</h1>
                <p>{summary}</p>
            </div>
        </header>
    )
}
