import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ─── THEME ───────────────────────────────────────────────────────────────────
// "Sunlit water in the desert" — kept in sync with src/style.css :root tokens.
const BRAND = {
  primary:    '#0E7E97', // pool teal
  secondary:  '#5A6B72', // muted slate-teal
  accent:     '#F5A524', // Yuma sun gold (CTAs)
  ink:        '#07232E',
  aqua:       '#27C0D9',
  error:      '#DC2626',
  success:    '#16A34A',
  background: '#F7F1E6', // warm sand
  surface:    '#FFFFFF',
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'legacyTheme',
    themes: {
      legacyTheme: {
        dark: false,
        colors: { ...BRAND },
      },
    },
  },
  defaults: {
    VBtn: {
      style: 'text-transform: none; letter-spacing: 0; font-family: General Sans, sans-serif;',
    },
  },
})
