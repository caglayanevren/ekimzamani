module.exports = {
    content: ["**/*.hbs"],
    whitelist: ["body", "right", "active", "show", "is-active", "tns-slider", "tns-outer", "tns-inner"],
    whitelistPatterns: [/^tns/, /^nav/],
    whitelistPatternsChildren: [/^tns/, /^nav/]
}