import type { NextConfig } from "next";

//change to '' when running build locally. switch to github when deploying to prod
const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/hjblloop.github.io',
    assetPrefix: '/hjblloop.github.io/',
};

export default nextConfig;