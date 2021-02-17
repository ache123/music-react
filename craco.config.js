
// __dirname当前文件所在路径与dir拼接
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);



module.exports = {

  // 为文件夹起别名
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components"),
    }
  }
};