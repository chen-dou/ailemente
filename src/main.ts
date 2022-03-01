import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container'
import ElButton from './components/button'
import ElDialog from './components/dialog'
import  ElForm from './components/form'
const app = createApp(App)
app.use(ElContainer).use(ElDialog).use(ElButton).use(ElForm).mount('#app')
