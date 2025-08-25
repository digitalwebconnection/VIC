// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com', // ← Add this line
      'www.k12digest.com',
      'images.pexels.com',
      "vision2030.co.uk",
      'www.amperesolar.com.au',      // ← If still using this one too
      'thumbs.dreamstime.com',
      't4.ftcdn.net',
      'img.freepik.com',
      't4.ftcdn.net',
      'thumbs.dreamstime.com',
      'waaree.com'
      ,'images.rawpixel.com',
      "www.solarminer.com.au",
      "epring.co"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
    ],
  },
};

module.exports = nextConfig;

// next.config.js