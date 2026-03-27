export type LangCode = "en" | "es" | "fr" | "de" | "zh" | "ja" | "pt" | "ar";

export type TranslationKey =
  // Header / greeting
  | "greeting_morning_name"
  | "streak_days"
  | "leaderboard_rank_prefix"
  | "points_abbr"
  | "leaderboard_dropdown_subtitle"
  // Tabs
  | "tab_overview"
  | "tab_skills"
  | "tab_in_progress"
  | "tab_saved"
  | "tab_certificates"
  // Progress banner
  | "path_name"
  | "course_title"
  | "cert_name"
  | "cta_resume_learning"
  // Fun fact
  | "fun_fact_title"
  | "fun_fact_body"
  // Goals
  | "goals_today_title"
  | "badge_personalized"
  | "goal_complete_five_items"
  | "goal_five_learning_items_bold"
  | "goal_suffix_progress"
  | "goal_complete_one_practice"
  // Weekly activity
  | "weekly_activity_title"
  | "weekly_streak"
  | "weekly_message"
  | "weekly_summary"
  | "day_sa"
  | "day_su"
  | "day_mo"
  // Course row
  | "course_row_learners_like_you"
  // Certificates
  | "heading_recent_certificates"
  | "cert_title_gen_ai"
  | "cert_title_google_data"
  | "action_add_to_linkedin"
  | "action_view_badge"
  | "action_view_certificate"
  // Skills / XP
  | "xp_total_earned_label"
  | "xp_suffix"
  | "tier_beginner"
  | "tier_intermediate"
  | "tier_advanced"
  | "tier_expert"
  | "domain_data"
  | "domain_programming"
  | "domain_business"
  | "skill_sql"
  | "skill_data_analysis"
  | "skill_data_visualization"
  | "skill_python"
  | "skill_r_lang"
  | "skill_project_management"
  | "skill_communication"
  // Overview skill bars
  | "skill_data_storytelling"
  | "skill_literacy_integrity"
  | "skill_social_media_strategy"
  | "skill_email_marketing"
  | "skill_digital_marketing"
  | "skill_wireframing"
  | "skill_ai_tools"
  // Courses
  | "course_applied_swe"
  | "course_ibm_data_science"
  | "course_prompt_engineering"
  | "course_best_for_swe"
  | "course_best_for_ibm"
  | "course_best_for_prompt"
  | "level_beginner"
  | "course_type_degree"
  | "course_type_professional_certificate"
  | "course_type_course"
  | "duration_3_6_months"
  | "duration_1_3_months"
  | "tag_ai_skills"
  | "tag_data_science"
  // Left rail
  | "nav_home"
  | "nav_explore"
  | "nav_my_learning"
  | "nav_degrees"
  | "search_placeholder"
  | "language_label"
  | "notifications_label"
  | "profile_name"
  | "a11y_collapse_nav"
  | "a11y_expand_nav"
  | "a11y_search"
  | "a11y_notifications"
  | "a11y_profile"
  // Leaderboard
  | "leaderboard_you"
  | "leaderboard_week_team";

type Translations = Record<LangCode, Record<TranslationKey, string>>;

