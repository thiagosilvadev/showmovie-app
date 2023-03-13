/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themoviedb.org"]
  },
  experimental: {
    fontLoaders: [
      {
        loader: "next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
}

export default nextConfig
