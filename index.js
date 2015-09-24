const airbnbEslintConfig = require('eslint-config-airbnb/base');
const extend = require('extend');
const fs = require('fs');
const path = require('path');
const overrideConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '.eslintrc')));

module.exports = extend(true, {}, airbnbEslintConfig, overrideConfig);
