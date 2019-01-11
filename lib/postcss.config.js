module.exports = ({
    plugins: [
        require('postcss-easy-import'),
        require('postcss-logical')({
            dir: 'ltr'
        }),
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
