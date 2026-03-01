import { useEffect, useRef, useState, RefObject } from "react";

export const useIsVisible = (options: IntersectionObserverInit) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const currentRef = containerRef.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, options);

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
   }, [options]);

   return [containerRef, isVisible] as const;
}