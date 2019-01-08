module.exports = ({
  plugins: [
    require('postcss-easy-import'),
    require('postcss-custom-selectors'),
    require('cssnano')({
      preset: ['default', {
        calc: {
          preserve: true // `false` removes required brackets
        }
      }]
    })
  ]
});
