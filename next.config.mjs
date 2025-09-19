/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',          // enables static export -> builds into "out/"
    trailingSlash: true,       // creates folder/index.html structure (safer on GitHub Pages)
    images: { unoptimized: true }, // disable Next.js image optimizer (server-only feature)
    basePath: '',              // empty because this is the *root* user site
    assetPrefix: undefined
};

export default nextConfig;
