const pluginPkg = require('../../package.json');

const pluginId = pluginPkg.name.replace(/^simple-strapi-/i, '').replace(/-plugin/i, '');

module.exports = pluginId;
