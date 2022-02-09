import ElButton from './Button.vue'
import {App} from 'vue'
export default{
  install(app:App){
    app.component(ElButton.name,ElButton)
  }
}