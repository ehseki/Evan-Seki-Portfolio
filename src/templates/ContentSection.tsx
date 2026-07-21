import './../All.css'
import React from 'react'

interface ContentSectionProps {
    heading?: string;
    body?: string | string[];
    children?: React.ReactNode;
    image?: { src: string; caption?: string; natural?: boolean; framed?: boolean; width?: string };
    /** Multiple images stacked in the media column. Takes precedence over `image`.
        Set `natural: true` on an image to size its frame to the image's own
        aspect ratio instead of the default square crop. Set `framed: false` for
        a borderless image with a centered caption, matching the PageHero image style.
        `width` overrides the default size for a `framed: false` image, e.g. "50%". */
    images?: { src: string; caption?: string; natural?: boolean; framed?: boolean; width?: string }[];
    video?: { youtubeId: string; caption?: string };
    /** Desktop only: place the media on the left, text on the right. Mobile always shows text first. */
    imageLeft?: boolean;
    /** kept for backwards compat — ignored */
    layout?: 'default' | 'aside';
    callout?: boolean;
    /** Reduces the top padding — use when this section continues directly from the one above it. */
    tightTop?: boolean;
    /** Reduces the bottom padding — use when the next section should read as a continuation of this one. */
    tightBottom?: boolean;
    /** Stack multiple images vertically in the media column instead of side by side. */
    stackImages?: boolean;
    /** Vertically centers the text column relative to the (naturally-sized) image. */
    centerText?: boolean;
    /** Reduces the space between the heading and the body content below it. */
    tightHeading?: boolean;
    /** Bottom-aligns a shorter image against the bottom of the text column instead of the top. */
    imageAlignEnd?: boolean;
}

export default function ContentSection({
    heading,
    body,
    children,
    image,
    images,
    video,
    imageLeft = false,
    callout = false,
    tightTop = false,
    tightBottom = false,
    stackImages = false,
    centerText = false,
    tightHeading = false,
    imageAlignEnd = false,
}: ContentSectionProps) {
    const paragraphs = body
        ? (Array.isArray(body) ? body : [body])
        : [];

    const imageList = images ?? (image ? [image] : []);

    const hasMedia = !!(imageList.length > 0 || video);

    const mediaEl = imageList.length > 0 ? (
        <div className={`content-section-figures${stackImages ? ' content-section-figures--stack' : ''}${imageAlignEnd ? ' content-section-figures--align-end' : ''}`}>
            {imageList.map((img) => {
                const photo = (
                    <div className={`frame-photo${img.natural ? ' frame-photo--natural' : ''}`}>
                        <img src={img.src} alt={img.caption ?? heading ?? ''} />
                    </div>
                )
                return (
                    <figure className={`content-section-figure${img.framed === false ? ' content-section-figure--plain' : ''}`} key={img.src}>
                        {img.framed === false ? (
                            <div className="media-plain" style={img.width ? { width: img.width } : undefined}>{photo}</div>
                        ) : (
                            <div className="frame">{photo}</div>
                        )}
                        {img.caption && <figcaption>{img.caption}</figcaption>}
                    </figure>
                )
            })}
        </div>
    ) : video ? (
        <figure className="content-section-figure">
            <div className="frame frame--video">
                <div className="frame-video">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.caption ?? heading ?? 'Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
            {video.caption && <figcaption>{video.caption}</figcaption>}
        </figure>
    ) : null;

    const bodyClass = `content-section-body${imageLeft ? ' content-section-body--image-left' : ''}${centerText ? ' content-section-body--center-text' : ''}`;
    // Media column width scales with the number of images (see All.css --figure-count) —
    // stacked images share one column width regardless of count.
    const bodyStyle = { ['--figure-count' as string]: stackImages ? 1 : Math.max(imageList.length, 1) };

    return (
        <section className={`content-section${callout ? ' content-section--callout' : ''}${tightTop ? ' content-section--tight-top' : ''}${tightBottom ? ' content-section--tight-bottom' : ''}`}>
            {heading && <h2 className={`content-section-heading${tightHeading ? ' content-section-heading--tight' : ''}`}>{heading}</h2>}

            {hasMedia ? (
                <div className={bodyClass} style={bodyStyle}>
                    <div className="content-section-text">
                        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                        {children}
                    </div>
                    {mediaEl}
                </div>
            ) : (
                <div className="content-section-text">
                    {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    {children}
                </div>
            )}
        </section>
    )
}
