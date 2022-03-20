const markdown = require('markdown-it');
const uslug = require('uslug');

module.exports = (() => {
  /**
   * Convert string to Twitter URL
   *
   * @param {string} string e.g. 'alienlebarge'
   * @returns {URL} e.g. 'https://twitter.com/@alienlebarge'
   */
  function parseURL(string) {
    return `https://twitter.com/@${string}`;
  }

  const uslugify = s => uslug(s);

  const options = Object.assign({
    html: true,
    breaks: true,
    typographer: true,
  });

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
    [require('markdown-it-mentions'), {
      parseURL,
    }],
    [require('markdown-it-table-of-contents'), {
      containerClass: '',
      listType: 'ol',
      slugify: uslugify,
    }],
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
