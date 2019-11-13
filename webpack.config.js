const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/js/index.js",
    deliveryWithFitting: "./src/js/pages/deliveri-with-fitting.js",
    pvz: "./src/js/pages/pvz.js",
    address: "./src/js/pages/address.js",
    mainPage: "./src/js/pages/main-page.js",
    photoBundle: "./src/js/pages/photoBundle.js"
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          query: {
            presets: [["@babel/preset-env", { modules: false }]]
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  resolve: {
    alias: {
      "%modules%": path.resolve(__dirname, "src/blocks/modules"),
      "%components%": path.resolve(__dirname, "src/blocks/components")
    }
  }
};
