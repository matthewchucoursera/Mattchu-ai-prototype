// ─── Dashboard data ───────────────────────────────────────────────────────────

export interface SkillData {
  name: string;
  completed: number;
  total: number;
}

export const skills: SkillData[] = [
  { name: "Data Storytelling", completed: 13, total: 13 },
  { name: "Literacy & Integrity", completed: 1, total: 10 },
  { name: "Social Media Strategy", completed: 4, total: 9 },
  { name: "Email Marketing", completed: 3, total: 8 },
  { name: "Digital Marketing", completed: 4, total: 9 },
  { name: "Wireframing", completed: 3, total: 8 },
  { name: "AI tools", completed: 4, total: 9 },
];

export interface CertificateData {
  id: string;
  title: string;
  primaryAction: string;
  secondaryAction: string;
  useGoogleLogo?: boolean;
  localLogo?: string;
}

export const recentCertificates: CertificateData[] = [
  {
    id: "cert-1",
    title: "Gen AI Foundations Learning Path",
    primaryAction: "Add to LinkedIn",
    secondaryAction: "View badge",
    localLogo: "/genai-badge.png",
  },
  {
    id: "cert-2",
    title: "Google Data Analyst Professional Certificate",
    primaryAction: "Add to LinkedIn",
    secondaryAction: "View certificate",
    localLogo: "/google-badge.png",
  },
];

export const calendarConfig = {
  year: 2026,
  month: 0, // January
  monthLabel: "January 2026",
  dotsOn: [3, 11] as number[],
  barsOn: [4, 5, 6, 17, 18, 19, 20] as number[],
  selectedDay: 23,
};

export const januaryStats = {
  dateLabel: "January 23 stats",
  minutesLearned: 50,
  itemsCompleted: 20,
  highestGrade: "85.5%",
};

export const todaysGoals = [
  { id: "g1", text: "Complete any 5 learning items", suffix: "· 0/5", boldText: "5 learning items" },
  { id: "g2", text: "Complete 1 practice item", suffix: "", boldText: "" },
];

export const weeklyActivityData = {
  streak: "1 week streak",
  message: "Way to go! You've exceeded your learning target by 2 days this week.",
  days: [
    { label: "", completed: true, isCurrent: false },
    { label: "", completed: true, isCurrent: false },
    { label: "", completed: true, isCurrent: false },
    { label: "", completed: true, isCurrent: false },
    { label: "Sa", completed: false, isCurrent: true },
    { label: "Su", completed: false, isCurrent: false },
    { label: "Mo", completed: false, isCurrent: false },
  ],
  summary: "3 items completed · 10 minutes learned",
};

export const leaderboardData = [
  { rank: 1, name: "Alex M.", points: 320, isYou: false, avatarColor: "bg-green-100 text-green-700" },
  { rank: 2, name: "Jordan K.", points: 290, isYou: false, avatarColor: "bg-purple-100 text-purple-700" },
  { rank: 3, name: "You", points: 210, isYou: true, avatarColor: "bg-blue-100 text-blue-700" },
  { rank: 4, name: "Sam T.", points: 180, isYou: false, avatarColor: "bg-yellow-100 text-yellow-700" },
];

