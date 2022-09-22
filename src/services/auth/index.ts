import { client } from "../axios";
import { apiEndpoints } from "../../config";

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
    appid: import.meta.env.VITE_APP_ID,
    env: import.meta.env.VITE_ENVIRONMENT,
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
