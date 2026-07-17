import './../All.css'
import { useEffect, useState } from 'react'

interface HeroCarouselProps {
    images: { src: string; alt?: string }[];
    /** ms between auto-advances */
    interval?: number;
}

/**
 * HeroCarousel
 * Auto-advancing crossfade carousel in the site's framed-photo style,
 * with diamond indicator dots (click to jump).
 */
export default function HeroCarousel({ images, interval = 5000 }: HeroCarouselProps) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const id = setInterval(() => setActive(a => (a + 1) % images.length), interval);
        return () => clearInterval(id);
    }, [images.length, interval]);

    if (images.length === 0) return null;

    return (
        <div className="hero-carousel">
            <div className="frame">
                <div className="frame-photo">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt ?? ''}
                            className={i === active ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
