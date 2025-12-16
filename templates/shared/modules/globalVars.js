const getMetaValue = (attribute) => document.querySelector(`meta[name=x-${attribute}]`).getAttribute('value');

const globalVars = {
    websiteBaseUrl: getMetaValue('websiteBaseUrl'),
    resourceBaseUrl: getMetaValue('resourceBaseUrl'),
    language: getMetaValue('language'),
    locale: getMetaValue('locale'),
    localizedWebsiteBaseUrl: getMetaValue('localizedWebsiteBaseUrl'),
}

module.exports.globalVars = globalVars;