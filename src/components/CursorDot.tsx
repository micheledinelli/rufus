import { useEffect, useRef, useState } from "react";

/**
 * Round cursor that replaces the native pointer over any element marked
 * with `data-cursor-dot`. Uses mix-blend-mode: difference so it reads
 * light over dark footage and dark over light footage automatically.
 */
export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      if ((e.target as HTMLElement).closest("[data-cursor-dot]")) {
        setVisible(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-cursor-dot]")) {
        setVisible(false);
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
      className={`hidden md:block fixed top-0 left-0 z-50 pointer-events-none rounded-full bg-white mix-blend-difference transition-[width,height,opacity] duration-150 ease-out ${
        visible ? "w-8 h-8 opacity-100" : "w-0 h-0 opacity-0"
      }`}
    />
  );
}
