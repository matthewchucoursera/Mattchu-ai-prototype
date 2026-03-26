import { useEffect, useState } from "react";
import { skillDomains } from "../data/mockData";
import { useT } from "../contexts/LanguageContext";
import type { TranslationKey } from "../i18n/translations";

type Tier = "Beginner" | "Intermediate" | "Advanced" | "Expert";

const TIER_STYLES: Record<Tier, { badge: string; bar: string }> = {
  Beginner:     { badge: "bg-grey-100 text-grey-600",     bar: "bg-grey-400" },
  Intermediate: { badge: "bg-blue-25 text-blue-700",      bar: "bg-blue-700" },
  Advanced:     { badge: "bg-purple-25 text-purple-700",  bar: "bg-purple-700" },
  Expert:       { badge: "bg-yellow-25 text-yellow-700",  bar: "bg-yellow-700" },
};

const TIER_KEYS: Record<Tier, TranslationKey> = {
  Beginner:     "tier_beginner",
  Intermediate: "tier_intermediate",
  Advanced:     "tier_advanced",
  Expert:       "tier_expert",
};

const TIER_ORDER: Tier[] = ["Beginner", "Intermediate", "Advanced", "Expert"];

export function SkillsTab() {
  const [mounted, setMounted] = useState(false);
  const t = useT();

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const totalXp = skillDomains
    .flatMap((d) => d.skills)
    .reduce((sum, s) => sum + s.xp, 0);

  return (
    <div className="flex flex-col gap-32 py-24 sm:py-32 animate-entrance">

      {/* XP summary header */}
      <div className="flex items-center gap-16 flex-wrap">
        <div className="flex flex-col gap-2">
          <p className="cds-body-tertiary text-grey-600">{t("xp_total_earned_label")}</p>
          <p className="cds-title-xs text-grey-975">{totalXp.toLocaleString()} {t("xp_suffix")}</p>
        </div>
        <div className="flex gap-8 flex-wrap">
          {TIER_ORDER.map((tier) => {
            const styles = TIER_STYLES[tier];
            return (
              <div key={tier} className={`flex items-center gap-4 px-10 py-4 rounded-32 cds-body-tertiary ${styles.badge}`}>
                <div className={`w-6 h-6 rounded-full ${styles.bar}`} />
                {t(TIER_KEYS[tier])}
              </div>
            );
          })}
        </div>
      </div>

      {/* Domain sections — 3-column grid on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
        {skillDomains.map((domain) => (
          <div key={domain.id} className="flex flex-col gap-16">
            <h2 className="cds-subtitle-sm text-grey-975">{t(domain.labelKey)}</h2>
            <div className="flex flex-col gap-16">
              {domain.skills.map((skill, i) => {
                const tier = skill.tier as Tier;
                const styles = TIER_STYLES[tier];
                const pct = Math.round((skill.xp / skill.xpToNext) * 100);
                return (
                  <div key={skill.id} className="flex flex-col gap-6">
                    <div className="flex items-center justify-between gap-8">
                      <div className="flex items-center gap-6 min-w-0">
                        <span className="cds-body-secondary text-grey-975 truncate">{t(skill.nameKey)}</span>
                        <span className={`cds-body-tertiary px-6 py-2 rounded-32 flex-shrink-0 ${styles.badge}`}>
                          {t(TIER_KEYS[tier])}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex-1 h-6 bg-grey-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${styles.bar}`}
                          style={{
                            width: mounted ? `${pct}%` : "0%",
                            transition: "width 600ms ease",
                            transitionDelay: `${i * 60}ms`,
                          }}
                        />
                      </div>
                      <span className="cds-body-tertiary text-grey-600 flex-shrink-0 whitespace-nowrap">
                        {skill.xp.toLocaleString()} / {skill.xpToNext.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
