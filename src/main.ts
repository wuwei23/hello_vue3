import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//使用路由器
app.use(router)
//应用挂在到app容器
app.mount('#app')
