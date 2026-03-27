import { useState } from "react";
import { ASSETS } from "../data/mockData";
import { useLanguage, useT } from "../contexts/LanguageContext";
import type { LangCode } from "../i18n/translations";
import type { TranslationKey } from "../i18n/translations";

const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "pt", label: "Português" },
  { code: "ar", label: "العربية" },
];

interface NavItem {
  icon: string;
  labelKey: TranslationKey;
  active?: boolean;
  hasChevron?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { icon: "home", labelKey: "nav_home" },
  { icon: "explore", labelKey: "nav_explore", hasChevron: true },
  { icon: "school", labelKey: "nav_my_learning", active: true },
  { icon: "workspace_premium", labelKey: "nav_degrees" },
];

interface LeftRailProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function LeftRail({ isMobileOpen = false, onMobileClose }: LeftRailProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [panel, setPanel] = useState<"main" | "language">("main");
  const { lang, switchLanguage } = useLanguage();
  const t = useT();

  function handleLanguageSelect(code: LangCode) {
    setPanel("main");
    switchLanguage(code);
    onMobileClose?.();
  }

  // Shared nav content used by both the desktop sidebar and the mobile drawer.
  // `expanded` controls whether labels are shown (always true in mobile drawer).
  const navContent = (expanded: boolean, isMobile = false) => (
    <>
      {/* Logo row */}
      {expanded ? (
        <div className="flex items-center justify-between px-16 h-64 flex-shrink-0 border-b border-grey-100 overflow-hidden">
          <img
            src={ASSETS.courseraLogo}
            alt="Coursera"
            className="flex-shrink-0"
            style={{ height: 16, width: 113 }}
          />
          {isMobile ? (
            <button
              type="button"
              aria-label="Close menu"
              onClick={onMobileClose}
              className="flex items-center justify-center w-32 h-32 rounded-full hover:bg-grey-50 text-grey-600 transition-colors duration-fast flex-shrink-0 ml-8"
            >
              <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
                close
              </span>
            </button>
          ) : (
            <button
              type="button"
              aria-label={t("a11y_collapse_nav")}
              onClick={() => setIsExpanded(false)}
              className="flex items-center justify-center w-32 h-32 rounded-full hover:bg-grey-50 text-grey-600 transition-colors duration-fast flex-shrink-0 ml-8"
            >
              <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
                chevron_left
              </span>
            </button>
          )}
        </div>
      ) : (
        <div className="relative flex items-center h-64 flex-shrink-0 border-b border-grey-100 overflow-hidden">
          {/* C mark — centered to match nav icons below */}
          <div className="flex items-center justify-center w-40 mx-auto flex-shrink-0">
            <img
              src="/coursera-c-mark.svg"
              alt="Coursera"
              style={{ width: 32, height: 32, objectFit: "contain" }}
            />
          </div>
          {/* Chevron — absolute so it doesn't shift the C mark */}
          <button
            type="button"
            aria-label={t("a11y_expand_nav")}
            onClick={() => setIsExpanded(true)}
            className="absolute right-8 flex items-center justify-center w-32 h-32 rounded-full hover:bg-grey-50 text-grey-600 transition-colors duration-fast"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              chevron_right
            </span>
          </button>
        </div>
      )}

      {/* Sliding panel container */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <div
          className="flex flex-1 h-full"
          style={{
            transform: panel === "language" ? "translateX(-50%)" : "translateX(0)",
            transition: "transform 225ms ease",
            width: "200%",
          }}
        >
          {/* ── Main panel ── */}
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden" style={{ width: "50%" }}>
            {/* Search */}
            <div className="px-12 py-12 flex-shrink-0">
              {expanded ? (
                <div className="relative flex items-center h-40 bg-grey-25 border border-grey-100 rounded-8 overflow-hidden">
                  <span
                    className="material-symbols-rounded text-grey-600 absolute left-10"
                    style={{ fontSize: 16 }}
                  >
                    search
                  </span>
                  <input
                    type="text"
                    placeholder={t("search_placeholder")}
                    className="w-full h-full pl-32 pr-12 bg-transparent cds-body-secondary text-grey-975 placeholder:text-grey-600 outline-none"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  aria-label={t("a11y_search")}
                  className="flex items-center justify-center w-40 h-40 rounded-8 hover:bg-grey-50 text-grey-600 mx-auto transition-colors duration-fast"
                >
                  <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
                    search
                  </span>
                </button>
              )}
            </div>

            {/* Primary nav items */}
            <nav className="flex-1 flex flex-col gap-2 px-8 overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.labelKey}
                  type="button"
                  className={[
                    "flex items-center gap-12 h-44 rounded-8 transition-colors duration-fast flex-shrink-0",
                    expanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
                    item.active
                      ? "bg-blue-25 text-blue-700"
                      : "text-grey-975 hover:bg-grey-50",
                  ].join(" ")}
                >
                  <span
                    className="material-symbols-rounded flex-shrink-0"
                    style={{
                      fontSize: 20,
                      fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    {item.icon}
                  </span>
                  {expanded && (
                    <>
                      <span className="cds-action-secondary flex-1 text-left whitespace-nowrap">
                        {t(item.labelKey)}
                      </span>
                      {item.hasChevron && (
                        <span
                          className="material-symbols-rounded text-grey-600 flex-shrink-0"
                          style={{ fontSize: 16 }}
                        >
                          expand_more
                        </span>
                      )}
                    </>
                  )}
                </button>
              ))}
            </nav>

            {/* Bottom items */}
            <div className="flex flex-col gap-2 px-8 pb-12 flex-shrink-0 border-t border-grey-100 pt-12">
              {/* Language */}
              <button
                type="button"
                aria-label={t("language_label")}
                onClick={() => { if (expanded) setPanel("language"); }}
                className={[
                  "flex items-center gap-12 h-44 rounded-8 text-grey-975 hover:bg-grey-50 transition-colors duration-fast",
                  expanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
                ].join(" ")}
              >
                <span className="material-symbols-rounded flex-shrink-0" style={{ fontSize: 20 }}>
                  language
                </span>
                {expanded && (
                  <>
                    <span className="cds-action-secondary flex-1 text-left whitespace-nowrap">
                      {LANGUAGES.find((l) => l.code === lang)?.label ?? t("language_label")}
                    </span>
                    <span className="material-symbols-rounded text-grey-600 flex-shrink-0" style={{ fontSize: 16 }}>
                      chevron_right
                    </span>
                  </>
                )}
              </button>

              {/* Notifications */}
              <button
                type="button"
                aria-label={t("a11y_notifications")}
                className={[
                  "flex items-center gap-12 h-44 rounded-8 text-grey-975 hover:bg-grey-50 transition-colors duration-fast",
                  expanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
                ].join(" ")}
              >
                <span className="material-symbols-rounded flex-shrink-0" style={{ fontSize: 20 }}>
                  notifications
                </span>
                {expanded && (
                  <span className="cds-action-secondary whitespace-nowrap">{t("notifications_label")}</span>
                )}
              </button>

              {/* Avatar / Profile */}
              <button
                type="button"
                aria-label={t("a11y_profile")}
                className={[
                  "flex items-center gap-12 h-44 rounded-8 hover:bg-grey-50 transition-colors duration-fast",
                  expanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
                ].join(" ")}
              >
                <div className="flex items-center justify-center size-32 rounded-full bg-blue-700 text-white cds-subtitle-sm flex-shrink-0">
                  M
                </div>
                {expanded && (
                  <span className="cds-action-secondary text-grey-975 whitespace-nowrap">{t("profile_name")}</span>
                )}
              </button>
            </div>
          </div>

          {/* ── Language panel ── */}
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden" style={{ width: "50%" }}>
            {/* Back header */}
            <button
              type="button"
              onClick={() => setPanel("main")}
              className="flex items-center gap-8 px-16 h-48 flex-shrink-0 border-b border-grey-100 text-grey-975 hover:bg-grey-50 transition-colors duration-fast"
            >
              <span className="material-symbols-rounded text-grey-600 flex-shrink-0" style={{ fontSize: 20 }}>
                arrow_back
              </span>
              <span className="cds-action-secondary">{t("language_label")}</span>
            </button>

            {/* Language list */}
            <nav className="flex-1 flex flex-col gap-2 px-8 py-8 overflow-y-auto">
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => handleLanguageSelect(language.code)}
                  className={[
                    "flex items-center justify-between gap-12 h-44 px-12 rounded-8 transition-colors duration-fast w-full",
                    lang === language.code
                      ? "bg-blue-25 text-blue-700"
                      : "text-grey-975 hover:bg-grey-50",
                  ].join(" ")}
                >
                  <span className="cds-action-secondary text-left whitespace-nowrap">{language.label}</span>
                  {lang === language.code && (
                    <span className="material-symbols-rounded text-blue-700 flex-shrink-0" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>
                      check
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ── Desktop sidebar (md+) ── */}
      <aside
        className="hidden md:flex flex-col flex-shrink-0 bg-white border-r border-grey-100 h-screen sticky top-0 overflow-hidden z-40"
        style={{
          width: isExpanded ? 240 : 80,
          transition: "width 225ms ease",
        }}
      >
        {navContent(isExpanded, false)}
      </aside>

      {/* ── Mobile drawer overlay (< md) ── */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-darken-500 z-40 transition-opacity duration-normal"
          style={{
            opacity: isMobileOpen ? 1 : 0,
            pointerEvents: isMobileOpen ? "auto" : "none",
          }}
          onClick={onMobileClose}
          aria-hidden="true"
        />
        {/* Drawer panel */}
        <div
          className="fixed top-0 left-0 h-full bg-white z-50 flex flex-col overflow-hidden shadow-elevation-3"
          style={{
            width: 280,
            transform: isMobileOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 225ms ease",
          }}
        >
          {navContent(true, true)}
        </div>
      </div>
    </>
  );
}
