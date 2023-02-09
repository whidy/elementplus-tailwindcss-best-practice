# Vite + Antd Vue + TailwindCSS

这是另一个新的DEMO。

建议安装[Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)和[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)两个插件。

## 2023年02月09日

关于样式覆盖，样式冲突等问题的帖子反复有人讨论：[3.x newly increased button... style influence](https://github.com/tailwindlabs/tailwindcss/discussions/5969)，故而我又把这个老项目弄出来，之前说的 `element-plus` 我检测过了没啥问题，但是其他的UI库似乎依然有问题，比如说结合 `antdv` 的时候，我也做了下测试，其中 `button` 的问题不存在了。但是 `message` 的问题又出现了，我这里就不放在线 `demo` 了，有兴趣的可以看 `antdv` 分支自己测试下咯（当然这种冲突问题一般来说不可避免，我在demo中也有文字说明）。

另外我这次更新只是与时俱进，更新了依赖版本，总而言之，在使用目前最新的 `vite4.1.0` ， `element-plus2.2.29` ， `vue3.2.45` 采用按需加载的模式，简单的配置，一切都是正常的。也提供给需要的朋友做个参考。
