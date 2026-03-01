import { useIsVisible } from "@/hooks/use-visible";

const FadeSection = ({ children }: { children:React.ReactNode }) => {
    const [containerRef, isVisible] = useIsVisible({ threshold: 0.1 });

    return (
    <div ref={containerRef}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
    )
}

export default FadeSection;