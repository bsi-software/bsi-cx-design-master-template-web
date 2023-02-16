const path = require('path');
var package = require('./package.json');

const {BuildConfig, WebpackConfigBuilder, Version, DesignType, ModuleConfig} = require('@bsi-cx/design-build');

const landingpageBuildConfig = new BuildConfig()
  .withName('master-template-cx-22.0-landingpage')
  .withVersion(package.version)
  .withDesignType(DesignType.LANDINGPAGE)
  .withTargetVersion(Version.CX_22_0)
  .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
  .withAssetResourceRuleFilename('static/[name][ext]')
  .withPropertiesFilePath(path.resolve(__dirname, 'properties.js'))
  .withModulesRootPath('modules')
  .withModules(
    new ModuleConfig()
      .withName('main')
      .withPath('main.js'));

const websiteBuildConfig = new BuildConfig()
  .withName('master-template-cx-22.0-website')
  .withVersion(package.version)
  .withDesignType(DesignType.WEBSITE)
  .withTargetVersion(Version.CX_22_0)
  .withRootPath(path.resolve(__dirname, 'templates', 'website'))
  .withAssetResourceRuleFilename('static/[name][ext]')
  .withPropertiesFilePath(path.resolve(__dirname, 'properties.js'))
  .withModulesRootPath('modules')
  .withModules(
    new ModuleConfig()
      .withName('main')
      .withPath('main.js'));

module.exports = WebpackConfigBuilder.fromConfigs(
  websiteBuildConfig.clone()
    .withName('master-template-cx-1.3-website-de')
    .withTargetVersion(Version.CX_1_3)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  /*websiteBuildConfig.clone()
    .withName('master-template-cx-1.3-website-en')
    .withTargetVersion(Version.CX_1_3)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-en.js')),*/
  websiteBuildConfig.clone()
    .withName('master-template-cx-22.0-website-de')
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  /*websiteBuildConfig.clone()
    .withName('master-template-cx-22.0-website-en')
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-en.js')),*/
  landingpageBuildConfig.clone()
    .withName('master-template-cx-1.3-landingpage-de')
    .withTargetVersion(Version.CX_1_3)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  /*landingpageBuildConfig.clone()
    .withName('master-template-cx-1.3-landingpage-en')
    .withTargetVersion(Version.CX_1_3)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-en.js')),*/
  landingpageBuildConfig.clone()
    .withName('master-template-cx-22.0-landingpage-de')
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  /*landingpageBuildConfig.clone()
    .withName('master-template-cx-22.0-landingpage-en')
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-en.js'))*/);