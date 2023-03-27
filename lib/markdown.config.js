const markdown = require('markdown-it');
const uslug = require('uslug');
const createPlugin = require('markdown-it-regexp');

module.exports = (() => {
  const uslugify = s => uslug(s);

  const options = Object.assign({
    html: true,
    breaks: true,
    typographer: true,
  });

  const convertSocialHandle = createPlugin(
    // Regexp to match
    /@(\w+)@(\w+(\.\w+){1,2})/,

    // This function will be called when something matches
    match => {
      const hostname = match[2];
      let url;

      if (
        hostname === 'twitter.com'
          || hostname === 'micro.blog'
          || hostname === 'vimeo.com'
          || hostname === 'youtube.com'
      ) {
        // Services with a http://hostname.com/username URL structure
        url = 'http://' + match[2] + '/' + match[1];
      } else {
        // Everything are services with a http://hostname.com/@username URL structure like Mastodon
        url = 'http://' + match[2] + '/@' + match[1];
      }

      return '<a href="'
        + encodeURI(url)
        + '" rel="external">@'
        + encodeURI(match[1])
        + '</a>';
    },
  );

  const plugins = [
    require('markdown-it-abbr'),
    [require('markdown-it-anchor'), {
      permalink: false,
      slugify: uslugify,
    }],
    [require('markdown-it-attribution'), {
      classNameContainer: false,
      classNameAttribution: false,
    }],
    require('markdown-it-attrs'),
    require('markdown-it-bracketed-spans'),
    require('markdown-it-deflist'),
    require('markdown-it-footnote'),
    [require('markdown-it-image-figures'), {
      figcaption: true,
      lazy: true,
      async: true,
    }],
    [require('markdown-it-table-of-contents'), {
      containerClass: '',
      listType: 'ol',
      slugify: uslugify,
    }],
    convertSocialHandle,
  ];

  const parser = markdown(options);

  if (plugins) {
    for (const plugin of plugins) {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    }
  }

  return parser;
})();
