import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type PixelButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

const variantStyles = {
  primary:
    "bg-gradient-to-r from-ruby to-royal text-white shadow-[0_12px_28px_rgba(255,79,123,0.26)] hover:shadow-[0_16px_34px_rgba(113,87,255,0.28)]",
  secondary:
    "bg-white text-slate-700 ring-1 ring-slate-200 shadow-[0_10px_24px_rgba(31,36,51,0.08)] hover:text-ruby hover:ring-ruby/30",
  danger:
    "bg-rose-50 text-rose-700 ring-1 ring-rose-200 shadow-[0_10px_24px_rgba(190,18,60,0.08)] hover:bg-rose-100"
};

export default function PixelButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...buttonProps
}: PixelButtonProps) {
  const styles = [
    "command-button inline-flex items-center justify-center px-6 py-3 text-center text-base font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-mana/40 disabled:cursor-not-allowed disabled:opacity-50",
    variantStyles[variant],
    className
  ].join(" ");

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={styles}
          onClick={onClick}
          rel="noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} type={type} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}
