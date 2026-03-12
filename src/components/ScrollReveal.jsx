import { useEffect, useRef } from 'react';

/**
 * ScrollReveal -- wraps children in an Intersection Observer
 * so they fade-up into view when scrolled to.
 *
 * Props:
 *  - delay  : stagger class index (1-4), optional
 *  - className : additional CSS classes, optional
 */
export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.classList.remove('reveal-hidden');
                    node.classList.add('reveal-visible');
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

    return (
        <div ref={ref} className={`reveal-hidden ${delayClass} ${className}`}>
            {children}
        </div>
    );
}
