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
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
            // Optional
            // {
            //     loader: require.resolve('react-docgen-typescript-loader'),
            // },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
