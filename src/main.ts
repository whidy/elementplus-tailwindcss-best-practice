import { createApp } from 'vue'
import ElementPlus from 'element-plus'

/**
 * 完整导入ElementPlus组件时，如果出现按钮样式不正确的问题
 * 调换顺序即可解决，请保证element-plus在tailwindcss样式后面import
 * 2022年05月30日：在升级Element Plus v2.2.0之后按钮的样式问题已不存在
 */
import '@/assets/styles/main.css'  // 这是tailwindcss的样式
import 'element-plus/dist/index.css' // 这一行应该放在tailwindcss的样式之后

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
