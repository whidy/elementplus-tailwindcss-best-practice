# Vite搭建的ElementPlus和TailwindCSS项目

主要结合文章展示的一个DEMO。

建议安装[Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)和[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)两个插件。

当前分支（`solution-1`）是按需导入ElementPlus方式中，在引入TailwindCSS的样式文件后，再引入一个全局的`ElementPlus`样式，例如：

```js
import { createApp } from 'vue'
import '@/assets/styles/main.css'  // 这是tailwindcss的样式
import "element-plus/dist/index.css"; // 重复引入ElementPlus的完整样式
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

问题解决了，新的“问题”诞生了，构建过程中可能出现的一大串警告提示：

```
warnings when minifying css:
...
```

这个对Web程序并没有什么大的影响。然而另一个问题就是，你在调试页面样式的时候会看到重复的样式类名。这是很难受的，程序员都应当尽量避免冗余代码，尤其是自己的样式优先级低了，你想关闭el的样式，**你得点两次勾**。

因此这是懒人解决方案。
