import './../All.css'

interface ImageGridProps {
    heading?: string;
    images: { src: string; caption?: string }[];
}

/**
 * Template: ImageGrid
 * Full-width gallery strip of framed images with captions, designed for four.
 * Desktop >=901px: 4-across · Tablet 641-900px: 2x2 · Mobile <=640px: single column.
 */
export default function ImageGrid({ heading, images }: ImageGridProps) {
    return (
        <section className="content-section">
            {heading && <h2 className="content-section-heading image-grid-heading">{heading}</h2>}
            <div className="image-grid">
                {images.map((img) => (
                    <figure className="content-section-figure" key={img.src}>
                        <div className="frame">
                            <div className="frame-photo">
                                <img src={img.src} alt={img.caption ?? heading ?? ''} />
                            </div>
                        </div>
                        {img.caption && <figcaption>{img.caption}</figcaption>}
                    </figure>
                ))}
            </div>
        </section>
    )
}
