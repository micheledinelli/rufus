import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], [data-cursor-dot]';

/**
 * Custom round cursor active across the whole site. Sits at the site's
 * dark green by default and switches to the light green accent while
 * hovering any clickable element (links, buttons, the video grid, etc).
 */
export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
        setIsInteractive(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
        setIsInteractive(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`hidden md:block fixed top-0 left-0 z-50 w-4 h-4 pointer-events-none rounded-full transition-colors duration-150 ease-out ${
        isInteractive ? "bg-accent" : "bg-primary"
      }`}
    />
  );
}
