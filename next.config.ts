import type { NextConfig } from "next";

//change to false when running build locally. switch to true when deploying to prod
const prod = true;
const nextConfig: NextConfig = {
    output: 'export',
    basePath: prod ? '/hjblloop.github.io' : '',
    assetPrefix: prod ? '/hjblloop.github.io/' : '',
};

export default nextConfig;