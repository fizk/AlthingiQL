const webpack = require("webpack");
const DefinePlugin = require('webpack').DefinePlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: "./src/client/index.tsx",
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
    },

    stats: {
        excludeModules: 'node_modules',
    },

    mode: process.env.NODE_ENV || "development",
    // mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", '.mjs']
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css'
        }),
        new DefinePlugin({
            __GRAPHQL_SERVER__: JSON.stringify(process.env.GRAPHQL_SERVER || 'http://localhost:3000/graphql'),
            __FORWARDER_SERVER__: JSON.stringify(process.env.FORWARDER_SERVER || 'http://localhost:8008'),
            __DEVELOPMENT__: JSON.stringify(process.env.NODE_ENV === 'development')
        })
    ],
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
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
            },

            // // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },

    // // When importing a module whose path matches one of the following, just
    // // assume a corresponding global variable exists and use that instead.
    // // This is important because it allows us to avoid bundling all of our
    // // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
