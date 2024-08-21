module.exports = {
  eleventyComputed: {
    bookmarkOf: data => data['bookmark-of'] || data['bookmark_of'],
  },
};
