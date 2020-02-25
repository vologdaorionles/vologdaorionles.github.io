// var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
  	rules: [{
  		test: /\.scss$/,
  		use: [
  			'style-loader',
  			'css-loader',
  			'sass-loader'
  		]
  	}]
  }
}
