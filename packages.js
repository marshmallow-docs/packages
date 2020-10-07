module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: [
            'introduction',
        ],
    }, {
        title: "Nova",
        collapsable: false,
        children: prefix('nova', [
            'translatable',
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
