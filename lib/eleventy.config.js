const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const directoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');
const embedEverything = require('eleventy-plugin-embed-everything');
const markdown = require('./markdown.config.js');

module.exports = function (eleventyConfig) {
  // Extensions
  eleventyConfig.addExtension('css', require('./extensions/css.js'));

  // Set custom markdown library instance
  eleventyConfig.setLibrary('md', markdown);

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(embedEverything, {
    youtube: {
      options: {
        embedClass: '',
        lazy: true,
      },
    },
    vimeo: {
      options: {
        embedClass: 'o-frame',
        iframeStyle: false,
        wrapperStyle: false,
      },
    },
  });
  eleventyConfig.setQuietMode(true);

  if (process.env.NODE_ENV !== 'production') {
    eleventyConfig.addPlugin(directoryOutputPlugin);
  }

  // Filters
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
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
  eleventyConfig.addCollection('category', require('./collections/category.js'));

  // Passthrough
  eleventyConfig.addPassthroughCopy('./src/assets/fonts');
  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/assets/scripts');
  eleventyConfig.addPassthroughCopy('./src/media');
  eleventyConfig.addPassthroughCopy('./src/articles/**/*.(jpg|png|svg)');

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
