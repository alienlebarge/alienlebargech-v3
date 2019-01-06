const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

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
