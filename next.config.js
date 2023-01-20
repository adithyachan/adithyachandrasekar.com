const isGithubActions = process.env.GITHUB_ACTIONS || false

module.exports = {
  assetPrefix: "",
  basePath: "/",
  images: {
    loader: 'akamai',
    path: '',
  },
}

export default nextConfig;