'use strict';
const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
const px2rem = require('postcss-plugin-px2rem');
const autoprefixer = require('autoprefixer');
const buildUser = require('../build-user');
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap;
const postcssData = {};
var currPostcssData = '';
postcssData.ok = [
    autoprefixer({
        browsers: ['iOS >= 7', 'Android > 4.0']
    }),
    px2rem(buildUser.px2rem())
];
postcssData.no = [
    autoprefixer({
        browsers: ['iOS >= 7', 'Android > 4.0']
    })
];
currPostcssData = buildUser.px2rem() === null ? postcssData.no : postcssData.ok;

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
    postcss: currPostcssData
};
