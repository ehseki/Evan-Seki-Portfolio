import './../All.css'

interface ImageGridProps {
    heading?: string;
    /** Set `natural: true` on an image to fit it uncropped instead of the default square crop.
        Set `framed: false` for a borderless image with a centered caption, matching the PageHero image style. */
    images: { src: string; caption?: string; natural?: boolean; framed?: boolean }[];
}

/**
 * Template: ImageGrid
 * Full-width gallery strip of framed images with captions.
 * Desktop >=901px: one row, as many across as there are images · Tablet 641-900px: 2x2 · Mobile <=640px: single column.
 */
export default function ImageGrid({ heading, images }: ImageGridProps) {
    return (
        <section className="content-section">
            {heading && <h2 className="content-section-heading image-grid-heading">{heading}</h2>}
            <div className="image-grid" style={{ ['--image-count' as string]: images.length }}>
                {images.map((img, i) => {
                    const photo = (
                        <div className={`frame-photo${img.natural ? ' frame-photo--natural' : ''}`}>
                            <img src={img.src} alt={img.caption ?? heading ?? ''} />
                        </div>
                    )
                    return (
                        <figure className={`content-section-figure${img.framed === false ? ' content-section-figure--plain' : ''}`} key={img.src + i}>
                            {img.framed === false ? (
                                <div className="media-plain">{photo}</div>
                            ) : (
                                <div className="frame">{photo}</div>
                            )}
                            {img.caption && <figcaption>{img.caption}</figcaption>}
                        </figure>
                    )
                })}
            </div>
        </section>
    )
}
