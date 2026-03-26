/** Shimmer block — all skeleton shapes are built from this */
function Bone({ className }: { className: string }) {
  return <div className={`bg-grey-100 animate-pulse rounded-8 ${className}`} />;
}

export function SkeletonScreen() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

      {/* ── Header skeleton ── */}
      <div className="hidden md:flex items-center justify-between gap-24 bg-white border-b border-grey-100 px-32 py-16 flex-shrink-0 h-64">
        <div className="flex flex-col gap-8">
          <Bone className="h-12 w-[120px] rounded-full" />
          <Bone className="h-16 w-[200px] rounded-full" />
        </div>
        <div className="flex items-center gap-12">
          <Bone className="h-32 w-[120px] rounded-32" />
          <Bone className="h-32 w-[100px] rounded-32" />
        </div>
      </div>

      {/* ── Scrollable area skeleton ── */}
      <div className="flex-1 overflow-y-auto">

        {/* Progress banner area */}
        <div className="bg-grey-25 px-16 sm:px-32 pt-24 pb-24">
          {/* Path title */}
          <Bone className="h-28 w-[320px] mb-16 rounded-full" />

          {/* Two cards side by side */}
          <div className="flex flex-col gap-24 sm:flex-row sm:items-stretch">
            {/* Left card */}
            <div className="flex-1 bg-white border border-grey-100 rounded-16 p-24 flex flex-col gap-16 min-w-0">
              <div className="flex flex-col gap-16 sm:flex-row sm:items-center sm:gap-12">
                {/* Info column */}
                <div className="flex flex-col gap-16 sm:flex-shrink-0 sm:w-[349px]">
                  <Bone className="h-67 w-67 rounded-full" />
                  <div className="flex flex-col gap-8">
                    <Bone className="h-16 w-[260px] rounded-full" />
                    <Bone className="h-14 w-[200px] rounded-full" />
                  </div>
                  <Bone className="h-36 w-[140px] rounded-8" />
                </div>
                {/* Video placeholder */}
                <Bone className="h-[206px] w-full sm:flex-1 rounded-8" />
              </div>
            </div>

            {/* Right card */}
            <div className="flex flex-col gap-12 sm:gap-0 sm:flex-shrink-0 sm:w-[321px] bg-white border border-grey-100 rounded-16 overflow-hidden">
              {/* Fun fact */}
              <div className="px-16 pt-16 pb-16 flex flex-col gap-8">
                <Bone className="h-16 w-[140px] rounded-full" />
                <Bone className="h-12 w-full rounded-full" />
                <Bone className="h-12 w-[80%] rounded-full" />
                <Bone className="h-12 w-[60%] rounded-full" />
              </div>
              <div className="border-t border-grey-100" />
              {/* Goals */}
              <div className="px-16 pt-16 pb-16 flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <Bone className="h-16 w-[110px] rounded-full" />
                  <Bone className="h-20 w-[80px] rounded-32" />
                </div>
                <div className="flex flex-col gap-10">
                  <Bone className="h-14 w-full rounded-full" />
                  <Bone className="h-14 w-[75%] rounded-full" />
                </div>
              </div>
              <div className="border-t border-grey-100" />
              {/* Weekly activity */}
              <div className="px-16 pt-16 pb-16 flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <Bone className="h-16 w-[120px] rounded-full" />
                  <Bone className="h-20 w-[90px] rounded-32" />
                </div>
                <Bone className="h-12 w-full rounded-full" />
                <div className="flex gap-4">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <Bone key={i} className="h-32 w-32 rounded-8 flex-shrink-0" />
                  ))}
                </div>
                <Bone className="h-12 w-[180px] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs skeleton */}
        <div className="bg-white border-b border-grey-100 px-16 sm:px-32 py-16 flex gap-24">
          {[100, 60, 80, 55, 90].map((w, i) => (
            <Bone key={i} className={`h-14 w-[${w}px] rounded-full`} />
          ))}
        </div>

        {/* Tab content skeleton */}
        <div className="bg-white px-16 sm:px-32 py-24 sm:py-32 min-h-screen">
          <div className="flex flex-col sm:flex-row sm:gap-32">
            {/* Left column */}
            <div className="flex-1 min-w-0 flex flex-col gap-24">
              {/* Skill bars grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-16">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <Bone className="h-14 w-[120px] rounded-full" />
                      <Bone className="h-14 w-[40px] rounded-full" />
                    </div>
                    <Bone className="h-8 w-full rounded-full" />
                  </div>
                ))}
              </div>

              {/* Course row heading */}
              <div className="flex flex-col gap-16">
                <Bone className="h-16 w-[260px] rounded-full" />
                <div className="grid sm:grid-cols-3 gap-16">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-8 border border-grey-100 rounded-16 overflow-hidden">
                      <Bone className="h-[120px] w-full rounded-none" />
                      <div className="p-8 flex flex-col gap-8">
                        <Bone className="h-12 w-[80px] rounded-full" />
                        <Bone className="h-14 w-full rounded-full" />
                        <Bone className="h-14 w-[70%] rounded-full" />
                        <Bone className="h-12 w-full rounded-full" />
                        <Bone className="h-12 w-[60%] rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div className="flex flex-col gap-16">
                <Bone className="h-16 w-[180px] rounded-full" />
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-24 py-8">
                    <Bone className="h-64 w-64 rounded-8 flex-shrink-0" />
                    <div className="flex flex-col gap-8 flex-1">
                      <Bone className="h-14 w-[240px] rounded-full" />
                      <div className="flex gap-8">
                        <Bone className="h-14 w-[110px] rounded-full" />
                        <Bone className="h-14 w-[90px] rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — calendar placeholder, desktop only */}
            <div className="hidden sm:flex flex-col gap-16 flex-shrink-0" style={{ width: 426 }}>
              <Bone className="h-16 w-[140px] rounded-full" />
              <Bone className="h-[340px] w-full rounded-16" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
