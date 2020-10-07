module.exports = {
    content: ["**/*.hbs"],
    whitelist: ["body", "right", "active", "show", "is-active", "tns-slider", "tns-outer", "tns-inner", "fixed-top", "fas", "fa-2x", "fa-arrow-left", "fa-arrow-right", "color-kahve", "scrolled", "unscrolled-image", "scrolled-image", "js-font-decrease", "js-font-increase", "js-font-normal", "title-top-space-for-header", "font-resize"],
    whitelistPatterns: [/^tns/, /^nav/],
    whitelistPatternsChildren: [/^tns/, /^nav/]
}