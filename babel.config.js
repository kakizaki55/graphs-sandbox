module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
      "@babel/preset-react",
    ],
    env: {
      testing: {
        presets: [
          [ "@babel/preset-env", { targets: { node: "current" }}],
          '@babel/preset-typescript',
          "@babel/preset-react",
        ],
      },
    }
  }