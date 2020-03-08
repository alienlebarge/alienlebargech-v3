const markdown = require('./markdown.config.js');

module.exports = function (eleventyConfig) {

    // make properties defined in json available everywhere
    eleventyConfig.setDataDeepMerge(true);

    // Set custom markdown library instance
    eleventyConfig.setLibrary('md', markdown);

    // Filters
    eleventyConfig.addFilter("date", require('./filters/date.js'));
    eleventyConfig.addFilter("hostname", require('./filters/hostname.js'));
    eleventyConfig.addFilter("strip_mentions", require('./filters/strip-mentions.js'));
    eleventyConfig.addFilter("webmentions_for_url", require('./filters/webmentions-for-url.js'));

    // Plugins
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

    // Collection
    eleventyConfig.addCollection("article", function(collection) {
        return collection.getFilteredByTag("article").reverse();
    });
    eleventyConfig.addCollection("bookmark", function(collection) {
        return collection.getFilteredByTag("bookmark").reverse();
    });
    eleventyConfig.addCollection("note", function(collection) {
        return collection.getFilteredByTag("note").reverse();
    });
    eleventyConfig.addCollection("photo", function(collection) {
        return collection.getFilteredByTag("photo").reverse();
    });
    eleventyConfig.addCollection('category', require('./collections/category.js'));


    // Passthrough
    eleventyConfig.addPassthroughCopy('./src/assets/fonts');
    eleventyConfig.addPassthroughCopy('./src/assets/images');
    eleventyConfig.addPassthroughCopy('./src/assets/scripts');
    eleventyConfig.addPassthroughCopy('./src/media');

    // Enable data deep merge
    eleventyConfig.setDataDeepMerge(true);

    // Config
    return {
        dir: {
            input: "src",
            output: "www",
            layouts: '_layouts'
        },
        templateFormats: [
            "md",
            "njk"
        ],
        passthroughFileCopy: true
    }
};
