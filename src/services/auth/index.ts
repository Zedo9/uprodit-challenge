import { client } from "../axios";
import { config, apiEndpoints } from "../../config";

interface AuthData {
  appid: string;
  env: string;
  uri: string;
}

interface AuthResponse {
  authorization: string;
}

export async function getAuthHeader(endpoint: string): Promise<string> {
  const authData = {
    appid: config.appId,
    env: config.environment,
    uri: `${client.defaults.baseURL}${endpoint}`,
  };

  try {
    const results = await client.post<AuthResponse>(
      apiEndpoints.auth,
      authData
    );
    return results.data.authorization;
  } catch (error) {
    return Promise.reject(error);
  }
}
