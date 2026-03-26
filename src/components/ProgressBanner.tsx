import { useState, useRef } from "react";
import { CircularProgress } from "./CircularProgress";
import { todaysGoals, weeklyActivityData } from "../data/mockData";
import { useT } from "../contexts/LanguageContext";

interface ProgressBannerProps {
  progressPercent: number;
}

export function ProgressBanner({ progressPercent }: ProgressBannerProps) {
  const t = useT();
  const [completedGoals, setCompletedGoals] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevTimeRef = useRef(0);
  const cumulativeTimeRef = useRef(0);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }

  function handleTimeUpdate() {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const curr = v.currentTime;
    // Detect a loop: currentTime jumped backward by more than 1 second
    if (curr < prevTimeRef.current - 1) {
      cumulativeTimeRef.current += v.duration;
    }
    prevTimeRef.current = curr;
    // Show cumulative progress over 4 loops so bar moves slowly forward
    const totalTarget = v.duration * 4;
    setProgress(Math.min(((cumulativeTimeRef.current + curr) / totalTarget) * 100, 100));
  }

  function toggleGoal(id: string) {
    setCompletedGoals((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-16">
      {/* Title */}
      <div
        className="flex flex-col gap-12 sm:flex-row sm:items-center sm:gap-16 animate-entrance"
        style={{ animationDelay: "0ms" }}
      >
        <h1 className="cds-title-sm text-grey-975">{t("path_name")}</h1>
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
                <p className="cds-subtitle-md text-grey-975">{t("course_title")}</p>
                <p className="cds-body-secondary text-grey-600">{t("cert_name")}</p>
              </div>
              {/* "Resume learning" on desktop */}
              <button
                type="button"
                className="hidden sm:flex self-start px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast"
              >
                {t("cta_resume_learning")}
              </button>
            </div>

            {/* Video thumbnail */}
            <div className="relative h-[206px] rounded-8 overflow-hidden flex-shrink-0 w-full sm:flex-1 sm:h-auto sm:self-stretch">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="https://assets.mixkit.co/videos/37027/37027-720.mp4"
                onTimeUpdate={handleTimeUpdate}
              />
              {/* Grey preview overlay */}
              <div className="absolute inset-0 bg-darken-300" />
              {/* Video controls */}
              <div className="absolute bottom-12 left-12 right-12 flex items-center gap-8">
                {/* Play/Pause */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex items-center justify-center w-32 h-32 rounded-full bg-white text-grey-975 hover:bg-grey-50 transition-colors duration-fast flex-shrink-0"
                >
                  <span className="material-symbols-rounded" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>
                    {isPlaying ? "pause" : "play_arrow"}
                  </span>
                </button>
                {/* Progress bar */}
                <div className="flex-1 h-4 bg-lighten-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${progress}%`, transition: "width 1s linear" }}
                  />
                </div>
                {/* Mute/Unmute */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex items-center justify-center w-32 h-32 rounded-full bg-white text-grey-975 hover:bg-grey-50 transition-colors duration-fast flex-shrink-0"
                >
                  <span className="material-symbols-rounded" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>
                    {isMuted ? "volume_off" : "volume_up"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* "Resume learning" on mobile */}
          <button
            type="button"
            className="sm:hidden self-start px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast"
          >
            {t("cta_resume_learning")}
          </button>
        </div>

        {/* ── Right: goals + weekly activity ── */}
        <div className="flex flex-col gap-12 sm:gap-0 sm:flex-shrink-0 sm:w-[321px] sm:bg-white sm:border sm:border-grey-100 sm:rounded-16 sm:overflow-hidden">

          {/* Fun fact */}
          <div className="bg-white rounded-16 sm:bg-transparent sm:rounded-none px-16 pt-16 pb-16">
            <div className="flex items-center gap-8 mb-12">
              <span className="cds-subtitle-sm text-grey-975">{t("fun_fact_title")}</span>
            </div>
            <p className="cds-body-secondary text-grey-600">
              {t("fun_fact_body")}
            </p>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden sm:block border-t border-grey-100" />

          {/* Today's goals */}
          <div className="bg-white rounded-16 sm:bg-transparent sm:rounded-none px-16 pt-16 pb-16">
            <div className="flex items-center gap-8 mb-12">
              <span className="cds-subtitle-sm text-grey-975">{t("goals_today_title")}</span>
              <span className="cds-body-tertiary text-purple-700 bg-purple-25 px-8 py-2 rounded-32">
                {t("badge_personalized")}
              </span>
            </div>
            <ul className="flex flex-col gap-8">
              {todaysGoals.map((goal) => {
                const done = completedGoals.has(goal.id);
                const translatedText = t(goal.textKey);
                const translatedBold = goal.boldTextKey ? t(goal.boldTextKey) : "";
                const translatedSuffix = goal.suffixKey ? t(goal.suffixKey) : "";
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
                        {translatedBold ? (
                          <>
                            {translatedText.split(translatedBold)[0]}
                            <span style={{ fontWeight: 600 }}>{translatedBold}</span>
                            {translatedText.split(translatedBold)[1] ?? ""}
                            {translatedSuffix && (
                              <span className="text-grey-600"> {translatedSuffix}</span>
                            )}
                          </>
                        ) : (
                          translatedText
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
              <span className="cds-subtitle-sm text-grey-975">{t("weekly_activity_title")}</span>
              <span className="cds-body-tertiary text-purple-700 bg-purple-25 px-8 py-2 rounded-32">
                {t(weeklyActivityData.streakKey)}
              </span>
            </div>
            <p className="cds-body-secondary text-grey-600">
              {t(weeklyActivityData.messageKey)}
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
                const dayLabel = day.labelKey ? t(day.labelKey) : day.label;
                if (day.isCurrent) {
                  return (
                    <div
                      key={i}
                      className="w-32 h-32 rounded-8 bg-white border-2 border-grey-200 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="cds-body-tertiary text-grey-600">{dayLabel}</span>
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="w-32 h-32 rounded-8 bg-grey-50 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="cds-body-tertiary text-grey-600">{dayLabel}</span>
                  </div>
                );
              })}
            </div>
            <p className="cds-body-tertiary text-grey-600">
              {t(weeklyActivityData.summaryKey)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
