const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const js_loaders = [
    {
        loader: '@deriv/shared/src/loaders/react-import-loader.js',
    },
    {
        loader: '@deriv/shared/src/loaders/deriv-account-loader.js',
    },
    {
        loader: '@deriv/shared/src/loaders/deriv-reports-loader.js',
    },
    {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            rootMode: 'upward',
        },
    },
];

const html_loaders = [
    {
        loader: 'html-loader',
    },
];

const file_loaders = [
    {
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    },
];

const svg_file_loaders = [
    {
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    },
];

const svg_loaders = [
    {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            rootMode: 'upward',
        },
    },
    {
        loader: 'react-svg-loader',
        options: {
            jsx: true,
            svgo: {
                plugins: [
                    { removeTitle: false },
                    { removeUselessStrokeAndFill: false },
                    { removeUknownsAndDefaults: false },
                ],
                floatPrecision: 2,
            },
        },
    },
];

const css_loaders = [
    {
        loader: MiniCssExtractPlugin.loader,
    },
    {
        loader: 'css-loader',
        options: {
            sourceMap: true,
        },
    },
    {
        loader: 'postcss-loader',
        options: {
            sourceMap: true,
            postcssOptions: {
                config: path.resolve(__dirname),
            },
        },
    },
    {
        loader: 'resolve-url-loader',
        options: {
            sourceMap: true,
            keepQuery: true,
        },
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
        },
    },
    {
        loader: 'sass-resources-loader',
        options: {
            resources: require('@deriv/shared/src/styles/index.js'),
        },
    },
];

module.exports = {
    js_loaders,
    html_loaders,
    file_loaders,
    svg_loaders,
    svg_file_loaders,
    css_loaders,
};
