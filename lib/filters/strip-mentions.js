/**
 * Remove links to Twitter from mentioned @usernames
 *
 * https://regex101.com/r/tRVXrL/2
 *
 * @param {string} str Original text
 * @param string
 * @returns {string} Manipulated text
 */
module.exports = function (string) {
  if (typeof string !== 'undefined') {
    const regex = /<a\b[^>]*twitter[^>]*>@(\w*)<\/a>/gi;
    return string.replace(regex, '@$1');
  }
};
