module.exports = ({
  plugins: [
    require('postcss-easy-import'),
    require('cssnano')({
      preset: ['default', {
        calc: {
          preserve: true // `false` removes required brackets
        }
      }]
    })
  ]
});
