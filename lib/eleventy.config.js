const markdown = require('./markdown.config.js');
var dateFilter = require('nunjucks-date-filter');

module.exports = function (eleventyConfig) {

  // Set custom markdown library instance
  eleventyConfig.setLibrary('md', markdown);
  
  // Filters
  eleventyConfig.addNunjucksFilter("date", dateFilter);

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Article collection
  eleventyConfig.addCollection('article', collection => {
    return collection.getFilteredByGlob('**/articles/**/*.md').reverse();
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');

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
