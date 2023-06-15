/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "my-value",
    MONGODB_URI:
      "mongodb+srv://vercel-admin-user:u0r3Si9wFBOFEFFL@ged-cluster.6a8jab0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
