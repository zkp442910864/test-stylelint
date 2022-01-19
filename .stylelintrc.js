// https://juejin.cn/post/6940127032932040735
// https://stylelint.io/user-guide/rules/list

module.exports = {
    // order 排序
    plugins: [
        'stylelint-order'
    ],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-idiomatic-order',
        'stylelint-config-html/html',
        'stylelint-config-html/vue',
    ],
    rules: {
        // 缩进
        indentation: 4,
        // 'custom-property-no-missing-var-function': null,
        // 'custom-property-no-missing-var-function': [true, { ignoreProperties: ['transition', 'transition-property'] }],
        // css前缀 true不允许
        'property-no-vendor-prefix': null,
        // css前缀 true不允许
        'value-no-vendor-prefix': null,
        // 单行语言最大
        'declaration-block-single-line-max-declarations': 3,
        // 引号类型
        'string-quotes': ['single', { avoidEscape : false }],
        // {} 前后空格
        'block-opening-brace-space-after': 'never-single-line',
        'block-closing-brace-space-before': 'never-single-line',
    },
};
