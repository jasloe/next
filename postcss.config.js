module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3, // You can adjust the stage based on the features you need
    },
    'postcss-mixins': {},
    'postcss-nesting': {},
    'cssnano': {},
  },
};
