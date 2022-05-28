import { WEBSITE_NAME, BASE_URL } from "@calcom/lib/constants";
import { validJson } from "@calcom/lib/jsonUtils";
import type { App } from "@calcom/types/App";
import _package from "./package.json";

export const metadata = {
  name: "Google Meet",
  description: _package.description,
  installed: !!(process.env.GOOGLE_API_CREDENTIALS && validJson(process.env.GOOGLE_API_CREDENTIALS)),
  slug: "google-meet",
  category: "video",
  type: "google_video",
  title: "Google Meet",
  imageSrc: "/apps/google-meet.svg",
  variant: "conferencing",
  label: "Google Meet",
  logo: "/apps/google-meet.svg",
  publisher: WEBSITE_NAME,
  rating: 5,
  reviews: 69,
  trending: false,
  url: BASE_URL,
  verified: true,
  email: "help@hiboxscheduler.com",
  locationType: "integrations:google:meet",
} as App;

// export * as api from "./api";
// export * as lib from "./lib";
