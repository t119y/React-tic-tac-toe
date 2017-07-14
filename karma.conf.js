module.exports = function(config) { 
  config.set({ 
    basePath: '', 
    frameworks: ['jasmine'], 
    files: [ 
      'test/**/*.js' 
    ], 
    exclude: [], 
    preprocessors: { 
      'test/**/*.js': ['webpack', 'coverage'] 
    }, 
    reporters: ['progress', 'coverage'], 
    coverageReporter: { 
      type: 'html', 
      dir: 'coverage/' 
    }, 
    port: 9876, 
    colors: true, 
    logLevel: config.LOG_INFO, 
    autoWatch: true, 
    browsers: ['Chrome'], 
    singleRun: false, 
    concurrency: Infinity, 
    webpack: { 
      module: { 
        loaders: [{ 
          test: /\.js$/, 
          loader: 'babel', 
          exclude: /node_modules/, 
          query: { 
            presets: ['es2015'] 
          } 
        }] 
      } 
    } 
  }) 
}  