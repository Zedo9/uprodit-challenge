import { client } from "../axios";
import { apiEndpoints } from "../../config";
import { SearchQuerySettings, User } from "./types";

export async function search(
  querySettings: SearchQuerySettings = { startIndex: 0, maxResults: 20 }
): Promise<User[]> {
  const endpoint = buildSearchEndpoint(querySettings);

  const searchResponse = await client.get<User[]>(endpoint);

  return searchResponse.data;
}

function buildSearchEndpoint(querySettings: SearchQuerySettings) {
  let endpoint = `${apiEndpoints.search}`;

  Object.entries(querySettings).forEach(
    ([key, value]) => (endpoint += (key == "startIndex" || (key && value)) ? `&${key}=${value}` : '')
  );

  return endpoint;
}
