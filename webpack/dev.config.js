const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(baseConfig, {
    plugins: [
        new Dotenv({
            path: './.env.development'
        })
    ],
});