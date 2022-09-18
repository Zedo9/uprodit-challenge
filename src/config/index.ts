export const config = {
  appId: import.meta.env.VITE_APP_ID,
  useCase: import.meta.env.VITE_USE_CASE,
  environment: import.meta.env.VITE_ENVIRONMENT,
};

export const apiEndpoints = {
  baseURL: "https://api.uprodit.com",
  auth: "/v1/authheader",
  search: `/v1/search/all?usecase=${config.useCase}`,
  image: "/v2/profile/picture/f",
};
