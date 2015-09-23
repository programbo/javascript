const fs = require('fs');
const path = require('path');
const eslintFile = path.join(__dirname, '.eslintrc');

module.exports = JSON.parse(fs.readFileSync(eslintFile));
