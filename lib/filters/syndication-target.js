
/**
 * Get service name from URL
 *
 * @param {string} string URL, i.e. https://twitter.com/alienlebarge/status/1414847250283601921
 * @returns {string} Service name, i.e. Twitter
 */
module.exports = string => {
  if (string) {
    string = String(string);
    const {hostname} = new URL(string);
    hostname.replace(/(?:www\.)?/g, '');

    switch (hostname) {
      case ('web.archive.org'):
        return 'Internet Archive';
      case ('twitter.com'):
        return 'Twitter';
      default:
        return hostname;
    }
  }
};
