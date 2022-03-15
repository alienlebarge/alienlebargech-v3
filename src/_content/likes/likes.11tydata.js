module.exports = {
  eleventyComputed: {
    bookmarkOf: data => data['bookmark-of'],
    likeOf: data => data['like-of'],
  },
};