export const skillDomains = [
  {
    id: "data",
    label: "Data",
    skills: [
      { id: "sql", name: "SQL", tier: "Advanced", xp: 2800, xpToNext: 5000 },
      { id: "data-analysis", name: "Data Analysis", tier: "Intermediate", xp: 1240, xpToNext: 2000 },
      { id: "data-viz", name: "Data Visualization", tier: "Beginner", xp: 340, xpToNext: 1000 },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    skills: [
      { id: "python", name: "Python", tier: "Intermediate", xp: 1800, xpToNext: 2000 },
      { id: "r", name: "R", tier: "Beginner", xp: 200, xpToNext: 1000 },
    ],
  },
  {
    id: "business",
    label: "Business",
    skills: [
      { id: "project-mgmt", name: "Project Management", tier: "Expert", xp: 4200, xpToNext: 5000 },
      { id: "communication", name: "Communication", tier: "Advanced", xp: 3100, xpToNext: 5000 },
    ],
  },
];

// ─── Assets ───────────────────────────────────────────────────────────────────

export const ASSETS = {
  courseraLogo: "https://www.figma.com/api/mcp/asset/5e651512-f2a9-455b-9e75-5c75c9f3efb3",
  coursePreview: "https://www.figma.com/api/mcp/asset/c214ae2f-98c7-4b6c-b0b3-74379c5b0835",
  rocketIcon: "https://www.figma.com/api/mcp/asset/460abfc5-6734-459c-bf83-0201facd77df",
  googleLogo: "https://www.figma.com/api/mcp/asset/4f5e211b-1bbe-4ecb-a1f6-af971b5a7fd6",
  microsoftLogo: "https://www.figma.com/api/mcp/asset/0727f03d-83cc-4db4-86dc-c3b4b3d8c1b6",
  metaLogo: "https://www.figma.com/api/mcp/asset/9d8f3cd4-a2b4-47ea-acf2-91b7043cac4b",
  ibmLogo: "https://www.figma.com/api/mcp/asset/8b9eacd4-c421-402c-9381-c50ea5e1e29d",
  uiLogo: "https://www.figma.com/api/mcp/asset/d33c82bf-d455-4fab-a725-612443529b74",
  vanderbiltLogo: "https://www.figma.com/api/mcp/asset/d09d48d6-7a16-4037-a684-55643d541e5b",
  macquarieLogo: "https://www.figma.com/api/mcp/asset/7fae0293-84ed-461c-a9df-ed23de69c334",
};

export interface CourseCardData {
  id: string;
  title: string;
  provider: string;
  providerLogo: string;
  thumbnail: string;
  rating: number;
  reviewCount: string;
  level: string;
  type: string;
  duration: string;
  matchPercent: number;
  tags: string[];
  bestFor: string;
}

export interface TrendingCourseData {
  id: string;
  title: string;
  provider: string;
  providerLogo: string;
  thumbnail: string;
  type: string;
  rating: number;
}

export interface TrendingPanelData {
  label: string;
  courses: TrendingCourseData[];
}

export const skillRecommendationCourses: CourseCardData[] = [
  {
    id: "1",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/5df463e3-1095-4c3b-b9ed-596c78a07667",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "2",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/8bd35774-c5f0-4701-8536-678f99f1e827",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "3",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/e1ad5770-dbc9-44d5-8dea-3d7a440e0d97",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "4",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/df702f8d-838f-4be1-ae30-dd8d1a8d9e37",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
];

export const trendingPanels: TrendingPanelData[] = [
  {
    label: "Most popular",
    courses: [
      {
        id: "t1-1",
        title: "Google AI Essentials",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/8c8b9801-c76c-4b3c-b1a8-f5ec98c66790",
        type: "Specialization",
        rating: 4.9,
      },
      {
        id: "t1-2",
        title: "Agentic AI and AI Agents for Leaders",
        provider: "Microsoft",
        providerLogo: ASSETS.microsoftLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/2e5bffa3-f898-4ea7-9c17-d6e340deb41c",
        type: "Course",
        rating: 4.9,
      },
      {
        id: "t1-3",
        title: "Agentic AI and AI Agents for Leaders",
        provider: "Meta",
        providerLogo: ASSETS.metaLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/40139d60-1231-474a-b6d3-214769a944e1",
        type: "Course",
        rating: 4.9,
      },
    ],
  },
  {
    label: "Weekly spotlight",
    courses: [
      {
        id: "t2-1",
        title: "Successful Negotiation: Essential Strat..",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/57f19d88-dce3-47fa-8567-3ec6124c78cf",
        type: "Professional Certificate",
        rating: 4.9,
      },
      {
        id: "t2-2",
        title: "Successful Negotiation: Essential Strat..",
        provider: "IBM",
        providerLogo: ASSETS.ibmLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/13a69fc2-df2b-4afc-bf26-702b3b010045",
        type: "Professional Certificate",
        rating: 4.9,
      },
      {
        id: "t2-3",
        title: "Successful Negotiation: Essential Strat..",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/73970ea2-3c24-44c3-983f-6fe39dfcbae7",
        type: "Professional Certificate",
        rating: 4.9,
      },
    ],
  },
  {
    label: "In-demand AI skills",
    courses: [
      {
        id: "t3-1",
        title: "Excel Skills for Business Specialization",
        provider: "University of Illinois",
        providerLogo: ASSETS.uiLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/1104f1af-6cfb-4c31-a428-eef6592359e7",
        type: "Specialization",
        rating: 4.9,
      },
      {
        id: "t3-2",
        title: "Prompt Engineering for ChatGPT",
        provider: "Vanderbilt University",
        providerLogo: ASSETS.vanderbiltLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/75b18e69-32f9-42f3-947b-d993cd99ae09",
        type: "Course",
        rating: 4.9,
      },
      {
        id: "t3-3",
        title: "Strategic Leadership and Management...",
        provider: "Macquarie University",
        providerLogo: ASSETS.macquarieLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/5564a241-1927-46a8-919e-2e1a7c9064f8",
        type: "Course",
        rating: 4.9,
      },
    ],
  },
];
