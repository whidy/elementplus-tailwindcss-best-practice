import { createApp } from 'vue'
import ElementPlus from 'element-plus'

/**
 * 完整导入ElementPlus组件时，如果保持下面的顺序则出现按钮样式不正确的问题
 * 调换顺序即可解决
 */
import '@/assets/styles/main.css'  // 这是tailwindcss的样式
import 'element-plus/dist/index.css' // 这一行应该放在tailwindcss的样式之后

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
