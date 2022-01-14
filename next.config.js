module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "pairingmate",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};
