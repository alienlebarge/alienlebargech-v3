const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const lightningCSS = require('@11tyrocks/eleventy-plugin-lightningcss');
const collections = require('./collections/index.js');
const markdown = require('./markdown.config.js');

module.exports = function (eleventyConfig) {
  // Set custom markdown library instance
  eleventyConfig.setLibrary('md', markdown);

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(lightningCSS);
  //eleventyConfig.setQuietMode(true);

  // Filters
  eleventyConfig.addNunjucksFilter('limit', (array, limit) => array.slice(0, limit));
  eleventyConfig.addFilter('date', require('./filters/date.js'));
  eleventyConfig.addFilter('hostname', require('./filters/hostname.js'));
  eleventyConfig.addFilter('includes', require('./filters/includes.js'));
  eleventyConfig.addFilter('syndication_target', require('./filters/syndication-target.js'));
  // https://btrem.com/2021/01-frontmatter-11ty
  // https://github.com/11ty/eleventy/issues/246
  eleventyConfig.addFilter('toArray', value => {
    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  });
  eleventyConfig.addFilter('webmentions_for_url', require('./filters/webmentions-for-url.js'));

  // Transforms
  eleventyConfig.addTransform('htmlmin', require('./transforms/htmlmin.js'));

  // Get current date
  const now = new Date();
  // Get things taht are before current date time
  const livePosts = p => p.date <= now;

  // Collections
  for (const [name, collection] of Object.entries(collections)) {
    eleventyConfig.addCollection(name, collection);
  }

  // Passthrough
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');
  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/assets/scripts');
  eleventyConfig.addPassthroughCopy('./src/media');
  eleventyConfig.addPassthroughCopy('./src/articles/**/*.(jpg|png|gif|svg)');

  // Watch targets
  eleventyConfig.addWatchTarget('./src/assets/styles');

  // Config
  return {
    dir: {
      input: 'src',
      output: 'www',
      layouts: 'layouts',
      data: 'data',
      includes: 'includes',
    },
    templateFormats: [
      'css',
      'md',
      'njk',
    ],
    passthroughFileCopy: true,
  };
};
