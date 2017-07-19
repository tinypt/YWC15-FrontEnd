const _DEV_ = process.env.NODE_ENV !== 'production';

console.log('ENVIRONMENT:', process.env.NODE_ENV);

const commonConfig = {
  isProduction: !_DEV_,
  port: 3000,
};

const developmentConfig = {
  apiPath: 'http://localhost:3001',
  facebookAppsID: '134784707110171',
};

const productionConfig = {
  apiPath: 'http://localhost:3001',
  facebookAppsID: '715340261988670'
};

module.exports = Object.assign(commonConfig, _DEV_ ? developmentConfig : productionConfig);