const en: Record<TranslationKey, string> = {
  // Header
  greeting_morning_name: "Good morning, Matthew",
  streak_days: "25-day streak",
  leaderboard_rank_prefix: "Rank",
  points_abbr: "pts",
  leaderboard_dropdown_subtitle: "This week · Team of 12",
  // Tabs
  tab_overview: "Overview",
  tab_skills: "Skills",
  tab_in_progress: "In progress",
  tab_saved: "Saved",
  tab_certificates: "Certificates",
  // Progress banner
  path_name: "Grow your product designer skills",
  course_title: "Showcase leadership through public speaking",
  cert_name: "Public Speaking 101",
  cta_resume_learning: "Resume learning",
  // Fun fact
  fun_fact_title: "Daily fun fact",
  fun_fact_body:
    "The average person will spend about 6 months of their life waiting for red lights to turn green — that's 1,800 hours of potential learning time.",
  // Goals
  goals_today_title: "Today's goals",
  badge_personalized: "Personalized",
  goal_complete_five_items: "Complete any 5 learning items",
  goal_five_learning_items_bold: "5 learning items",
  goal_suffix_progress: "· 0/5",
  goal_complete_one_practice: "Complete 1 practice item",
  // Weekly activity
  weekly_activity_title: "Weekly activity",
  weekly_streak: "1 week streak",
  weekly_message: "Way to go! You've exceeded your learning target by 2 days this week.",
  weekly_summary: "3 items completed · 10 minutes learned",
  day_sa: "Sa",
  day_su: "Su",
  day_mo: "Mo",
  // Course row
  course_row_learners_like_you: "Learners like you also took these",
  // Certificates
  heading_recent_certificates: "Recent certificates",
  cert_title_gen_ai: "Gen AI Foundations Learning Path",
  cert_title_google_data: "Google Data Analyst Professional Certificate",
  action_add_to_linkedin: "Add to LinkedIn",
  action_view_badge: "View badge",
  action_view_certificate: "View certificate",
  // Skills XP
  xp_total_earned_label: "Total XP earned",
  xp_suffix: "XP",
  tier_beginner: "Beginner",
  tier_intermediate: "Intermediate",
  tier_advanced: "Advanced",
  tier_expert: "Expert",
  domain_data: "Data",
  domain_programming: "Programming",
  domain_business: "Business",
  skill_sql: "SQL",
  skill_data_analysis: "Data Analysis",
  skill_data_visualization: "Data Visualization",
  skill_python: "Python",
  skill_r_lang: "R",
  skill_project_management: "Project Management",
  skill_communication: "Communication",
  // Overview skill bars
  skill_data_storytelling: "Data Storytelling",
  skill_literacy_integrity: "Literacy & Integrity",
  skill_social_media_strategy: "Social Media Strategy",
  skill_email_marketing: "Email Marketing",
  skill_digital_marketing: "Digital Marketing",
  skill_wireframing: "Wireframing",
  skill_ai_tools: "AI tools",
  // Courses
  course_applied_swe: "Applied Software Engineering Fundamentals Specialization",
  course_ibm_data_science: "IBM Data Science Professional Certificate",
  course_prompt_engineering: "Prompt Engineering for ChatGPT",
  course_best_for_swe:
    "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  course_best_for_ibm:
    "Anyone looking to build foundational data science skills with hands-on Python and SQL projects",
  course_best_for_prompt:
    "Professionals and students who want to master prompt engineering to get better results from AI tools",
  level_beginner: "Beginner",
  course_type_degree: "Degree",
  course_type_professional_certificate: "Professional Certificate",
  course_type_course: "Course",
  duration_3_6_months: "3-6 months",
  duration_1_3_months: "1-3 months",
  tag_ai_skills: "AI Skills",
  tag_data_science: "Data Science",
  // Left rail
  nav_home: "Home",
  nav_explore: "Explore",
  nav_my_learning: "My Learning",
  nav_degrees: "Degrees",
  search_placeholder: "What do you want to learn?",
  language_label: "Language",
  notifications_label: "Notifications",
  profile_name: "Matthew",
  a11y_collapse_nav: "Collapse navigation",
  a11y_expand_nav: "Expand navigation",
  a11y_search: "Search",
  a11y_notifications: "Notifications",
  a11y_profile: "Profile",
  // Leaderboard
  leaderboard_you: "You",
  leaderboard_week_team: "This week · Team of 12",
};

