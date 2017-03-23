const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")

const config = require("./webpack.config.js")

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
}).listen(8080, "localhost", (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("listening on http://localhost:8080");
})
