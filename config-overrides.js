//重写webpack的配置文件
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
  //antd按需引入的配置
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  //别名的配置
  addWebpackAlias({
    '@':path.resolve(__dirname,'./src')
  })
);
