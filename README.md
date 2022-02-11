# test-stylelint

- [参考地址](https://juejin.cn/post/6940127032932040735)
- [stylelint 规则列表](https://stylelint.io/user-guide/rules/list)
- [stylelint 忽略](https://stylelint.io/user-guide/ignore-code/)
- [less](https://lesscss.org/)
- [scss](https://www.sass.hk/docs/)
- [less 在线工具](https://www.dute.org/less-to-css)
- [scss 在线工具](https://www.dute.org/sass-to-css)

```js
    // .stylelintrc.js
    module.exports = {
        extends: [
            '@zzzz-/stylelint-config-test',
        ],
        overrides: [
            {
                files: ['*.scss', '**/*.scss'],
                rules: {},
            },
            {
                files: ['*.less', '**/*.less'],
                rules: {
                    // 禁止未知的伪类选择器。
                    // 'selector-pseudo-class-no-unknown': [true, {
                    //     // 针对cssModule 进行global忽略
                    //     ignorePseudoClasses: ['/^global/'],
                    // }],
                },
            }
        ],
        rules: {},
    }
```


