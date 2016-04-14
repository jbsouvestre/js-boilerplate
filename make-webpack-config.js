import fs from 'fs';
import path from 'path';
import assign from 'object-assign';

import webpack from 'webpack';

const basePath = path.join(__dirname);

export default function makeWebpackConfig(options) {
    const DEV = !!options.dev;

    const PROD = !DEV;

    const basePlugins = [
        new webpack.DefinePlugin({
            DEBUG: DEV
        })
    ];

    return {
        entry: path.join(basePath, 'src/index.js'),
        output: {
            path: path.join(basePath, 'dist'),
            filename: 'bundle.js' 
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: basePlugins
    };
}