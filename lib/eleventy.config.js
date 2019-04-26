const markdown = require('./markdown.config.js');
var dateFilter = require('nunjucks-date-filter');

module.exports = function (eleventyConfig) {

    // make properties defined in json available everywhere
    eleventyConfig.setDataDeepMerge(true);

    // Set custom markdown library instance
    eleventyConfig.setLibrary('md', markdown);

    // Filters
    eleventyConfig.addNunjucksFilter("date", dateFilter);
    eleventyConfig.addFilter("hostname", require('./filters/hostname.js'));
    eleventyConfig.addFilter("webmentions_for_url", require('./filters/webmentions-for-url.js'));

    // Plugins
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

    // Article collection
    eleventyConfig.addCollection('article', collection => {
        return collection.getFilteredByGlob('**/articles/**/*.md').reverse();
    });
    // Bookmarks collection
    eleventyConfig.addCollection('bookmark', collection => {
        return collection.getFilteredByGlob('**/bookmarks/**/*.md').reverse();
    });
    // Notes collection
    eleventyConfig.addCollection('note', collection => {
        return collection.getFilteredByGlob('**/notes/**/*.md').reverse();
    });

    // Passthrough
    eleventyConfig.addPassthroughCopy('./src/assets/fonts');
    eleventyConfig.addPassthroughCopy('./src/assets/images');

    // Config
    return {
        dir: {
            input: "src",
            output: "www"
        },
        templateFormats: [
            "md",
            "njk"
        ],
        passthroughFileCopy: true
    }
};
