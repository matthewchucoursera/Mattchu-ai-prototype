import { useState } from "react";
import { calendarConfig, januaryStats } from "../data/mockData";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function CalendarWidget() {
  const { year, month, monthLabel, dotsOn, barsOn } = calendarConfig;
  const { minutesLearned, itemsCompleted } = januaryStats;

  // Clickable selected day — starts at the config default (23)
  const [selectedDay, setSelectedDay] = useState(calendarConfig.selectedDay);

  // Build calendar grid: empty slots + day numbers
  const firstDow = new Date(year, month, 1).getDay(); // 4 = Thursday for Jan 2026
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 31
  const cells: (number | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const dotsSet = new Set(dotsOn);
  const barsSet = new Set(barsOn);

  // Count-up animation for stats — re-triggers whenever selectedDay changes
  const animatedMinutes = useAnimatedCounter(minutesLearned, 500);
  const animatedItems = useAnimatedCounter(itemsCompleted, 500);

  return (
    <div className="bg-white border border-grey-100 rounded-16 overflow-hidden">
      {/* Calendar */}
      <div className="px-24 pt-24 pb-16">
        {/* Month header */}
        <div className="flex items-center justify-between mb-16">
          <span className="cds-subtitle-sm text-grey-975">{monthLabel}</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous month"
              className="flex items-center justify-center w-24 h-24 rounded-full hover:bg-grey-50 text-grey-600 transition-colors duration-fast"
            >
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>
                chevron_left
              </span>
            </button>
            <button
              type="button"
              aria-label="Next month"
              className="flex items-center justify-center w-24 h-24 rounded-full hover:bg-grey-50 text-grey-600 transition-colors duration-fast"
            >
              <span className="material-symbols-rounded" style={{ fontSize: 16 }}>
                chevron_right
              </span>
            </button>
          </div>
        </div>

        {/* Day-of-week headers */}
        <div className="grid grid-cols-7 mb-4">
          {DAY_LABELS.map((d) => (
            <div
              key={d}
              className="flex items-center justify-center h-32 cds-body-tertiary text-grey-600"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Date cells */}
        <div className="grid grid-cols-7">
          {cells.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="h-32" />;
            }
            const isSelected = day === selectedDay;
            const hasDot = dotsSet.has(day);
            const hasBar = barsSet.has(day);
            return (
              <div
                key={day}
                className="flex flex-col items-center justify-start h-[38px]"
              >
                {/* Date number — clickable */}
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={[
                    "w-32 h-28 flex items-center justify-center rounded-full cds-body-secondary transition-colors duration-fast",
                    isSelected
                      ? "bg-purple-25 border-2 border-purple-700 text-grey-975 sm:bg-purple-700 sm:border-0 sm:text-white"
                      : "text-grey-975 hover:bg-grey-50",
                  ].join(" ")}
                >
                  {day}
                </button>
                {/* Activity indicator */}
                {hasDot && (
                  <div className="w-5 h-5 rounded-full bg-purple-700 mt-1" />
                )}
                {hasBar && (
                  <div className="w-16 h-2 rounded-full bg-purple-700 mt-1" />
                )}
                {!hasDot && !hasBar && <div className="h-[7px]" />}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-24 mt-12">
          <div className="flex items-center gap-6">
            <div className="w-5 h-5 rounded-full bg-purple-700 flex-shrink-0" />
            <span className="cds-body-tertiary text-grey-600">1+ items completed</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-16 h-2 rounded-full bg-purple-700 flex-shrink-0" />
            <span className="cds-body-tertiary text-grey-600">All daily goals completed</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-grey-100" />

      {/* Day stats — heading and numbers update with selected day */}
      <div className="px-24 py-16">
        <p className="cds-body-secondary text-grey-975 mb-16">
          January {selectedDay} stats
        </p>
        <div className="flex gap-24 flex-wrap">
          <div>
            <p className="cds-body-tertiary text-grey-600">Minutes learned</p>
            <p className="cds-subtitle-md text-grey-975 mt-4 tabular-nums">
              {animatedMinutes}
            </p>
          </div>
          <div>
            <p className="cds-body-tertiary text-grey-600">Items completed</p>
            <p className="cds-subtitle-md text-grey-975 mt-4 tabular-nums">
              {animatedItems}
            </p>
          </div>
          <div>
            <p className="cds-body-tertiary text-grey-600">Highest grade</p>
            <p className="cds-subtitle-md text-grey-975 mt-4">
              {januaryStats.highestGrade}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
