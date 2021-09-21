const markdown = require('./markdown.config.js');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Make properties defined in json available everywhere
  eleventyConfig.setDataDeepMerge(true);

  // Set custom markdown library instance
  eleventyConfig.setLibrary('md', markdown);

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters
  eleventyConfig.addFilter('date', require('./filters/date.js'));
  eleventyConfig.addFilter('hostname', require('./filters/hostname.js'));
  eleventyConfig.addFilter('strip_mentions', require('./filters/strip-mentions.js'));
  eleventyConfig.addFilter('syndication_target', require('./filters/syndication-target.js'));
  eleventyConfig.addFilter('webmentions_for_url', require('./filters/webmentions-for-url.js'));

  // Transforms
  eleventyConfig.addTransform('htmlmin', require('./transforms/htmlmin.js'));

  // Get current date
  const now = new Date();
  // Get things taht are before current date time
  const livePosts = p => p.date <= now;

  // Collections
  //
  // Override the default post collection to manage not published content
  // depending on dates
  eleventyConfig.addCollection('post', collection => collection.getFilteredByTag('post')
    .filter(p => livePosts(p)));
  eleventyConfig.addCollection('article', collection => collection.getFilteredByTag('article')
    .filter(p => livePosts(p)).reverse());
  eleventyConfig.addCollection('bookmark', collection => collection.getFilteredByTag('bookmark')
    .filter(p => livePosts(p)).reverse());
  eleventyConfig.addCollection('note', collection => collection.getFilteredByTag('note')
    .filter(p => livePosts(p)).reverse());
  eleventyConfig.addCollection('photo', collection => collection.getFilteredByTag('photo')
    .filter(p => livePosts(p)).reverse());
  eleventyConfig.addCollection('like', collection => collection.getFilteredByTag('like')
    .filter(p => livePosts(p)).reverse());
  eleventyConfig.addCollection('jam', collection => collection.getFilteredByTag('jam')
    .filter(p => livePosts(p)).reverse());
  eleventyConfig.addCollection('draft', collection => collection.getFilteredByTag('post')
    .filter(_ => !livePosts(_)).reverse());

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
      input: 'src',
      output: 'www',
      layouts: '_layouts',
    },
    templateFormats: [
      'md',
      'njk',
    ],
    passthroughFileCopy: true,
  };
};
