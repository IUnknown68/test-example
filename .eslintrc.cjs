module.exports = {
  root: true,

  plugins: [
    'jest',
  ],

  env: {
    es2021: true,
    node: true,
  },

  extends: [
    'airbnb-base',
  ],

  overrides: [{
    files: [
      '**/*.test.js',
    ],
    env: {
      'jest/globals': true,
    },
  }],
};
