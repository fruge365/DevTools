import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './pinia'

// Naive UI
import naive from 'naive-ui'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

// 样式
import '@/assets/sass/main.css'
import '@/assets/sass/animations.scss'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(naive)

app.mount('#app')
