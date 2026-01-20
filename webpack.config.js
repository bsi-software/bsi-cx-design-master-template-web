const path = require('path');
const package = require('./package.json');

const { BuildConfig, WebpackConfigBuilder, Version, DesignType, ModuleConfig } = require('@bsi-cx/design-build');

const config = (designType, cxVersion, language) => new BuildConfig()
  .withDesignType(designType)
  .withName([package.project, designType.toString(), cxVersion.toString(), language].join('-'))
  .withVersion(package.version)
  .withTargetVersion(cxVersion)
  .withRootPath(path.resolve(__dirname, 'templates', designType.toString()))
  .withAssetResourceRuleFilename('static/[name][ext]')
  .withPropertiesFilePath(path.resolve(__dirname, `properties-${language}.js`))
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
  config(DesignType.LANDINGPAGE, Version.CX_25_2, 'de'),
  config(DesignType.LANDINGPAGE, Version.CX_25_2, 'en'),
  config(DesignType.WEBSITE, Version.CX_25_2, 'de'),
);
