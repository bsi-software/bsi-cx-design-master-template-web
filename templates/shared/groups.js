/**
 * Specification of the Content Element Groups.
 * 
 * Add new groups here.
 * 
 */

// TODO: Kann später raus, ist nur zum prüfen ob in der StandardLib alles korrekt referenziert ist
const { oldContentElementGroup } = require('@bsi-cx/design-standard-library-web/content-elements/_old-content-elements');

const { layoutGroup } = require('@bsi-cx/design-standard-library-web/content-elements/layout');
const { buttonGroup } = require('@bsi-cx/design-standard-library-web/content-elements/buttons');

sharedGroups = [
    // TODO: Kann später raus, ist nur zum prüfen ob in der StandardLib alles korrekt referenziert ist
    oldContentElementGroup,

    layoutGroup,
    buttonGroup,
    
]

module.exports.landingpageGroups = sharedGroups
module.exports.websiteGroups = sharedGroups
