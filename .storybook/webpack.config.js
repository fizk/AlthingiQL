const path = require('path');
// const webpack = require('webpack');


module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, '../'),
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    });
    config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'babel-loader',
        query:{
            "presets": [
                ["@babel/preset-env", {
                    targets: {
                        browsers: ["last 2 versions", "safari >= 7"]
                    }
                }],
                "@babel/preset-react",
                "@babel/preset-typescript"
            ],
            "plugins": [
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread",
                "transform-es2015-modules-commonjs",
            ]
        }
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
