const { cx, Version } = require('@bsi-cx/design-build');

module.exports = cx.contentElementGroup
    .withGroupId('template-elements-pzkdm5')
    .withLabel('Template Elements')
    .withMinVersion(Version.CX_26_1)
    .withRawContentElements(
        require('./script'))