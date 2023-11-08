module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/api/auth/signin",
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
  },
  /* eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }, */
}
