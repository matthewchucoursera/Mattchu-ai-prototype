import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { LeftRail } from "./components/LeftRail";
import { ProgressBanner } from "./components/ProgressBanner";
import { CalendarWidget } from "./components/CalendarWidget";
import { CourseRow } from "./components/CourseRow";
import { SkillsTab } from "./components/SkillsTab";
import { useT, useDateLocale } from "./contexts/LanguageContext";
import {
  ASSETS,
  skills,
  recentCertificates,
  skillRecommendationCourses,
  leaderboardData,
} from "./data/mockData";

const TAB_KEYS = ["tab_overview", "tab_skills", "tab_in_progress", "tab_saved", "tab_certificates"] as const;
type TabKey = (typeof TAB_KEYS)[number];

// Build a human-readable date string for the digest header
function getTodayLabel(locale: string) {
  return new Date().toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("tab_overview");
  const [mounted, setMounted] = useState(false);
  const t = useT();
  const dateLocale = useDateLocale();

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    // Root: flex-row so LeftRail sits beside the scrollable content area
    <div className="flex min-h-screen bg-grey-25">

      {/* Mobile top bar (md:hidden) */}
      <NavBar />

      {/* Desktop left rail (hidden on mobile) */}
      <LeftRail />

      {/* Main content column — scrolls independently of the rail */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Digest header ── */}
        <header className="hidden md:flex items-center justify-between gap-24 bg-white border-b border-grey-100 px-32 py-16 flex-shrink-0">
          <div className="flex flex-col gap-2">
            <p className="cds-body-tertiary text-grey-600">{getTodayLabel(dateLocale)}</p>
            <p className="cds-subtitle-md text-grey-975">{t("greeting_morning_name")}</p>
          </div>
          <div className="flex items-center gap-12">
            {/* Learning streak */}
            <div className="flex items-center gap-6 px-12 py-6 bg-yellow-50 rounded-32">
              <span
                className="material-symbols-rounded text-yellow-800 flex-shrink-0"
                style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <span className="cds-body-secondary text-yellow-800 whitespace-nowrap">
                {t("streak_days")}
              </span>
            </div>

            {/* Leaderboard chip */}
            {(() => {
              const me = leaderboardData.find((e) => e.isYou);
              if (!me) return null;
              return (
                <div className="relative group">
                  {/* Chip */}
                  <div className="flex items-center gap-6 px-12 py-6 bg-purple-25 rounded-32 cursor-default select-none">
                    <span
                      className="material-symbols-rounded text-purple-700 flex-shrink-0"
                      style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}
                    >
                      emoji_events
                    </span>
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-700 text-white flex-shrink-0" style={{ fontSize: 11, fontWeight: 600 }}>
                      M
                    </div>
                    <span className="cds-body-secondary text-purple-700 whitespace-nowrap">
                      {t("leaderboard_rank_prefix")} {me.rank}
                    </span>
                  </div>

                  {/* Hover dropdown */}
                  <div className="absolute right-0 top-full mt-4 w-[232px] bg-white rounded-16 shadow-elevation-2 border border-grey-100 p-12 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-[opacity,transform] duration-normal ease-entrance z-50">
                    <p className="cds-body-tertiary text-grey-600 mb-8 px-8">{t("leaderboard_dropdown_subtitle")}</p>
                    <div className="flex flex-col gap-2">
                      {leaderboardData.map((entry) => (
                        <div
                          key={entry.rank}
                          className={[
                            "flex items-center gap-8 px-8 py-6 rounded-8",
                            entry.isYou ? "bg-blue-25" : "",
                          ].join(" ")}
                        >
                          <span className="cds-body-tertiary text-grey-600 w-12 text-right flex-shrink-0">
                            {entry.rank}
                          </span>
                          <div
                            className={[
                              "w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 cds-body-tertiary",
                              entry.avatarColor,
                            ].join(" ")}
                          >
                            {entry.isYou ? t("leaderboard_you")[0] : entry.name[0]}
                          </div>
                          <span
                            className={[
                              "cds-body-secondary flex-1 min-w-0 truncate",
                              entry.isYou ? "text-blue-700" : "text-grey-975",
                            ].join(" ")}
                          >
                            {entry.isYou ? t("leaderboard_you") : entry.name}
                          </span>
                          <span className="cds-body-tertiary text-grey-600 flex-shrink-0">
                            {entry.points} {t("points_abbr")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </header>

        {/* ── Scrollable feed ── */}
        <main className="flex-1 overflow-y-auto">

          {/* "Up next" section — grey bg container with the ProgressBanner card inside */}
          <div className="bg-grey-25 px-16 sm:px-32 pt-24 pb-24">
            <ProgressBanner
              progressPercent={46}
            />
          </div>

          {/* ── Tabs + content section ── */}
          <section className="bg-white min-h-screen">

            {/* Tab bar */}
            <div className="border-b border-grey-100">
              <div className="px-16 sm:px-32">
                <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                  {TAB_KEYS.map((tabKey) => (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setActiveTab(tabKey)}
                      className={[
                        "flex-shrink-0 pb-12 pt-16 mr-24 cds-action-secondary transition-colors duration-fast whitespace-nowrap",
                        activeTab === tabKey
                          ? "text-grey-975 border-b-2 border-grey-975 -mb-px"
                          : "text-grey-600 hover:text-grey-975",
                      ].join(" ")}
                    >
                      {t(tabKey)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab content — remounted on every tab switch for entrance animation */}
            <div key={activeTab} className="px-16 sm:px-32">
            {activeTab === "tab_skills" ? (
                <SkillsTab />
              ) : (
              <div className="flex flex-col sm:flex-row sm:gap-32 py-24 sm:py-32 animate-entrance">

                {/* ── Left / main column ── */}
                <div className="flex-1 min-w-0 flex flex-col gap-24">

                  {/* Skill progress bars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-16">
                    {skills.map((skill, index) => {
                      const pct = Math.round((skill.completed / skill.total) * 100);
                      const isComplete = skill.completed === skill.total;
                      return (
                        <div key={skill.name + index} className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <span className="cds-body-secondary text-grey-975">
                              {t(skill.nameKey)}
                            </span>
                            <div className="flex items-center gap-4 flex-shrink-0">
                              <span className="cds-body-tertiary text-grey-600">
                                {skill.completed}/{skill.total}
                              </span>
                              <div
                                className={[
                                  "w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0",
                                  isComplete ? "bg-purple-700" : "border border-grey-200",
                                ].join(" ")}
                              >
                                <span
                                  className={[
                                    "material-symbols-rounded",
                                    isComplete ? "text-white" : "text-grey-400",
                                  ].join(" ")}
                                  style={{
                                    fontSize: 12,
                                    fontVariationSettings: isComplete ? "'FILL' 1" : "'FILL' 0",
                                  }}
                                >
                                  star
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="h-8 bg-grey-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-purple-700 rounded-full"
                              style={{
                                width: mounted ? `${pct}%` : "0%",
                                transition: "width 600ms ease",
                                transitionDelay: `${index * 60}ms`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Learners like you also took these */}
                  <CourseRow
                    title={t("course_row_learners_like_you")}
                    courses={skillRecommendationCourses}
                  />

                  {/* Recent certificates */}
                  <div>
                    <h2 className="cds-subtitle-md text-grey-975 mb-16">
                      {t("heading_recent_certificates")}
                    </h2>
                    <div className="flex flex-col">
                      {recentCertificates.map((cert, i) => (
                        <div key={cert.id}>
                          {i > 0 && <div className="border-t border-grey-100" />}
                          <div className="flex items-start gap-24 pt-8 pb-16 rounded-16 -mx-16 px-16 hover:bg-grey-25 transition-colors duration-normal cursor-pointer">
                            <div className="relative w-64 h-64 rounded-8 bg-grey-50 border border-grey-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                              <img
                                src={
                                  cert.localLogo
                                    ? cert.localLogo
                                    : cert.useGoogleLogo
                                      ? ASSETS.googleLogo
                                      : ASSETS.courseraLogo
                                }
                                alt=""
                                className={
                                  cert.localLogo
                                    ? "absolute inset-0 w-full h-full object-cover scale-[1.35]"
                                    : "w-full h-full object-contain p-8"
                                }
                              />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col gap-8">
                              <p className="cds-subtitle-sm text-grey-975">{t(cert.titleKey)}</p>
                              <div className="flex items-center gap-8">
                                <button
                                  type="button"
                                  className="cds-action-secondary text-blue-700 hover:text-blue-800 transition-colors duration-fast"
                                >
                                  {t(cert.primaryActionKey)}
                                </button>
                                <button
                                  type="button"
                                  className="cds-action-secondary text-blue-700 hover:text-blue-800 transition-colors duration-fast"
                                >
                                  {t(cert.secondaryActionKey)}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calendar — mobile only */}
                  <div className="sm:hidden">
                    <CalendarWidget />
                  </div>
                </div>

                {/* ── Right column — desktop only ── */}
                <div className="hidden sm:block flex-shrink-0" style={{ width: 426 }}>
                  <CalendarWidget />
                </div>
              </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
