const { cx, Version } = require('@bsi-cx/design-build');

module.exports = cx.contentElementGroup
    .withGroupId('template-elements-pzkdm5')
    .withLabel('Template Elements')
    .withMinVersion(Version.CX_25_2)
    .withRawContentElements(
        require('./plainText'),
        require('./script'))