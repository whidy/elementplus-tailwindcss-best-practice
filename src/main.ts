import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '@/assets/styles/modern-normalize.css'  // 这是第三方基础样式
import '@/assets/styles/main.css'  // 这是tailwindcss的样式

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
