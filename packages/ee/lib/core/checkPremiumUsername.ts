//import { BASE_URL } from "@lib/config/constants";
import { BASE_URL } from "@calcom/lib/constants";
import slugify from "@calcom/lib/slugify";

export type ResponseUsernameApi = {
  available: boolean;
  premium: boolean;
  message?: string;
  suggestion?: string;
};

export async function checkPremiumUsername(_username: string): Promise<ResponseUsernameApi> {
  const username = slugify(_username);
  const response = await fetch(`${BASE_URL}` + "/api/username", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
    method: "POST",
    mode: "cors",
  });

  const json = await response.json();
  return json;
}
