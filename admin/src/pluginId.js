const pluginPkg = require('../../package.json');

const pluginId = pluginPkg.name.replace(/^simple-strapi-plugin-/i, '');

module.exports = pluginId;
