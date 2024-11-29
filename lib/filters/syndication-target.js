
/**
 * Get service name from URL
 * @param {string} string URL, i.e. https://twitter.com/alienlebarge/status/1414847250283601921
 * @returns {string} Service name, i.e. Twitter
 */
module.exports = string => {
  if (string) {
    string = String(string);
    const {hostname} = new URL(string);
    hostname.replaceAll(/(?:www\.)?/g, '');

    switch (hostname) {
      case ('web.archive.org'): {
        return 'Internet Archive';
      }

      case ('twitter.com'): {
        return 'Twitter';
      }

      case ('x.com'): {
        return 'X';
      }

      case ('www.instagram.com'): {
        return 'Instagram';
      }

      case ('www.youtube.com'): {
        return 'YouTube';
      }

      case ('youtu.be'): {
        return 'YouTube';
      }

      case ('vimeo.com'): {
        return 'Vimeo';
      }

      case ('mastodon.alienlebarge.ch'): {
        return 'Mastodon';
      }

      case ('mastodon.social'): {
        return 'Mastodon';
      }

      case ('social.lol'): {
        return 'Mastodon';
      }

      case ('bsky.app'): {
        return 'Bluesky';
      }

      default: {
        return hostname;
      }
    }
  }
};
