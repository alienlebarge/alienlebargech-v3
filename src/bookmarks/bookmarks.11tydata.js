module.exports = {
  eleventyComputed: {
    bookmarkOf: data => data['bookmark_of'] || data['bookmark-of'],
  },
};
