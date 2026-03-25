import type { TrendingPanelData, TrendingCourseData } from "../data/mockData";

function TrendingCourseRow({ course }: { course: TrendingCourseData }) {
  return (
    <div className="bg-white rounded-8 p-8 flex gap-12 items-start cursor-pointer hover:shadow-elevation-1 transition-shadow duration-fast">
      {/* Thumbnail */}
      <div className="flex-shrink-0 size-64 rounded-4 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Provider */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 size-18 border border-grey-50 rounded-4 overflow-hidden p-2 flex items-center justify-center">
              <img
                src={course.providerLogo}
                alt={course.provider}
                className="w-full h-full object-cover rounded-2"
              />
            </div>
            <span className="cds-body-secondary text-grey-600 truncate">{course.provider}</span>
          </div>

          {/* Title */}
          <p
            className="cds-action-secondary text-grey-975 leading-tight"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", letterSpacing: "-0.042px" }}
          >
            {course.title}
          </p>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-8">
          <span className="cds-body-tertiary text-grey-600 whitespace-nowrap">{course.type}</span>
          <span className="cds-body-secondary text-grey-600">•</span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-yellow-700" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
              star
            </span>
            <span className="cds-body-tertiary text-grey-600">{course.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TrendingPanelProps {
  label: string;
  courses: TrendingPanelData["courses"];
}

export function TrendingPanel({ label, courses }: TrendingPanelProps) {
  return (
    <div
      className="flex flex-col gap-14 p-14 rounded-16 w-full md:flex-1"
      style={{ backgroundColor: "#e3eeff" }}
    >
      <p className="cds-subtitle-md text-black">{label}</p>
      <div className="flex flex-col gap-8">
        {courses.map((course) => (
          <TrendingCourseRow key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
