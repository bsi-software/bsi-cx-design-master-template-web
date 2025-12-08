require('./styles/styles.scss');

const {cx, SchemaVersion, Locale} = require('@bsi-cx/design-build');

// TODO: Kann später raus, ist nur zum prüfen ob in der StandardLib alles korrekt referenziert ist
const { oldContentElements } = require('@bsi-cx/design-standard-library-web/content-elements/old-content-elements');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template 2.0 - Landingpage')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate(new Date().toLocaleString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }))
  .withPreviewImage('static/header.png')
  .withContentElementGroups(

    // TODO: Kann später raus, ist nur zum prüfen ob in der StandardLib alles korrekt referenziert ist
    cx.contentElementGroup
      .withGroupId('old-content-elements-6657fcec')
      .withLabel('Alte Content Elemente')
      .withContentElements(
        ...oldContentElements,
      ),

    cx.contentElementGroup
      .withGroupId('header-Eev4oq')
      .withLabel('Header')
      .withContentElements(

      ),
    cx.contentElementGroup
      .withGroupId('layout-EhFpQ7')
      .withLabel('Layout')
      .withContentElements(

      ),
    cx.contentElementGroup
      .withGroupId('headings-J9rRcv')
      .withLabel('Überschriften')
      .withContentElements(
        
      ),
    cx.contentElementGroup
      .withGroupId('content-JFLFHv')
      .withLabel('Inhalt')
      .withContentElements(
        
      ),
    cx.contentElementGroup
      .withGroupId('forms-NjbmnQ')
      .withLabel('Formular')
      .withContentElements(
       
      ),
    cx.contentElementGroup
      .withGroupId('footer-lJ2X2V')
      .withLabel('Footer')
      .withContentElements(

      )
  );