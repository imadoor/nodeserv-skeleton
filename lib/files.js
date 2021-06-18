const fs = require('fs');
const path = require('path');

const getCurrentDirBase = () => {
    return path.basename(process.cwd());
};

const dirExists = (filePath) => {
    return fs.existsSync(filePath);
};

module.exports = {
    getCurrentDirBase,
    dirExists,
}