import { WEBSITE_URL, SHORT_URL } from "@calcom/lib/constants";
import type { App } from "@calcom/types/App";
import _package from "./package.json";

export const metadata = {
  name: _package.name,
  description: _package.description,
  installed: true,
  category: "video",
  // If using static next public folder, can then be referenced from the base URL (/).
  imageSrc: "/cal-com-icon.svg",
  logo: "/cal-com-icon.svg",
  label: "Example App",
  publisher: `${SHORT_URL}`,
  rating: 5,
  reviews: 69,
  slug: "example_video",
  title: "Example App",
  trending: true,
  type: "example_video",
  url: `${WEBSITE_URL}`,
  variant: "conferencing",
  verified: true,
  email: "help@hiboxscheduler.com",
} as App;

export * as api from "./api";
export * as lib from "./lib";
