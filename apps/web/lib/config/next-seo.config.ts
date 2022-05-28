import { DefaultSeoProps } from "next-seo";

import { HeadSeoProps } from "@components/seo/head-seo";
import { WEBSITE_NAME } from "@lib/config/constants";
const seoImages = {
  default: process.env.BASE_URL + `/og-image.png`,
  ogImage: process.env.BASE_URL + `/og-image.png`,
};

export const getSeoImage = (key: keyof typeof seoImages): string => {
  return seoImages[key];
};

export const seoConfig: {
  headSeo: Required<Pick<HeadSeoProps, "siteName">>;
  defaultNextSeo: DefaultSeoProps;
} = {
  headSeo: {
    siteName: WEBSITE_NAME,
  },
  defaultNextSeo: {
    twitter: {
      handle: "@Hiboxscheduler",
      site: "@Hiboxscheduler",
      cardType: "summary_large_image",
    },
  },
} as const;
