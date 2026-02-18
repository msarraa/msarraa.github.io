import { createApp } from 'vue'
import './styles/global.css'
import router from "./router"
import App from './App.vue'

createApp(App).use(router).mount("#app")

