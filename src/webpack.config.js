const webpack = require('webpack'),
    path = require('path');

const APP_DIR = path.resolve(__dirname, "./src/");
const browserConfig = {
    entry:

        APP_DIR + 'index.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
}