/**
 * Generate hostname from a URL
 *
 * @param {Date} date string
 * @param {format} format string https://momentjs.com/docs/#/parsing/string-format/
 * @returns {Date}
 */
const moment = require('moment-timezone');

module.exports = function (date, format) {
  return moment(date).tz('Europe/Zurich').format(format);
};
