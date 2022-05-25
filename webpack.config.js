const path = require('path');

const {BuildConfig, WebpackConfigBuilder, Version, DesignType, ModuleConfig} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('master-template-2.0-website')
    .withVersion('1.0.0')
    .withDesignType(DesignType.WEBSITE)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'website'))
    .withPropertiesFilePath(path.resolve(__dirname, 'properties.js'))
    .withModulesRootPath('modules')
    .withModules(
      new ModuleConfig()
        .withName('main')
        .withPath('main.js')),
  new BuildConfig()
    .withName('master-template-2.0-landingpage')
    .withVersion('1.0.0')
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withPropertiesFilePath(path.resolve(__dirname, 'properties.js'))
    .withModulesRootPath('modules')
    .withModules(
      new ModuleConfig()
        .withName('main')
        .withPath('main.js')));