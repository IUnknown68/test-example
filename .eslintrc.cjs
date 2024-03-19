module.exports = {
  root: true,

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

    plugins: [
      'jest',
    ],

    env: {
      'jest/globals': true,
    },
  }],
};
