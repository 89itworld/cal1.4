import Link from "next/link";
import {BASE_URL,WEBSITE_NAME, WEBSITE_URL} from "@lib/config/constants";
import { useLocale } from "@lib/hooks/useLocale";
import { getSeoImage, seoConfig } from "@lib/config/next-seo.config";

const PoweredByCal = () => {
  const { t } = useLocale();
  return (
    <div className="p-1 text-center text-xs sm:text-right">
      <Link href={`${BASE_URL}?utm_source=embed&utm_medium=powered-by-button`}>
        <a target="_blank" className="text-gray-500 opacity-50 hover:opacity-100 dark:text-white">
          {t("powered_by")}{" "}
          <img
            className="relative -mt-px inline h-[25px] w-auto dark:hidden"
            src= {`${WEBSITE_URL}/logo-word.svg`}
            alt={`${WEBSITE_NAME} Logo`}
          />
          <img
            className="relativ -mt-px hidden h-[25px] w-auto dark:inline"
            src={`${WEBSITE_URL}/Hibox-Scheduler_white.svg`}
            alt={`${WEBSITE_NAME} Logo`}
          />
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;
