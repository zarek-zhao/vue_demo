import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './router/index'
import qs from 'qs'


const app = createApp(App)


app.use(routes).use(ElementPlus).use(qs).mount('#app')
app.config.globalProperties.$qs=qs


export default app
