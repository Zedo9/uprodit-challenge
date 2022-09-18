export interface GetImageResponse {
  id: number;
  profileId: number;
  fileId: number;
  searchId: number;
  x: number;
  y: number;
  direction: number;
  b64Content: string;
  mimeType: string;
  usingSearchId: boolean;
}
