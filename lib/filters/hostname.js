/**
 * Generate hostname from a URL
 *
 * @param {string} str URL, i.e. https://www.youtube.com/watch?v=2ed2pifRpc0
 * @param string
 * @returns {string} Hostname, i.e. youtube.com
 */
module.exports = function (string) {
  const {hostname} = new URL(string);

  return hostname.replace(/(?:www\.)?/g, '');
};
