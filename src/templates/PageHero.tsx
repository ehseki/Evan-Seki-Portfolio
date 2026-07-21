import './../All.css'

interface PageHeroProps {
    title: string;
    summary: string;
    /** Optional image shown beside the title, taking half the hero's width (stacks on mobile). */
    image?: { src: string; caption?: string; alt?: string; width?: string };
}

/**
 * Template: PageHero
 * Top of every project detail page.
 * Renders a large display title and one-sentence summary, optionally
 * alongside a half-width image.
 */
export default function PageHero({ title, summary, image }: PageHeroProps) {
    if (!image) {
        return (
            <header className="page-hero">
                <div className="page-hero-inner">
                    <h1>{title}</h1>
                    <p>{summary}</p>
                </div>
            </header>
        )
    }

    return (
        <header className="page-hero">
            <div className="page-hero-media-row">
                <div className="page-hero-inner">
                    <h1>{title}</h1>
                    <p>{summary}</p>
                </div>
                <figure className="content-section-figure page-hero-figure">
                    <div className="media-plain" style={image.width ? { width: image.width } : undefined}>
                        <div className="frame-photo frame-photo--natural">
                            <img src={image.src} alt={image.alt ?? title} />
                        </div>
                    </div>
                    {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
            </div>
        </header>
    )
}
