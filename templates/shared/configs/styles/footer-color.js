const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('footer-color-XteOpB')
  /*.withLabel('Footer color')*/
  .withLabel('Footer Farbe')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bg-primary'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bg-secondary'),
    cx.cssClass
      /*.withLabel('Dark')*/
      .withLabel('Dunkel')
      .withCssClass('bg-dark'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Hell')
      .withCssClass('bg-light'));