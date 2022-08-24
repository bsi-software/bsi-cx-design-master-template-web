const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('footer-gradient-SHcAzZ')
  /*.withLabel('Footer gradient')*/
  .withLabel('Farbverlauf')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('No gradient')*/
      .withLabel('Ohne Farbverlauf')
      .withCssClass('default'),
    cx.cssClass
      /*.withLabel('Show gradient')*/
      .withLabel('Mit Farbverlauf')
      .withCssClass('bg-gradient'));