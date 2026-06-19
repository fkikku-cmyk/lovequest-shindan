export type AdSlotPosition = "top" | "middle" | "bottom" | "result" | "library";

type AdSlotProps = {
  position: AdSlotPosition;
  className?: string;
};

const heightByPosition: Record<AdSlotPosition, string> = {
  top: "min-h-24",
  middle: "min-h-28",
  bottom: "min-h-24",
  result: "min-h-32",
  library: "min-h-28"
};

const labelByPosition: Record<AdSlotPosition, string> = {
  top: "おすすめ枠",
  middle: "休憩スペース",
  bottom: "広告スペース",
  result: "結果ページ広告",
  library: "図鑑ページ広告"
};

export default function AdSlot({ position, className = "" }: AdSlotProps) {
  return (
    <aside
      aria-label={`${labelByPosition[position]} / 広告スペース`}
      data-ad-position={position}
      className={[
        "flex w-full items-center justify-center rounded-3xl border border-dashed border-[#f0e7ee] bg-white/62 px-4 py-5 text-center text-xs font-bold leading-6 text-[#777789]",
        "shadow-[0_10px_28px_rgba(45,45,53,0.04)]",
        heightByPosition[position],
        className
      ].join(" ")}
    >
      {/* Production note:
          Replace this placeholder with Google AdSense, affiliate banners,
          or related-article modules. Keep the surrounding slot size stable
          to avoid layout shift on mobile. */}
      <span>
        {labelByPosition[position]}
        <br />
        広告スペース
      </span>
    </aside>
  );
}
