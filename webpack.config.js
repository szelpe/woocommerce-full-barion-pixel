const path = require('path');

module.exports = {
    entry: {
        index: './js/src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js/dist')
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '*'],
        modules: [path.resolve(__dirname, "js"), "node_modules"]
    }
};
