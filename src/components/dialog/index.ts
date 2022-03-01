import ElDialog from './Dialog.vue'
import {App} from 'vue'
export default {
  install(app:App){
    app.component(ElDialog.name,ElDialog)
  }
}