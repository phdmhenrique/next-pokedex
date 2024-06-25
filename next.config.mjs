/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/wellrccity/pokedex-html-js/master/assets/img/pokemons/**",
      },
    ],
  },
};

export default nextConfig;
