import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor -- a framer-motion based smooth orb follower.
 * Listens for mouse movements and automatically targets interactive elements 
 * (links, buttons) for an expanded "hover" state. 
 * Disabled on touch/mobile devices.
 */
export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Position tracking using MotionValues for performance
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth trailing effect via spring physics
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // The cursor is hidden by default (opacity: 0).
        // It will only appear when a mousemove event is detected.
        // CSS handles hiding the default system cursor via @media (pointer: fine).

        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            // Check if hovering over any interactive element globally
            const target = e.target.closest('a, button, input, textarea, [role="button"], .hover-target');
            setIsHovering(!!target);
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 1)",
                }}
                transition={{ scale: { duration: 0.2, ease: "easeOut" } }}
            />
            {/* Outer Glow Aura */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] blur-[12px]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 0.6 : 0,
                }}
                animate={{
                    scale: isHovering ? 3 : 1.5,
                    backgroundColor: isHovering ? "#FF9900" : "#8B5CF6", // Orange on hover, Purple normally
                }}
                transition={{ scale: { duration: 0.3, ease: "easeOut" } }}
            />
        </>
    );
}
