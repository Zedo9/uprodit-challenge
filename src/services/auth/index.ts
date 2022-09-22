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

