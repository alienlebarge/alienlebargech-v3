const markdown = require('./markdown.config.js');
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Make properties defined in json available everywhere
  eleventyConfig.setDataDeepMerge(true);

  // Set custom markdown library instance
  eleventyConfig.setLibrary('md', markdown);

  // Filters
  eleventyConfig.addFilter('date', require('./filters/date.js'));
  eleventyConfig.addFilter('hostname', require('./filters/hostname.js'));
  eleventyConfig.addFilter('strip_mentions', require('./filters/strip-mentions.js'));
  eleventyConfig.addFilter('webmentions_for_url', require('./filters/webmentions-for-url.js'));
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if( outputPath && outputPath.endsWith(".html") ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }

      return content;
    });

  // Plugins
  eleventyConfig.addPlugin(require('eleventy-plugin-vimeo-embed'), {
    embedClass: 'o-frame',
    iframeStyle: '',
    wrapperStyle: ''
  });

  // Get current date
  const now = new Date();
  // Get things taht are before current date time
  const livePosts = p => p.date <= now;

  // Collections
  //
  // Override the default post collection to manage not published content
  // depending on dates
  eleventyConfig.addCollection('post', collection => {
    return collection.getFilteredByTag('post')
      .filter(p => livePosts(p));
  });
  eleventyConfig.addCollection('article', collection => {
    return collection.getFilteredByTag('article')
      .filter(p => livePosts(p)).reverse();
  });
  eleventyConfig.addCollection('bookmark', collection => {
    return collection.getFilteredByTag('bookmark')
      .filter(p => livePosts(p)).reverse();
  });
  eleventyConfig.addCollection('note', collection => {
    return collection.getFilteredByTag('note')
      .filter(p => livePosts(p)).reverse();
  });
  eleventyConfig.addCollection('photo', collection => {
    return collection.getFilteredByTag('photo')
      .filter(p => livePosts(p)).reverse();
  });
  eleventyConfig.addCollection('like', collection => {
    return collection.getFilteredByTag('like')
      .filter(p => livePosts(p)).reverse();
  });
  eleventyConfig.addCollection('jam', collection => {
    return collection.getFilteredByTag('jam')
      .filter(p => livePosts(p)).reverse();
  });
  eleventyConfig.addCollection('draft', collection => {
    return collection.getFilteredByTag('post')
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
      input: 'src',
      output: 'www',
      layouts: '_layouts'
    },
    templateFormats: [
      'md',
      'njk'
    ],
    passthroughFileCopy: true
  };
};
