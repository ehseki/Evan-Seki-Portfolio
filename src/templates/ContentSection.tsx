import './../All.css'
import React from 'react'

interface ContentSectionProps {
    heading?: string;
    body?: string | string[];
    children?: React.ReactNode;
    image?: { src: string; caption?: string; natural?: boolean };
    /** Multiple images stacked in the media column. Takes precedence over `image`.
        Set `natural: true` on an image to size its frame to the image's own
        aspect ratio instead of the default square crop. */
    images?: { src: string; caption?: string; natural?: boolean }[];
    video?: { youtubeId: string; caption?: string };
    /** Desktop only: place the media on the left, text on the right. Mobile always shows text first. */
    imageLeft?: boolean;
    /** kept for backwards compat — ignored */
    layout?: 'default' | 'aside';
    callout?: boolean;
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
}: ContentSectionProps) {
    const paragraphs = body
        ? (Array.isArray(body) ? body : [body])
        : [];

    const imageList = images ?? (image ? [image] : []);

    const hasMedia = !!(imageList.length > 0 || video);

    const mediaEl = imageList.length > 0 ? (
        <div className="content-section-figures">
            {imageList.map((img) => (
                <figure className="content-section-figure" key={img.src}>
                    <div className="frame">
                        <div className={`frame-photo${img.natural ? ' frame-photo--natural' : ''}`}>
                            <img src={img.src} alt={img.caption ?? heading ?? ''} />
                        </div>
                    </div>
                    {img.caption && <figcaption>{img.caption}</figcaption>}
                </figure>
            ))}
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

    const bodyClass = `content-section-body${imageLeft ? ' content-section-body--image-left' : ''}`;
    // Media column width scales with the number of images (see All.css --figure-count)
    const bodyStyle = { ['--figure-count' as string]: Math.max(imageList.length, 1) };

    return (
        <section className={`content-section${callout ? ' content-section--callout' : ''}`}>
            {heading && <h2 className="content-section-heading">{heading}</h2>}

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
