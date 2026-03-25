import { useState } from "react";
import { CircularProgress } from "./CircularProgress";
import { todaysGoals, weeklyActivityData } from "../data/mockData";

// userName removed — greeting now lives in the DigestHeader (App.tsx)
interface ProgressBannerProps {
  pathName: string;
  progressPercent: number;
  courseTitle: string;
  certificateName: string;
  videoSrc: string;
}

export function ProgressBanner({
  pathName,
  progressPercent,
  courseTitle,
  certificateName,
  videoSrc,
}: ProgressBannerProps) {
  const [completedGoals, setCompletedGoals] = useState<Set<string>>(new Set());

  function toggleGoal(id: string) {
    setCompletedGoals((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  // Component renders card content only — caller supplies the outer bg + padding
  return (
    <div className="flex flex-col gap-16">
      {/* Title + badge */}
      <div
        className="flex flex-col gap-12 sm:flex-row sm:items-center sm:gap-16 animate-entrance"
        style={{ animationDelay: "0ms" }}
      >
        <h1 className="cds-title-sm text-grey-975">{pathName}</h1>
      </div>

      {/* Cards row */}
      <div
        className="flex flex-col gap-24 sm:flex-row sm:items-stretch animate-entrance"
        style={{ animationDelay: "60ms" }}
      >
        {/* ── Left: course progress card ── */}
        <div className="flex-1 bg-white border border-grey-100 rounded-16 p-24 flex flex-col gap-16 sm:gap-0 min-w-0">

          {/* Inner: stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col gap-16 sm:flex-row sm:items-center sm:gap-12">

            {/* Course info (donut + title + cert + desktop button) */}
            <div className="flex flex-col gap-16 sm:flex-shrink-0 sm:w-[349px]">
              <CircularProgress percent={progressPercent} size={67} />
              <div className="flex flex-col gap-4">
                <p className="cds-subtitle-md text-grey-975">{courseTitle}</p>
                <p className="cds-body-secondary text-grey-600">{certificateName}</p>
              </div>
              {/* "Resume learning" on desktop */}
              <button
                type="button"
                className="hidden sm:flex self-start px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast"
              >
                Resume learning
              </button>
            </div>

            {/* Video thumbnail */}
            <div className="h-[206px] rounded-8 overflow-hidden flex-shrink-0 w-full sm:flex-1 sm:h-auto sm:self-stretch">
              <img
                src={videoSrc}
                alt="Course preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* "Resume learning" on mobile */}
          <button
            type="button"
            className="sm:hidden self-start px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast"
          >
            Resume learning
          </button>
        </div>

        {/* ── Right: goals + weekly activity ── */}
        <div className="flex flex-col gap-12 sm:gap-0 sm:flex-shrink-0 sm:w-[321px] sm:bg-white sm:border sm:border-grey-100 sm:rounded-16 sm:overflow-hidden">

          {/* Fun fact */}
          <div className="bg-white rounded-16 sm:bg-transparent sm:rounded-none px-16 pt-16 pb-16">
            <div className="flex items-center gap-8 mb-12">
              <span className="cds-subtitle-sm text-grey-975">Daily fun fact</span>
            </div>
            <p className="cds-body-secondary text-grey-600">
              The average person will spend about 6 months of their life waiting for red lights to turn green — that&apos;s 1,800 hours of potential learning time.
            </p>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden sm:block border-t border-grey-100" />

          {/* Today's goals */}
          <div className="bg-white rounded-16 sm:bg-transparent sm:rounded-none px-16 pt-16 pb-16">
            <div className="flex items-center gap-8 mb-12">
              <span className="cds-subtitle-sm text-grey-975">Today&apos;s goals</span>
              <span className="cds-body-tertiary text-purple-700 bg-purple-25 px-8 py-2 rounded-32">
                Personalized
              </span>
            </div>
            <ul className="flex flex-col gap-8">
              {todaysGoals.map((goal) => {
                const done = completedGoals.has(goal.id);
                return (
                  <li key={goal.id}>
                    <button
                      type="button"
                      onClick={() => toggleGoal(goal.id)}
                      className="flex items-start gap-8 w-full text-left group"
                    >
                      <span
                        className={[
                          "material-symbols-rounded flex-shrink-0 mt-2 transition-colors duration-fast",
                          done ? "text-purple-700" : "text-grey-400 group-hover:text-grey-600",
                        ].join(" ")}
                        style={{
                          fontSize: 16,
                          fontVariationSettings: done ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        {done ? "check_circle" : "grade"}
                      </span>
                      <span
                        className={[
                          "cds-body-secondary transition-colors duration-fast",
                          done ? "line-through text-grey-400" : "text-grey-975",
                        ].join(" ")}
                      >
                        {goal.boldText ? (
                          <>
                            {goal.text.split(goal.boldText)[0]}
                            <strong>{goal.boldText}</strong>
                            {goal.text.split(goal.boldText)[1] ?? ""}
                            {goal.suffix && (
                              <span className="text-grey-600"> {goal.suffix}</span>
                            )}
                          </>
                        ) : (
                          goal.text
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden sm:block border-t border-grey-100" />

          {/* Weekly activity */}
          <div className="bg-white rounded-16 sm:bg-transparent sm:rounded-none px-16 pt-16 pb-16 flex flex-col gap-12">
            <div className="flex items-center gap-8">
              <span className="cds-subtitle-sm text-grey-975">Weekly activity</span>
              <span className="cds-body-tertiary text-purple-700 bg-purple-25 px-8 py-2 rounded-32">
                {weeklyActivityData.streak}
              </span>
            </div>
            <p className="cds-body-secondary text-grey-600">
              {weeklyActivityData.message}
            </p>
            <div className="flex gap-4">
              {weeklyActivityData.days.map((day, i) => {
                if (day.completed) {
                  return (
                    <div
                      key={i}
                      className="w-32 h-32 rounded-8 bg-purple-25 flex items-center justify-center flex-shrink-0"
                    >
                      <span
                        className="material-symbols-rounded text-purple-700"
                        style={{ fontSize: 14 }}
                      >
                        check
                      </span>
                    </div>
                  );
                }
                if (day.isCurrent) {
                  return (
                    <div
                      key={i}
                      className="w-32 h-32 rounded-8 bg-white border-2 border-grey-200 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="cds-body-tertiary text-grey-600">{day.label}</span>
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="w-32 h-32 rounded-8 bg-grey-50 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="cds-body-tertiary text-grey-600">{day.label}</span>
                  </div>
                );
              })}
            </div>
            <p className="cds-body-tertiary text-grey-600">
              {weeklyActivityData.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
