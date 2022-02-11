
module.exports = {
    // 用来增加些额外的规则
    plugins: [
        // order 排序
        'stylelint-order',
    ],
    // 继承其它库规则，排后面的优先级最高
    extends: [
        // 'stylelint-config-recommended',
        'stylelint-config-idiomatic-order',
        'stylelint-config-html',
        'stylelint-config-standard',
        // 'stylelint-config-recommended-less',


        // 'stylelint-config-html/html',
        // 'stylelint-config-html/vue',
    ],
    // 指定要在您的代码上使用的自定义语法。
    // customSyntax: 'postcss-less',
    // 指定默认警告级别
    // defaultSeverity: 'warning',
    // 针对特殊后缀，提供配置
    overrides: [
        {
            plugins: [
                'stylelint-scss',
            ],
            extends: [
                'stylelint-config-recommended-scss',
            ],
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
            rules: {},
        },
        {
            plugins: [
                'stylelint-less',
            ],
            extends: [
                // 'stylelint-config-recommended-less',
            ],
            files: ['*.less', '**/*.less'],
            customSyntax: 'postcss-less',
            rules: {
                // 禁止未知的伪类选择器。
                // 'selector-pseudo-class-no-unknown': [true, {
                //     ignorePseudoClasses: ['/^global/'],
                // }],
            },
        },
    ],
    rules: {
        /**
         * disableFix 该规则禁用自动修复
         * message 改规则提示信息更改
         * severity 设置错误标识 warning|error
         */
        // indentation: [4, {message: '123', severity: 'warning'}],
        // 缩进
        indentation: [4],
        // 'custom-property-no-missing-var-function': null,
        // 'custom-property-no-missing-var-function': [true, { ignoreProperties: ['transition', 'transition-property'] }],
        // css前缀 true不允许
        'property-no-vendor-prefix': null,
        // css前缀 true不允许
        'value-no-vendor-prefix': null,
        // 单行语言最大
        'declaration-block-single-line-max-declarations': 3,
        // 引号类型
        'string-quotes': ['single', {avoidEscape: false}],
        // {} 前后空格
        'block-opening-brace-space-after': 'never-single-line',
        'block-closing-brace-space-before': 'never-single-line',
        // 禁止空快
        'block-no-empty': null,
        // 最大空行
        'max-empty-lines': [2, {
            ignore: ['comments'],
        }],
    },
};
