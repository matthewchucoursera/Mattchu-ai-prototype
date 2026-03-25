import { useState, useEffect } from "react";

interface CircularProgressProps {
  percent: number;
  size?: number;
}

export function CircularProgress({ percent, size = 68 }: CircularProgressProps) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (percent / 100) * circumference;

  // Start fully empty (offset = circumference), animate to the real value on mount
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    // One rAF ensures the initial "empty" state is painted before the transition fires
    const id = requestAnimationFrame(() => setOffset(targetOffset));
    return () => cancelAnimationFrame(id);
  }, [targetOffset]);

  return (
    <div className="relative inline-flex items-center justify-center flex-shrink-0" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        style={{ transform: "rotate(-90deg)" }}
        aria-hidden="true"
      >
        {/* Track ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#DAE1ED"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc — animates strokeDashoffset on mount */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#6923DE"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 700ms ease" }}
        />
      </svg>
      <span
        className="absolute font-semibold text-center"
        style={{
          fontSize: "19px",
          lineHeight: 1,
          color: "#6923DE",
          fontFamily: '"Source Sans 3", "Source Sans Pro", sans-serif',
        }}
      >
        {percent}%
      </span>
    </div>
  );
}
