import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
//安装pinia
app.use(pinia)
//使用路由器
app.use(router)
//应用挂在到app容器
app.mount('#app')


