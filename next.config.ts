/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ must be top-level
  images: {
    unoptimized: true, // ✅ required for static export
    domains: [
      "encrypted-tbn0.gstatic.com",
      "www.k12digest.com",
      "images.pexels.com",
      "vision2030.co.uk",
      "www.amperesolar.com.au",
      "thumbs.dreamstime.com",
      "t4.ftcdn.net",
      "img.freepik.com",
      "waaree.com",
      "images.rawpixel.com",
      "www.solarminer.com.au",
      "epring.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
}

module.exports = nextConfig
