import { ASSETS } from "../data/mockData";

export function NavBar() {
  return (
    // Mobile-only top bar — hidden on md and above (LeftRail handles desktop)
    <nav className="md:hidden sticky top-0 z-50 bg-white border-b border-grey-100">
      <div className="flex items-center justify-between px-20 py-16 h-68">
        <div className="flex items-center gap-12">
          <button
            aria-label="Open menu"
            className="flex items-center justify-center size-20 text-grey-975 flex-shrink-0"
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              menu
            </span>
          </button>
          <img
            src={ASSETS.courseraLogo}
            alt="Coursera"
            className="flex-shrink-0"
            style={{ height: 15, width: 106 }}
          />
        </div>
        <button className="flex items-center justify-center px-12 py-4 border border-blue-700 text-blue-700 bg-white rounded-8 cds-action-secondary hover:bg-blue-25 transition-colors duration-fast">
          Join for free
        </button>
      </div>
    </nav>
  );
}
