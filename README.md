# Vite搭建的ElementPlus和TailwindCSS项目

主要结合文章展示的一个DEMO。

建议安装[Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)和[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)两个插件。

当前分支（ `solution-3` ），通过修改了构建配置，index.html中引入css的方法解决。

这是目前最合适的解决方案了。

## 2022年05月30日

与此同时，这个按需加载的最佳方案，当升级大于 `2.2.0` 的 `Element Plus` 后，尝试删除 `vite.config.ts` 的 `build` 部分配置，也不再存在 `el-button` 的问题了，当然这个是因为 `2.2.0` 更新button的样式产生的巧合还是其他，我不再做过多的探索，如果在其他的组件和 `Tailwindcss` 相关样式发生冲突的时候，你可能仍然需要思考，并加以调整。关于样式冲突的问题，暂时就研究到这里了。

该分支依然保留作为学习和参考，故而不再此分支做依赖升级和配置调整的示例了。
