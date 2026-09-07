import type { NextConfig } from "next";

// The EAS build details page — the actual APK download link is served from
// here. This URL is tied to one specific build, not "always latest": cutting
// a new preview build gives it a new URL, so update this one line rather than
// hunting down every place kobook.app/beta is linked from.
const LATEST_BETA_BUILD_URL =
  "https://expo.dev/accounts/dareyolowos-team/projects/darey/builds/e7c6ad44-365d-482d-aced-d653fcaee8c2";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/beta",
        destination: LATEST_BETA_BUILD_URL,
        permanent: false, // this build-specific URL will change — never cache it as permanent
      },
    ];
  },
};

export default nextConfig;
