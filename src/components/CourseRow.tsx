import { useState, useEffect } from "react";
import { CourseCard } from "./CourseCard";
import type { CourseCardData } from "../data/mockData";

interface CourseRowProps {
  courses: CourseCardData[];
  title?: string;
}

const DESKTOP_PER_PAGE = 3;
const MOBILE_PER_PAGE = 1;
const SM_BREAKPOINT = 600;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= SM_BREAKPOINT
  );
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${SM_BREAKPOINT}px)`);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

export function CourseRow({ courses, title }: CourseRowProps) {
  const [mobilePage, setMobilePage] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const isDesktop = useIsDesktop();

  const totalDesktopPages = Math.ceil(courses.length / DESKTOP_PER_PAGE);
  const totalMobilePages = Math.ceil(courses.length / MOBILE_PER_PAGE);

  const currentPage = isDesktop ? desktopPage : mobilePage;
  const totalPages = isDesktop ? totalDesktopPages : totalMobilePages;
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  const setPage = isDesktop ? setDesktopPage : setMobilePage;

  const navBtnBase =
    "flex items-center justify-center w-32 h-32 rounded-full transition-colors duration-fast";
  const navBtnActive = "hover:bg-grey-50 text-grey-975";
  const navBtnDisabled = "text-grey-200 cursor-not-allowed";

  return (
    <div className="flex flex-col gap-8">
      {/* Header row: title left, controls right */}
      <div className="flex items-center justify-between gap-8">
        {title && (
          <h2 className="cds-subtitle-md text-grey-975">{title}</h2>
        )}
        <div className="flex items-center gap-8 ml-auto">
          <span className="cds-body-tertiary text-grey-600">
            {currentPage + 1} / {totalPages}
          </span>

          {/* Prev */}
          <button
            type="button"
            aria-label="Previous page"
            disabled={isFirstPage}
            onClick={() => setPage((p) => p - 1)}
            className={[navBtnBase, isFirstPage ? navBtnDisabled : navBtnActive].join(" ")}
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              chevron_left
            </span>
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next page"
            disabled={isLastPage}
            onClick={() => setPage((p) => p + 1)}
            className={[navBtnBase, isLastPage ? navBtnDisabled : navBtnActive].join(" ")}
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
              chevron_right
            </span>
          </button>
        </div>
      </div>

      {/* Mobile carousel — 1 card per page (hidden sm+) */}
      <div className="overflow-hidden sm:hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${mobilePage * (100 / totalMobilePages)}%)`,
            transition: "transform 300ms var(--ease-standard, ease)",
            width: `${totalMobilePages * 100}%`,
          }}
        >
          {Array.from({ length: totalMobilePages }).map((_, pageIdx) => (
            <div
              key={pageIdx}
              className="grid grid-cols-1 gap-16"
              style={{ width: `${100 / totalMobilePages}%`, flexShrink: 0 }}
            >
              {courses
                .slice(pageIdx * MOBILE_PER_PAGE, (pageIdx + 1) * MOBILE_PER_PAGE)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop carousel — 3 cards per page (hidden below sm) */}
      <div className="hidden sm:block overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${desktopPage * (100 / totalDesktopPages)}%)`,
            transition: "transform 300ms var(--ease-standard, ease)",
            width: `${totalDesktopPages * 100}%`,
          }}
        >
          {Array.from({ length: totalDesktopPages }).map((_, pageIdx) => (
            <div
              key={pageIdx}
              className="grid sm:grid-cols-3 gap-16"
              style={{ width: `${100 / totalDesktopPages}%`, flexShrink: 0 }}
            >
              {courses
                .slice(pageIdx * DESKTOP_PER_PAGE, (pageIdx + 1) * DESKTOP_PER_PAGE)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
