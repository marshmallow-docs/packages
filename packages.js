module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: [
            'introduction',
        ],
    }, {
        title: "Support",
        collapsable: false,
        children: prefix('support', [
            'helpers',
        ]),
    }, {
        title: "Nova",
        collapsable: false,
        children: prefix('nova', [
            'translatable',
            'live-update',
        ]),
    }, {
        title: "SEO",
        collapsable: false,
        children: prefix('seo', [
            'rich-content',
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
