import { WEBSITE_NAME, BASE_URL } from "@calcom/lib/constants";
import type { App } from "@calcom/types/App";
import _package from "./package.json";

export const metadata = {
  name: "Stripe",
  description: _package.description,
  installed: !!(
    process.env.STRIPE_CLIENT_ID &&
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY &&
    process.env.STRIPE_PRIVATE_KEY
  ),
  slug: "stripe",
  category: "payment",
  logo: "/apps/stripe.svg",
  rating: 4.6,
  trending: true,
  reviews: 69,
  imageSrc: "/apps/stripe.svg",
  label: "Stripe",
  publisher: WEBSITE_NAME,
  title: "Stripe",
  type: "stripe_payment",
  url: BASE_URL,
  docsUrl: "https://stripe.com/docs",
  variant: "payment",
  verified: true,
  email: "help@hiboxscheduler.com",
} as App;

export * as api from "./api";
