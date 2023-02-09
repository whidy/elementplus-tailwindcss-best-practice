import { createApp } from 'vue'
import '@/assets/styles/main.css'

// ! 需要手动添加相关样式。
import 'ant-design-vue/es/message/style/css'

import App from './App.vue'
const app = createApp(App)
app.mount('#app')