const es: Record<TranslationKey, string> = {
  // Header
  greeting_morning_name: "Buenos días, Matthew",
  streak_days: "Racha de 25 días",
  leaderboard_rank_prefix: "Puesto",
  points_abbr: "pts",
  leaderboard_dropdown_subtitle: "Esta semana · Equipo de 12",
  // Tabs
  tab_overview: "Resumen",
  tab_skills: "Habilidades",
  tab_in_progress: "En progreso",
  tab_saved: "Guardado",
  tab_certificates: "Certificados",
  // Progress banner
  path_name: "Desarrolla tus habilidades de diseñador de productos",
  course_title: "Liderazgo a través de la oratoria",
  cert_name: "Certificado Profesional de Análisis de Datos y E-commerce de Google",
  cta_resume_learning: "Continuar aprendiendo",
  // Fun fact
  fun_fact_title: "Dato curioso del día",
  fun_fact_body:
    "La persona promedio pasará unos 6 meses de su vida esperando que los semáforos cambien a verde — eso equivale a 1.800 horas de tiempo potencial de aprendizaje.",
  // Goals
  goals_today_title: "Metas de hoy",
  badge_personalized: "Personalizado",
  goal_complete_five_items: "Completa 5 elementos de aprendizaje",
  goal_five_learning_items_bold: "5 elementos de aprendizaje",
  goal_suffix_progress: "· 0/5",
  goal_complete_one_practice: "Completa 1 ejercicio práctico",
  // Weekly activity
  weekly_activity_title: "Actividad semanal",
  weekly_streak: "Racha de 1 semana",
  weekly_message: "¡Muy bien! Has superado tu objetivo de aprendizaje por 2 días esta semana.",
  weekly_summary: "3 elementos completados · 10 minutos aprendidos",
  day_sa: "Sá",
  day_su: "Do",
  day_mo: "Lu",
  // Course row
  course_row_learners_like_you: "Los estudiantes como tú también tomaron estos cursos",
  // Certificates
  heading_recent_certificates: "Certificados recientes",
  cert_title_gen_ai: "Ruta de aprendizaje: Fundamentos de IA generativa",
  cert_title_google_data: "Certificado Profesional de Analista de Datos de Google",
  action_add_to_linkedin: "Añadir a LinkedIn",
  action_view_badge: "Ver insignia",
  action_view_certificate: "Ver certificado",
  // Skills XP
  xp_total_earned_label: "XP total ganado",
  xp_suffix: "XP",
  tier_beginner: "Principiante",
  tier_intermediate: "Intermedio",
  tier_advanced: "Avanzado",
  tier_expert: "Experto",
  domain_data: "Datos",
  domain_programming: "Programación",
  domain_business: "Negocios",
  skill_sql: "SQL",
  skill_data_analysis: "Análisis de datos",
  skill_data_visualization: "Visualización de datos",
  skill_python: "Python",
  skill_r_lang: "R",
  skill_project_management: "Gestión de proyectos",
  skill_communication: "Comunicación",
  // Overview skill bars
  skill_data_storytelling: "Narrativa con datos",
  skill_literacy_integrity: "Literacidad e integridad",
  skill_social_media_strategy: "Estrategia en redes sociales",
  skill_email_marketing: "Email marketing",
  skill_digital_marketing: "Marketing digital",
  skill_wireframing: "Wireframing",
  skill_ai_tools: "Herramientas de IA",
  // Courses
  course_applied_swe: "Especialización en Fundamentos de Ingeniería de Software Aplicada",
  course_ibm_data_science: "Certificado Profesional de Ciencia de Datos de IBM",
  course_prompt_engineering: "Ingeniería de prompts para ChatGPT",
  course_best_for_swe:
    "Principiantes, personas no técnicas, líderes empresariales y equipos que quieren entender la IA conceptualmente",
  course_best_for_ibm:
    "Cualquier persona que busque desarrollar habilidades básicas en ciencia de datos con proyectos prácticos de Python y SQL",
  course_best_for_prompt:
    "Profesionales y estudiantes que quieren dominar la ingeniería de prompts para obtener mejores resultados de las herramientas de IA",
  level_beginner: "Principiante",
  course_type_degree: "Grado",
  course_type_professional_certificate: "Certificado Profesional",
  course_type_course: "Curso",
  duration_3_6_months: "3-6 meses",
  duration_1_3_months: "1-3 meses",
  tag_ai_skills: "Habilidades de IA",
  tag_data_science: "Ciencia de datos",
  // Left rail
  nav_home: "Inicio",
  nav_explore: "Explorar",
  nav_my_learning: "Mi aprendizaje",
  nav_degrees: "Titulaciones",
  search_placeholder: "¿Qué quieres aprender?",
  language_label: "Idioma",
  notifications_label: "Notificaciones",
  profile_name: "Matthew",
  a11y_collapse_nav: "Contraer navegación",
  a11y_expand_nav: "Expandir navegación",
  a11y_search: "Buscar",
  a11y_notifications: "Notificaciones",
  a11y_profile: "Perfil",
  // Leaderboard
  leaderboard_you: "Tú",
  leaderboard_week_team: "Esta semana · Equipo de 12",
};

