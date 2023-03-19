import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css";
import "./assets/css/index.scss";
import "./assets/icon/index.js";
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

for(let i in Icons){
    // @ts-ignore
    app.component(i, Icons[i])
}

app.use(router).use(ElementPlus)

app.mount('#app')
