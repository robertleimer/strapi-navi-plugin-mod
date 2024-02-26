const pluginPkg = require('../../package.json');

// const pluginId = pluginPkg.name.replace(/^simple-strapi-plugin-/i, '').replace(/-plugin/i, '');
const pluginId = pluginPkg.strapi.name

module.exports = pluginId;
