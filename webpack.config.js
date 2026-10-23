const path = require('path');
const package = require('./package.json');
const { BuildConfig, WebpackConfigBuilder, Version, DesignType, ModuleConfig } = require('@bsi-cx/design-build');

// project Properties
const project = "master-template";
const version = Version.CX_25_2;

const templatesToGenerate = [
  { designType: "landingpage" },
  { designType: "landingpage", langSuffix: '-en' },
  { designType: "website" },
]

// end project properties

const filesToCopy = [
  {
    from: path.resolve(__dirname, 'templates', 'shared', 'static', 'header.png'),
    to: 'static/header.png',
  },
  // TODO: remove with build 2.x
  {
    from: '../shared/template-elements/**/*.json',
    to: 'context/[name][ext]'
  }
]

const build = (designType, langSuffix = "") => new BuildConfig()
  .withName([project, version._value.substring(0, 4), designType + langSuffix].join("-"))
  .withVersion(package.version)
  .withDesignType(designType === "landingpage" ? DesignType.LANDINGPAGE : DesignType.WEBSITE)
  .withTargetVersion(version)
  .withRootPath(path.resolve(__dirname, 'templates', designType))
  .withAssetResourceRuleFilename('static/[name][ext]')
  .withPropertiesFilePath(path.resolve(__dirname, `properties${langSuffix}.js`))
  .withModulesRootPath('modules')
  .withModules(new ModuleConfig('main', 'main.js'))
  .withAdditionalFilesToCopy(...filesToCopy);

module.exports = WebpackConfigBuilder.fromConfigs(
  ...templatesToGenerate.map(template => build(template.designType, template.langSuffix))
);