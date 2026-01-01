import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import vuetify from './plugins/vuetify'
import 'vuetify/styles'

const app = createApp(App)
app.use(store)
app.use(vuetify)
app.mount('#app')
