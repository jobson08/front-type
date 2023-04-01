module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  experimental:{appDir: true},
  env: {BASEURL: process.env.BASEURL},
}
