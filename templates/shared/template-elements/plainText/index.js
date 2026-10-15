module.exports = {
    type: "template-element",
    elementId: "plain-text-m7vt8z",
    label: "Plain Text Element",
    icon: "megaphone",
    file: require('./plainText.hbs'),
    contextFile: "context/plainText-context.json",
    templateParts: [
        {
            partContextId: "my-text",
            partId: "plain-text",
            label: "schreib was",
            config: {
                studioLinkEnabled: true
            }
        }
    ],
}