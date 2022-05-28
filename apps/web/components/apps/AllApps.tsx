import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { App } from "@calcom/types/App";

import AppCard from "./AppCard";

export default function AllApps({ apps }: { apps: App[] }) {
  const { t } = useLocale();
  return (
    <div className="mb-16">
      <h2 className="mb-2 text-lg font-semibold text-gray-900">{t("all_apps")}</h2>
      <div className="grid-col-1 grid grid-cols-1 gap-3 md:grid-cols-3">
        {apps.map((app) => (
          (app.name==='Zoom Video' || app.name==='Microsoft 365/Teams' || app.name==='Google Meet' || app.name==='Office 365 / Outlook.com Calendar' || app.name==='Google Calendar')? 
          <AppCard
            key={app.name}
            name={app.name}
            slug={app.slug}
            description={app.description}
            logo={app.logo}
            rating={app.rating}
            reviews={app.reviews}
          />
        :('')
        
        ))}
      </div>
    </div>
  );
}
