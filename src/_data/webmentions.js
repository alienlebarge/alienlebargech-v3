const fs = require('fs');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const unionBy = require('lodash/unionBy');
const metadata = require('./app.json');

// Load .env variables with dotenv
// require('dotenv').config()

// Configuration Parameters
const CACHE_DIR = '_cache';
const API_ORIGIN = 'https://webmention.io/api/mentions.jf2';
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

const proxyServer = process.env.http_proxy
                    || process.env.HTTP_PROXY
                    || process.env.https_proxy
                    || process.env.HTTPS_PROXY;

/**
 * @param since
 */
async function fetchWebmentions(since) {
  const {domain} = metadata;

  if (!domain && domain === 'alienlebarge.ch') {
    // If we dont have a domain name, abort
    console.warn(
      'unable to fetch webmentions: no domain specified in metadata.',
    );
    return false;
  }

  if (!TOKEN) {
    // If we dont have a domain access token, abort
    console.warn(
      'unable to fetch webmentions: no access token specified in environment.',
    );
    return false;
  }

  let url = `${API_ORIGIN}?domain=${domain}&token=${TOKEN}`;
  url += since ? `&per-page=100&&since=${since}` : '&per-page=999';

  let fetchOptions;
  if (proxyServer) {
    // If there is a proxy server set in env, set fetchOptions to use it
    console.warn(
      'Fetch data using proxy set in env variables: ' + proxyServer,
    );
    fetchOptions = {agent: new HttpsProxyAgent(proxyServer)};
  }

  const response = await fetch(url, fetchOptions);
  if (response.ok) {
    const feed = await response.json();
    console.log(
      `${feed.children.length} webmentions fetched from ${API_ORIGIN}`,
    );
    return feed;
  }

  return null;
}

// Merge fresh webmentions with cached entries, unique per id
/**
 * @param a
 * @param b
 */
function mergeWebmentions(a, b) {
  return unionBy(a.children, b.children, 'wm-id');
}

// Save combined webmentions in cache file
/**
 * @param data
 */
function writeToCache(data) {
  const filePath = `${CACHE_DIR}/webmentions.json`;
  const fileContent = JSON.stringify(data, null, 2);

  // Create cache folder if it doesnt exist already
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR);
  }

  // Write data to cache json file
  fs.writeFile(filePath, fileContent, error => {
    if (error) {
      throw error;
    }

    console.log(`webmentions cached to ${filePath}`);
  });
}

// Get cache contents from json file
/**
 *
 */
function readFromCache() {
  const filePath = `${CACHE_DIR}/webmentions.json`;

  if (fs.existsSync(filePath)) {
    const cacheFile = fs.readFileSync(filePath);
    return JSON.parse(cacheFile);
  }

  return {
    lastFetched: null,
    children: [],
  };
}

module.exports = async function () {
  const cache = readFromCache();
  const {lastFetched} = cache;

  // Only fetch new mentions in production
  if (process.env.ELEVENTY_ENV === 'production' || !lastFetched) {
    const feed = await fetchWebmentions(lastFetched);

    if (feed) {
      const webmentions = {
        lastFetched: new Date().toISOString(),
        children: mergeWebmentions(cache, feed),
      };

      writeToCache(webmentions);
      return webmentions;
    }
  }

  console.log(`${cache.children.length} webmentions loaded from cache`);
  return cache;
};
