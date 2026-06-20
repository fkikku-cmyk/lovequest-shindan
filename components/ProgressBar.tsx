type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-slate-500 sm:text-sm">
        <span className="inline-flex items-center gap-2">
          Question {current} / {total}
        </span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-4 overflow-hidden rounded-full bg-white p-1 shadow-inner ring-1 ring-pink-100">
        <div
          className="exp-bar transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
