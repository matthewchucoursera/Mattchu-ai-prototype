import type { CourseCardData } from "../data/mockData";
import { useT } from "../contexts/LanguageContext";

interface CourseCardProps {
  course: CourseCardData;
}

export function CourseCard({ course }: CourseCardProps) {
  const t = useT();

  return (
    <div className="bg-white border border-grey-100 rounded-16 overflow-hidden flex-shrink-0 flex flex-col cursor-pointer" style={{ minWidth: 240, flex: "1 0 0" }}>
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden rounded-16" style={{ aspectRatio: "304 / 171" }}>
        <img
          src={course.thumbnail}
          alt={t(course.titleKey)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 p-8 flex-1">
        {/* Provider */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-18 border border-grey-50 rounded-4 overflow-hidden flex-shrink-0 p-2">
            <img src={course.providerLogo} alt={course.provider} className="w-full h-full object-cover rounded-2" />
          </div>
          <span className="cds-body-tertiary text-grey-600">{course.provider}</span>
        </div>

        {/* Title */}
        <p
          className="cds-subtitle-sm text-grey-975 leading-tight"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {t(course.titleKey)}
        </p>

        {/* Best for */}
        <p className="cds-body-tertiary text-grey-600" style={{ height: 54, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
          <span className="font-bold text-grey-975">Best for:</span>{" "}
          {t(course.bestForKey)}
        </p>

        {/* Footer */}
        <div className="flex flex-col gap-4 mt-auto">
          {/* Rating */}
          <div className="flex items-center gap-4">
            <span className="material-symbols-rounded text-yellow-700" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
              star
            </span>
            <span className="cds-body-tertiary text-grey-600">
              {course.rating} · {course.reviewCount} reviews
            </span>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 cds-body-tertiary text-grey-600 whitespace-nowrap">
            <span>{t(course.levelKey)}</span>
            <span>·</span>
            <span>{t(course.typeKey)}</span>
            <span>·</span>
            <span>{t(course.durationKey)}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 items-center mt-4">
            {/* Match badge — gradient pill */}
            <span
              className="inline-flex items-center justify-center px-6 rounded-full cds-body-tertiary text-white font-semibold"
              style={{
                height: 16,
                background: "linear-gradient(90deg, #d65d00 9.211%, #9c1a84 100%)",
                fontSize: "9.5px",
                lineHeight: 1,
              }}
            >
              {course.matchPercent}% match
            </span>

            {/* Tag pills */}
            {course.tagKeys.map((tagKey) => (
              <span
                key={tagKey}
                className="inline-flex items-center justify-center px-6 border border-grey-100 rounded-full text-grey-600"
                style={{ height: 16, fontSize: "9.5px", lineHeight: 1 }}
              >
                {t(tagKey)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
