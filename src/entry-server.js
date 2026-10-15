// Build-time entry used by scripts/build.js to pre-render the page to static HTML.
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import vuetify from './plugins/vuetify'

export async function render() {
  const app = createSSRApp(App).use(vuetify)
  const html = await renderToString(app)
  // Vuetify injects its theme colours at runtime; inline them so the static HTML matches.
  const themeCss = vuetify.theme.styles.value
  return { html, themeCss }
}
