var path = require('path');

module.exports = function(appName) {
    return {
        root: path.resolve(__dirname + '/..'),
        alias: {
            common: 'frontend/common'
        },
    };
}
