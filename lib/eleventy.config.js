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
    eleventyConfig.addPlugin(require('eleventy-plugin-vimeo-embed'), {
        embedClass: 'custom-class-name',
        iframeStyle: '',
        wrapperStyle: '',
    });

    // Get current date
    const now = new Date();
    // Get things taht are before current date time
    const livePosts = p => p.date <= now;

    // Collections
    //
    // Override the default post collection to manage not published content
    // depending on dates
    eleventyConfig.addCollection("post", function(collection) {
        return collection.getFilteredByTag("post")
            .filter(livePosts);
    });
    eleventyConfig.addCollection("article", function(collection) {
        return collection.getFilteredByTag("article")
            .filter(livePosts).reverse();
    });
    eleventyConfig.addCollection("bookmark", function(collection) {
        return collection.getFilteredByTag("bookmark")
            .filter(livePosts).reverse();
    });
    eleventyConfig.addCollection("note", function(collection) {
        return collection.getFilteredByTag("note")
            .filter(livePosts).reverse();
    });
    eleventyConfig.addCollection("photo", function(collection) {
        return collection.getFilteredByTag("photo")
            .filter(livePosts).reverse();
    });
    eleventyConfig.addCollection("jam", function(collection) {
        return collection.getFilteredByTag("jam")
            .filter(livePosts).reverse();
    });
    eleventyConfig.addCollection("draft", function(collection) {
        return collection.getFilteredByTag("post")
            .filter(_ => !livePosts(_)).reverse();
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
