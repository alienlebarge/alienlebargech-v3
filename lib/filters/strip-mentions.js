/**
 * Remove links to Twitter from mentioned @usernames
 *
 * @param {String} str Original text
 * @return {String} Manipulated text
 *
 */
module.exports = function (string) {
  if (typeof string !== 'undefined') {
    const regex = /<a\b[^>]*twitter[^>]*>@(\w*)<\/a>/gi;
    return string.replace(regex, '@$1');
  }
};
