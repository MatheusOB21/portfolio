import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-4 mb-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-primary" />
          <span className="label-eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground mt-4 max-w-2xl",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
