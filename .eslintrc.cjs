module.exports = {
  root: true,
  plugins: [
    'jest',
  ],
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },

  extends: [
    'airbnb-base',
  ],
};
