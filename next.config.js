module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "rea-freemarket",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};
