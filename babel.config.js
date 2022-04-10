module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@products": "./src/products",
            "@assets": "./assets",
            "@ui": "./src/ui",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  }
}
