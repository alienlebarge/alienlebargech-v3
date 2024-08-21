module.exports = {
  eleventyComputed: {
    // FIXME: 'bookmark-of' must also be transformed ex:`bookmarkOf: data => data['bookmark-of'] || data['bookmark_of'],`
    bookmarkOf: data => data['bookmark_of'],
  },
};