const fr: Record<TranslationKey, string> = {
  // Header
  greeting_morning_name: "Bonjour, Matthew",
  streak_days: "Série de 25 jours",
  leaderboard_rank_prefix: "Rang",
  points_abbr: "pts",
  leaderboard_dropdown_subtitle: "Cette semaine · Équipe de 12",
  // Tabs
  tab_overview: "Aperçu",
  tab_skills: "Compétences",
  tab_in_progress: "En cours",
  tab_saved: "Enregistré",
  tab_certificates: "Certificats",
  // Progress banner
  path_name: "Développez vos compétences en design produit",
  course_title: "Affirmer son leadership par la prise de parole en public",
  cert_name: "Certificat professionnel Google en analyse de données et e-commerce",
  cta_resume_learning: "Reprendre l'apprentissage",
  // Fun fact
  fun_fact_title: "Anecdote du jour",
  fun_fact_body:
    "La personne moyenne passera environ 6 mois de sa vie à attendre que les feux rouges passent au vert — soit 1 800 heures de temps d'apprentissage potentiel.",
  // Goals
  goals_today_title: "Objectifs du jour",
  badge_personalized: "Personnalisé",
  goal_complete_five_items: "Complétez 5 éléments d'apprentissage",
  goal_five_learning_items_bold: "5 éléments d'apprentissage",
  goal_suffix_progress: "· 0/5",
  goal_complete_one_practice: "Complétez 1 exercice pratique",
  // Weekly activity
  weekly_activity_title: "Activité hebdomadaire",
  weekly_streak: "Série d'1 semaine",
  weekly_message: "Bravo ! Vous avez dépassé votre objectif d'apprentissage de 2 jours cette semaine.",
  weekly_summary: "3 éléments complétés · 10 minutes apprises",
  day_sa: "Sa",
  day_su: "Di",
  day_mo: "Lu",
  // Course row
  course_row_learners_like_you: "Les apprenants comme vous ont aussi suivi ces cours",
  // Certificates
  heading_recent_certificates: "Certificats récents",
  cert_title_gen_ai: "Parcours d'apprentissage : Fondements de l'IA générative",
  cert_title_google_data: "Certificat professionnel Google Analyste de données",
  action_add_to_linkedin: "Ajouter sur LinkedIn",
  action_view_badge: "Voir le badge",
  action_view_certificate: "Voir le certificat",
  // Skills XP
  xp_total_earned_label: "XP total gagné",
  xp_suffix: "XP",
  tier_beginner: "Débutant",
  tier_intermediate: "Intermédiaire",
  tier_advanced: "Avancé",
  tier_expert: "Expert",
  domain_data: "Données",
  domain_programming: "Programmation",
  domain_business: "Business",
  skill_sql: "SQL",
  skill_data_analysis: "Analyse de données",
  skill_data_visualization: "Visualisation de données",
  skill_python: "Python",
  skill_r_lang: "R",
  skill_project_management: "Gestion de projet",
  skill_communication: "Communication",
  // Overview skill bars
  skill_data_storytelling: "Narration par les données",
  skill_literacy_integrity: "Littératie et intégrité",
  skill_social_media_strategy: "Stratégie réseaux sociaux",
  skill_email_marketing: "Email marketing",
  skill_digital_marketing: "Marketing digital",
  skill_wireframing: "Wireframing",
  skill_ai_tools: "Outils IA",
  // Courses
  course_applied_swe: "Spécialisation en fondamentaux du génie logiciel appliqué",
  course_ibm_data_science: "Certificat professionnel IBM en science des données",
  course_prompt_engineering: "Ingénierie des prompts pour ChatGPT",
  course_best_for_swe:
    "Débutants, apprenants non techniques, leaders d'entreprise et équipes souhaitant comprendre l'IA de manière conceptuelle",
  course_best_for_ibm:
    "Toute personne souhaitant acquérir des compétences fondamentales en science des données avec des projets pratiques Python et SQL",
  course_best_for_prompt:
    "Professionnels et étudiants souhaitant maîtriser l'ingénierie des prompts pour obtenir de meilleurs résultats avec les outils IA",
  level_beginner: "Débutant",
  course_type_degree: "Diplôme",
  course_type_professional_certificate: "Certificat professionnel",
  course_type_course: "Cours",
  duration_3_6_months: "3-6 mois",
  duration_1_3_months: "1-3 mois",
  tag_ai_skills: "Compétences IA",
  tag_data_science: "Science des données",
  // Left rail
  nav_home: "Accueil",
  nav_explore: "Explorer",
  nav_my_learning: "Mon apprentissage",
  nav_degrees: "Diplômes",
  search_placeholder: "Que voulez-vous apprendre ?",
  language_label: "Langue",
  notifications_label: "Notifications",
  profile_name: "Matthew",
  a11y_collapse_nav: "Réduire la navigation",
  a11y_expand_nav: "Développer la navigation",
  a11y_search: "Rechercher",
  a11y_notifications: "Notifications",
  a11y_profile: "Profil",
  // Leaderboard
  leaderboard_you: "Vous",
  leaderboard_week_team: "Cette semaine · Équipe de 12",
};

export const translations: Translations = {
  en,
  es,
  fr,
  // Non-translated languages fall back to English
  de: en,
  zh: en,
  ja: en,
  pt: en,
  ar: en,
};

export const dateLocales: Record<LangCode, string> = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  zh: "zh-CN",
  ja: "ja-JP",
  pt: "pt-BR",
  ar: "ar-SA",
};
