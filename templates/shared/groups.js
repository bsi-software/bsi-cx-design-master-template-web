/**
 * Specification of the Content Element Groups.
 * 
 * Add new groups here.
 * 
 */

// TODO: Kann später raus, ist nur zum prüfen ob in der StandardLib alles korrekt referenziert ist
const { cx } = require('@bsi-cx/design-build');

const { oldContentElementGroup } = require('@bsi-cx/design-standard-library-web/content-elements/_old-content-elements');

const { layoutGroup } = require('@bsi-cx/design-standard-library-web/content-elements/layout');
const { buttonGroup } = require('@bsi-cx/design-standard-library-web/content-elements/buttons');
const { textGroup } = require('@bsi-cx/design-standard-library-web/content-elements/text-elements');

sharedGroups = [
    // TODO: Kann später raus, ist nur zum prüfen ob in der StandardLib alles korrekt referenziert ist
    oldContentElementGroup,

    layoutGroup,
    buttonGroup.addOrReplaceElements(require('./content-elements/override-button')),
    textGroup,
]

module.exports.landingpageGroups = sharedGroups
module.exports.websiteGroups = sharedGroups
