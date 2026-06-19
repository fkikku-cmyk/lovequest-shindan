import type { ElementType, ReactNode } from "react";

type SectionCardProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  label?: string;
  tone?: "default" | "pink" | "amber" | "plain";
};

const toneStyles = {
  default: "quest-card",
  pink: "quest-card bg-pink-50/70 ring-pink-100",
  amber: "quest-card bg-gradient-to-br from-amber-50 via-white to-pink-50 ring-amber-100",
  plain: "quest-card bg-white ring-slate-200"
};

export default function SectionCard<T extends ElementType = "section">({
  as,
  children,
  className = "",
  label,
  tone = "default"
}: SectionCardProps<T>) {
  const Component = as || "section";

  return (
    <Component className={[toneStyles[tone], className].join(" ")}>
      {label ? (
        <div className="mb-4">
          <span className="rpg-label">{label}</span>
        </div>
      ) : null}
      {children}
    </Component>
  );
}
