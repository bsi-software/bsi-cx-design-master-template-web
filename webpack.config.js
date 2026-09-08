const path = require('path');
const package = require('./package.json');

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
      .withPath('main.js'))
  .withAdditionalFilesToCopy({
    from: path.resolve(__dirname, 'templates', 'shared', 'static', 'header.png'),
    to: 'static/header.png',
  });
      

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
      .withPath('main.js'))
  .withAdditionalFilesToCopy({
    from: path.resolve(__dirname, 'templates', 'shared', 'static', 'header.png'),
    to: 'static/header.png',
  });

module.exports = WebpackConfigBuilder.fromConfigs(
  websiteBuildConfig.clone()
    .withName('master-template-cx-1.3-website')
    .withTargetVersion(Version.CX_1_3)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  websiteBuildConfig.clone()
    .withName('master-template-cx-22.0-website')
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  websiteBuildConfig.clone()
    .withName('master-template-cx-23.2-website')
    .withTargetVersion(Version.CX_23_2)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  websiteBuildConfig.clone()
    .withName('master-template-cx-24.2-website')
    .withTargetVersion(Version.CX_24_2)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  landingpageBuildConfig.clone()
    .withName('master-template-cx-1.3-landingpage-de')
    .withTargetVersion(Version.CX_1_3)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  landingpageBuildConfig.clone()
    .withName('master-template-cx-22.0-landingpage-de')
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  landingpageBuildConfig.clone()
    .withName('master-template-cx-23.2-landingpage-de')
    .withTargetVersion(Version.CX_23_2)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  landingpageBuildConfig.clone()
    .withName('master-template-cx-24.2-landingpage-de')
    .withTargetVersion(Version.CX_24_2)
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-de.js')),
  landingpageBuildConfig.clone()
    .withName('master-template-cx-22.0-landingpage-en')
    .withPropertiesFilePath(path.resolve(__dirname, 'properties-en.js')));