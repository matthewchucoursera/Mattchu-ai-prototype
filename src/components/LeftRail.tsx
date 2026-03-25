import { useState } from "react";
import { ASSETS } from "../data/mockData";

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
  hasChevron?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { icon: "home", label: "Home" },
  { icon: "explore", label: "Explore", hasChevron: true },
  { icon: "school", label: "My Learning", active: true },
  { icon: "workspace_premium", label: "Degrees" },
];

export function LeftRail() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className="hidden md:flex flex-col flex-shrink-0 bg-white border-r border-grey-100 h-screen sticky top-0 overflow-hidden z-40"
      style={{
        width: isExpanded ? 240 : 80,
        transition: "width 225ms ease",
      }}
    >
      {/* Logo + collapse toggle */}
      {isExpanded ? (
        <div className="flex items-center justify-between px-16 h-64 flex-shrink-0 border-b border-grey-100 overflow-hidden">
          <img
            src={ASSETS.courseraLogo}
            alt="Coursera"
            className="flex-shrink-0"
            style={{ height: 16, width: 113 }}
          />
          <button
            type="button"
            aria-label="Collapse navigation"
            onClick={() => setIsExpanded(false)}
            className="flex items-center justify-center w-32 h-32 rounded-full hover:bg-grey-50 text-grey-600 transition-colors duration-fast flex-shrink-0 ml-8"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              chevron_left
            </span>
          </button>
        </div>
      ) : (
        <div className="relative flex items-center h-64 flex-shrink-0 border-b border-grey-100 overflow-hidden">
          {/* C mark — centered to match nav icons below */}
          <div className="flex items-center justify-center w-40 mx-auto flex-shrink-0">
            <img
              src="/coursera-c-mark.png"
              alt="Coursera"
              style={{ width: 32, height: 32, objectFit: "contain" }}
            />
          </div>
          {/* Chevron — absolute so it doesn't shift the C mark */}
          <button
            type="button"
            aria-label="Expand navigation"
            onClick={() => setIsExpanded(true)}
            className="absolute right-8 flex items-center justify-center w-32 h-32 rounded-full hover:bg-grey-50 text-grey-600 transition-colors duration-fast"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              chevron_right
            </span>
          </button>
        </div>
      )}

      {/* Search */}
      <div className="px-12 py-12 flex-shrink-0">
        {isExpanded ? (
          <div className="relative flex items-center h-40 bg-grey-25 border border-grey-100 rounded-8 overflow-hidden">
            <span
              className="material-symbols-rounded text-grey-600 absolute left-10"
              style={{ fontSize: 16 }}
            >
              search
            </span>
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full h-full pl-32 pr-12 bg-transparent cds-body-secondary text-grey-975 placeholder:text-grey-600 outline-none"
            />
          </div>
        ) : (
          <button
            type="button"
            aria-label="Search"
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
            key={item.label}
            type="button"
            className={[
              "flex items-center gap-12 h-44 rounded-8 transition-colors duration-fast flex-shrink-0",
              isExpanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
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
            {isExpanded && (
              <>
                <span className="cds-action-secondary flex-1 text-left whitespace-nowrap">
                  {item.label}
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
          aria-label="Language"
          className={[
            "flex items-center gap-12 h-44 rounded-8 text-grey-975 hover:bg-grey-50 transition-colors duration-fast",
            isExpanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
          ].join(" ")}
        >
          <span className="material-symbols-rounded flex-shrink-0" style={{ fontSize: 20 }}>
            language
          </span>
          {isExpanded && (
            <span className="cds-action-secondary whitespace-nowrap">Language</span>
          )}
        </button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className={[
            "flex items-center gap-12 h-44 rounded-8 text-grey-975 hover:bg-grey-50 transition-colors duration-fast",
            isExpanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
          ].join(" ")}
        >
          <span className="material-symbols-rounded flex-shrink-0" style={{ fontSize: 20 }}>
            notifications
          </span>
          {isExpanded && (
            <span className="cds-action-secondary whitespace-nowrap">Notifications</span>
          )}
        </button>

        {/* Avatar / Profile */}
        <button
          type="button"
          aria-label="Profile"
          className={[
            "flex items-center gap-12 h-44 rounded-8 hover:bg-grey-50 transition-colors duration-fast",
            isExpanded ? "px-12 w-full" : "w-40 mx-auto justify-center",
          ].join(" ")}
        >
          <div className="flex items-center justify-center size-32 rounded-full bg-blue-700 text-white cds-subtitle-sm flex-shrink-0">
            M
          </div>
          {isExpanded && (
            <span className="cds-action-secondary text-grey-975 whitespace-nowrap">Matthew</span>
          )}
        </button>
      </div>
    </aside>
  );
}
