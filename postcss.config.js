module.exports = {
  plugins: [
    require('postcss-font-magician')({
      hosted: ['./src/styles/vendor'],
    }),
    require('postcss-preset-env')({
      browsers: ['> 1%', 'last 2 versions', 'not dead', 'IE 11', 'Edge >= 12'],
      features: {
        'nesting-rules': true,
        'color-mod-function': { unresolved: 'warn' },
      },
    }),
    require('mqpacker'),
  ],
};
