import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './style.css'

// Production builds ship pre-rendered HTML (scripts/build.js) so search engines see the full
// page — hydrate that markup instead of re-rendering. The dev server serves an empty #app.
const root = document.getElementById('app')
const app = root.firstElementChild ? createSSRApp(App) : createApp(App)

app.use(vuetify).mount(root)
