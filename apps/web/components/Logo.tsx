import { WEBSITE_NAME } from "@calcom/lib/constants";
export default function Logo({ small, icon }: { small?: boolean; icon?: boolean }) {
  return (
    <h1 className="inline">
      <strong>
        {icon ? (
          <img className="mx-auto w-9" alt={WEBSITE_NAME} title={WEBSITE_NAME} src="/cal-com-icon-white.svg" />
        ) : (
          <img
            className={small ? "h-25 w-auto" : "h-5 w-auto"}
            alt= {WEBSITE_NAME}
            title= {WEBSITE_NAME}
            src="/Hibox-Scheduler-logo-white-word.svg"
          />
        )}
      </strong>
    </h1>
  );
}
