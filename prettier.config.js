module.exports = {
  semi: false,
  plugins: [
    "prettier-plugin-css-order",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-go-template",
  ],
  pluginSearchDirs: false,
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
}
