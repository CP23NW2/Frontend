module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  PublicPath: process.env.NODE_ENV === 'production'
  ? './'
  : './',
}
