import { apiEndpoints } from "../../config";
import { client } from "../axios";
import { GetImageResponse } from "./types";

export async function getImage(id: string) {
  const endpoint = `${apiEndpoints.image}/${id}`;

  const imageResponse = await client.get<GetImageResponse>(endpoint);

  return imageResponse.data;
}
