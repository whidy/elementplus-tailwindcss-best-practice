# Vite搭建的ElementPlus和TailwindCSS项目

主要结合文章展示的一个DEMO。

建议安装[Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)和[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)两个插件。

当前分支（`solution-2`），采用移除TailwindCSS的基础样式，使用自己定制化样式解决。

TailwindCSS无论是配置文件 `tailwind.config.js` 的定制化还是的样式文件 `main.css` 定制化都是有较强的灵活性的。一开始就提到了那段糟糕的按钮样式，其实可以通过几个方式避免：

1. 移除`main.css`内的`@tailwind base;`这行代码；
2. 修改配置文件`tailwind.config.js`，禁用掉默认开启的`preflight`。文档：[Disabling Preflight](https://tailwindcss.com/docs/preflight#disabling-preflight)

上面的操作**二选一**即可，当然你非要同时操作也不会爆炸XD。完整的官方文档：[Preflight](https://tailwindcss.com/docs/preflight)

不过没有了基础样式，有个很容易解决的小问题：**不同浏览器都有自带的默认样式**，那页面的效果就会有所不同，因此，禁用了TailwindCSS的基础样式后，我们需要创建新的基础样式，我个人建议如下：

* 使用[`normalize.css`](https://github.com/necolas/normalize.css)中的样式，我印象中`TailwindCSS 1.x`的时候就用的它的改进版；
* 使用`TailwindCSS 3.x`文档中提到的基于[`modern-normalize`](https://github.com/sindresorhus/modern-normalize)改进的基础样式表原版；
* 还有许多基础样式库，比如：[`minireset.css`](https://github.com/jgthms/minireset.css)，或者搜索[reset.css](https://github.com/search?q=reset.css)寻找适合自己的；
* 当然你也可以手写一套，其实早期前端很多都是手写的，如果老前端开发的话也许还记得`YUI`的`reset.css`（*貌似暴露了自己老了还很菜的事实*）。

关于基础样式也要注意， `normalize.css` 或是 `modern-normalize` 他们和 `reset.css` 有这不同的设计理念，所以你依旧要自己决定哪种适合自己，前者会保留部分浏览器自带样式例如段落p的样式。至于是手动添加一个css文件还是通过npm来安装并import，没有什么实质区别。

所以特别需要注意的是：*开发新项目初期就务必做好基础样式配置*（曾经因为用了不好的 `reset.css` 后面大批修改样式的惨剧）：

> 附上当前最新版（3.0.15）的TailwindCSS的[preflight.css](https://unpkg.com/tailwindcss@3.0.15/src/css/preflight.css)文件地址。搜索该文件 `Remove default button styles.` 找到罪魁祸首~

但该方案其实没有解决终极问题，就是构建出的文件，css顺序问题。只是避免了按钮样式错误的问题。
