const { AbstractConstant, cx } = require('@bsi-cx/design-build');
const editorConfig = require('@bsi-cx/design-standard-library-web/configs/editor/full');

module.exports = editorConfig.withIdentifier('editor-b4')
.withFeatures(...editorConfig.features, new AbstractConstant('studioLink'))
// .withRawFeatures(...editorConfig.features.map(feature => feature.value), 'studioLink');