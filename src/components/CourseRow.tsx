import { CourseCard } from "./CourseCard";
import type { CourseCardData } from "../data/mockData";

interface CourseRowProps {
  courses: CourseCardData[];
}

export function CourseRow({ courses }: CourseRowProps) {
  return (
    <div className="flex gap-16 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
