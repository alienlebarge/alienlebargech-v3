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
    // Photos collection
    eleventyConfig.addCollection('photo', collection => {
        return collection.getFilteredByGlob('**/photos/**/*.md').reverse();
    });


    // Passthrough
    eleventyConfig.addPassthroughCopy('./src/assets/fonts');
    eleventyConfig.addPassthroughCopy('./src/assets/images');
    eleventyConfig.addPassthroughCopy('./src/assets/scripts');
    eleventyConfig.addPassthroughCopy('./src/media');

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
