import { WEBSITE_NAME, BASE_URL } from "@calcom/lib/constants";
import type { App } from "@calcom/types/App";
import _package from "./package.json";

export const metadata = {
  name: "Office 365 / Outlook.com Calendar",
  description: _package.description,
  installed: !!(process.env.MS_GRAPH_CLIENT_ID && process.env.MS_GRAPH_CLIENT_SECRET),
  type: "office365_calendar",
  title: "Office 365 / Outlook.com Calendar",
  imageSrc: "/apps/outlook.svg",
  variant: "calendar",
  category: "calendar",
  label: "Example App",
  logo: "/apps/outlook.svg",
  publisher: WEBSITE_NAME,
  rating: 5,
  reviews: 69,
  slug: "office365-calendar",
  trending: false,
  url: BASE_URL,
  verified: true,
  email: "help@hiboxscheduler.com",
} as App;

export * as api from "./api";
export * as lib from "./lib";
