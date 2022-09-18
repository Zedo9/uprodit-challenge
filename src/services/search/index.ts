import { client } from "../axios";
import { apiEndpoints, config } from "../../config";
import { SearchQuerySettings, User } from "./types";

export async function search(
  querySettings: SearchQuerySettings = { startIndex: 0, maxResults: 10 }
): Promise<User[]> {
  const endpoint = buildSearchEndpoint(querySettings);

  const searchResponse = await client.get<User[]>(endpoint);

  return searchResponse.data;
}

function buildSearchEndpoint(querySettings: SearchQuerySettings) {
  let endpoint = `${apiEndpoints.search}`;

  Object.entries(querySettings).forEach(
    ([key, value]) => (endpoint += `&${key}=${value}`)
  );

  return endpoint;
}
