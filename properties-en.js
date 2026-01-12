// ------------------------------------------------------------
// Project Localization Properties (English)
//
// Purpose:
// - Contains all language-specific text values for project-specific components,
//   such as labels, titles, messages, or descriptions.
// - One file per language, selected at build time.
//
// Notes:
// - This file must contain text values only.
// - Do NOT include styling, layout, or library logic.
// - Keys should remain consistent across languages to ensure predictable lookups.
// - Component code should never contain hardcoded text; all user-facing strings
//   must be defined here.
// ------------------------------------------------------------

const properties = require('@bsi-cx/design-standard-library-web/properties-en.js');
const baseProperties = require('./properties');

module.exports = {
  ...properties,
  ...baseProperties,
  language: 'en',
}