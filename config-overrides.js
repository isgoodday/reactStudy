/* 
  webpack的配置型文件
*/
const path = require( 'path' )
const {
  override,
  fixBabelImports,
  addWebpackAlias
} = require( 'customize-cra' )

module.exports = override(
  fixBabelImports('import', {
        libraryName: 'antd-mobile',
         style: 'css',
      }),
  addWebpackAlias({
    // [路径名称]: 磁盘路径
    ['@']: path.join( __dirname, 'src' ),
    ['pages']: path.join( __dirname, 'src/component/pages' ), //组件
    ['store']: path.join( __dirname, 'src/store' ),         //Redux
    ['assets']: path.join( __dirname, 'src/assets' ),       //css资源
    ['utils']: path.join( __dirname, 'src/utils' ),       //插件库
  })
)