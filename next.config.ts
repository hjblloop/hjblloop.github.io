import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  assetPrefix: isGithubPages ? '/Portfolio' : '',
  basePath: isGithubPages ? '/Portfolio' : '',
  output: 'export', // static export
};