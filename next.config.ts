import type { NextConfig } from "next";

// The EAS build details page — the actual APK download link is served from
// here. This URL is tied to one specific build, not "always latest": cutting
// a new preview build gives it a new URL, so update this one line rather than
// hunting down every place kobook.app/beta is linked from.
const LATEST_BETA_BUILD_URL =
  "https://expo.dev/accounts/dareyolowos-team/projects/darey/builds/97af891a-62ce-4fe0-904a-5631722326ea";

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
