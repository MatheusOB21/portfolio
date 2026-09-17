import { useIsVisible } from "@/hooks/use-visible";

const FadeSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [containerRef, isVisible] = useIsVisible({ threshold: 0.1 });

  return (
    <div
      ref={containerRef}
      className={`transition-[opacity,transform] will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

export default FadeSection;
