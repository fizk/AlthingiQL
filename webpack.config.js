const path = require('path');

module.exports = {
    entry: {
        application: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname) + '/public/scripts',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2', ],
                },
            },
        ],
    },
};
