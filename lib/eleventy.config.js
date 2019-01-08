const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

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
