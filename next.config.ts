 import type { NextConfig } from "next";

const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const isProjectPage =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName !== "renagryga.github.io";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: isProjectPage ? `/${repoName}` : "",
  assetPrefix: isProjectPage ? `/${repoName}/` : "",
};

export default nextConfig;
