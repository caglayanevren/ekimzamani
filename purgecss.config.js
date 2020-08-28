module.exports = {
    content: ["**/*.hbs"],
    whitelist: ["body","fullpage","fp-enabled","fp-nav","right","active","show","is-active","tns-slider","tns-outer","tns-inner"],
    whitelistPatterns: [/^tns/, /^fp/, /^nav/],
    whitelistPatternsChildren: [/^tns/, /^fp/, /^nav/]
}