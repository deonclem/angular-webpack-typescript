'use strict';

const path = require('path');
const webpackConfig = require('./webpack.config.js')({});

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],
    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec'
      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      //'coverage'
    ],
    files: ['**/*.spec.ts'],
    preprocessors: {
      '**/*.spec.ts': ['webpack']
    },
    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],
    singleRun: true,
    webpack: webpackConfig,
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher')
    ]
  });
};