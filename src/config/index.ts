export const apiEndpoints = {
  baseURL: "https://api.uprodit.com",
  auth: "/v1/authheader",
  search: `/v1/search/all?usecase=${import.meta.env.VITE_USE_CASE}`,
  image: "/v2/profile/picture/f",
};
