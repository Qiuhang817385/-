const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')
const rewiredMap = () => (config) => {
  // console.log('config', config)
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};

const bundleAnalyzer = () => (config) => {
  if (config.mode === 'production') {
    console.log('config', config)
    config = rewireWebpackBundleAnalyzer(config, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    })
    return config
  }
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  rewiredMap(),
  bundleAnalyzer()
);
