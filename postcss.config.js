const postCSSImport = require('postcss-import');
const postCSSNext = require('postcss-cssnext');
const postCSSReporter = require('postcss-reporter');
const cssnano = require('cssnano');
const webpack = require('webpack')

module.exports = {
  plugins: [
    postCSSImport({
      addDependencyTo: webpack,
      path: ['./src/styles'],
    }),
    postCSSNext({browsers: ['last 5 versions'] }),
    cssnano({
      autoprefixer: false,
      discardComments: {
        removeAll: true
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true,
      sourcemap: true
    }),
    postCSSReporter(),
  ]
}
