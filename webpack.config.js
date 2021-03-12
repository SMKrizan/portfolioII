const webpack = require('webpack');
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "node_modules/pdfjs-dist/cmaps", to: "cmaps/" },
                { from: "source", to: "dest" },
                { from: "other", to: "public" },
            ],
            options: {
                concurrency: 100,
            }
        }),
    ],
};

