module.exports = (config) => {
  config.set({
    frameworks: ['mocha'],
    files: [
      'test/**/*Spec.js',
    ],
    preprocessors: {
      'test/**/*Spec.js': ['webpack']
    },
    webpack: {
      experiments: {
        topLevelAwait: true
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    browsers: ['Chrome']
  })
}
