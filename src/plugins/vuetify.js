import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ─── THEME CONFIGURATION ─────────────────────────────────────────────────────
// All brand colors live here. Edit these to retheme the entire site.
const BRAND = {
  primary:    '#075985', // Deep pool blue — main brand color
  secondary:  '#475569', // Slate grey — supporting text & elements
  accent:     '#06B6D4', // Bright cyan — CTAs, highlights, buttons
  error:      '#DC2626',
  success:    '#16A34A',
  background: '#F8FAFC',
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
        colors: {
          primary:    BRAND.primary,
          secondary:  BRAND.secondary,
          accent:     BRAND.accent,
          error:      BRAND.error,
          success:    BRAND.success,
          background: BRAND.background,
          surface:    BRAND.surface,
        },
      },
    },
  },
  defaults: {
    VBtn: {
      style: 'text-transform: none; letter-spacing: 0;',
    },
  },
})
