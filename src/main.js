import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import '@/styles/element-variables.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(ElementPlus,{
    locale: zhCn, // 设置语言为中文
})
app.use(router)

app.mount('#app')
