import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal -- wraps children in an Intersection Observer
 * so they fade-up into view when scrolled to.
 *
 * Enhanced with:
 * - Configurable threshold and rootMargin
 * - Millisecond-based delay (not class-based)
 * - Will-change hint for GPU acceleration
 *
 * Props:
 *  - delay     : delay in ms before animation starts (default 0)
 *  - className : additional CSS classes (optional)
 *  - threshold : IntersectionObserver threshold (default 0.1)
 *  - once      : whether to only animate once (default true)
 */
export default function ScrollReveal({
    children,
    delay = 0,
    className = '',
    threshold = 0.1,
    once = true,
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay > 0) {
                        setTimeout(() => setIsVisible(true), delay);
                    } else {
                        setIsVisible(true);
                    }
                    if (once) observer.unobserve(node);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -60px 0px',
            }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [delay, threshold, once]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                     transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}
