module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-media-minmax'),
    require('postcss-custom-media'),
    require('postcss-custom-selectors'),
    require('postcss-extend-rule'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          calc: {
            preserve: true, // `false` removes required brackets
          },
        },
      ],
    }),
  ],
};
