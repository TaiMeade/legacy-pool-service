<template>
  <header class="nav" :class="{ 'nav--solid': scrolled || menuOpen }">
    <div class="wrap nav__inner">
      <!-- Brand -->
      <a href="#hero" class="nav__brand" @click.prevent="go('#hero')">
        <span class="nav__logo"><img :src="logo" alt="Legacy Pool Co. logo" /></span>
        <span class="nav__name">
          <strong>Legacy Pool Co.</strong>
          <em>Yuma, AZ</em>
        </span>
      </a>

      <!-- Desktop links -->
      <nav class="nav__links" aria-label="Primary">
        <a v-for="l in links" :key="l.anchor" href="#" @click.prevent="go(l.anchor)">{{ l.label }}</a>
      </nav>

      <!-- Actions -->
      <div class="nav__actions">
        <a class="nav__phone" href="tel:+19287500972"><i class="mdi mdi-phone"></i> (928) 750-0972</a>
        <button class="btn btn--sun nav__cta" @click="$emit('open-contact')">Free estimate</button>
        <button
          class="nav__burger"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <i :class="menuOpen ? 'mdi mdi-close' : 'mdi mdi-menu'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile sheet -->
    <transition name="sheet">
      <div v-if="menuOpen" class="nav__sheet">
        <a v-for="l in links" :key="l.anchor" href="#" @click.prevent="go(l.anchor)">
          <i :class="`mdi ${l.icon}`"></i> {{ l.label }}
        </a>
        <div class="nav__sheet-cta">
          <button class="btn btn--sun" @click="select">Get a free estimate</button>
          <a class="btn btn--outline" href="tel:+19287500972"><i class="mdi mdi-phone"></i> (928) 750-0972</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/logo.png'

const emit = defineEmits(['open-contact'])

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'Services',     anchor: '#services',     icon: 'mdi-pool' },
  { label: 'Our Work',     anchor: '#gallery',      icon: 'mdi-image-multiple-outline' },
  { label: 'Why Us',       anchor: '#why-us',       icon: 'mdi-shield-check-outline' },
  { label: 'Service Area', anchor: '#service-area', icon: 'mdi-map-marker-outline' },
  { label: 'Reviews',      anchor: '#reviews',      icon: 'mdi-star-outline' },
]

function go(anchor) {
  menuOpen.value = false
  const el = document.querySelector(anchor)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
function select() {
  menuOpen.value = false
  emit('open-contact')
}
function onScroll() { scrolled.value = window.scrollY > 40 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
}
.nav--solid {
  background: rgba(247, 241, 230, 0.88);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(7, 35, 46, 0.08), 0 12px 30px -22px rgba(7, 35, 46, 0.5);
}
.nav__inner {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  height: 76px;
}

/* Brand */
.nav__brand { display: flex; align-items: center; gap: 0.7rem; text-decoration: none; }
.nav__logo {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 6px 16px -8px rgba(7, 35, 46, 0.5);
  flex-shrink: 0;
  display: grid;
  place-items: center;
}
.nav__logo img { width: 100%; height: 100%; object-fit: contain; }
.nav__name { display: flex; flex-direction: column; line-height: 1.1; }
.nav__name strong {
  font-family: 'Clash Display', sans-serif;
  font-weight: 600;
  font-size: 1.02rem;
  color: #fff;
  letter-spacing: -0.01em;
}
.nav__name em { font-style: normal; font-size: 0.72rem; color: rgba(255, 255, 255, 0.72); letter-spacing: 0.04em; }
.nav--solid .nav__name strong { color: var(--ink); }
.nav--solid .nav__name em { color: var(--muted); }

/* Links */
.nav__links { display: flex; gap: 0.35rem; margin-left: auto; }
.nav__links a {
  font-weight: 500;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease;
}
.nav__links a:hover { background: rgba(255, 255, 255, 0.14); color: #fff; }
.nav--solid .nav__links a { color: var(--ink); }
.nav--solid .nav__links a:hover { background: rgba(14, 126, 151, 0.1); color: var(--water); }

/* Actions */
.nav__actions { display: flex; align-items: center; gap: 1rem; }
.nav__phone {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 0.92rem;
  color: #fff;
  text-decoration: none;
}
.nav--solid .nav__phone { color: var(--ink); }
.nav__phone .mdi { color: var(--aqua); }
.nav__cta { padding: 0.7rem 1.3rem; font-size: 0.95rem; }

.nav__burger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.2rem;
}
.nav--solid .nav__burger { color: var(--ink); }

/* Mobile sheet */
.nav__sheet {
  display: none;
  flex-direction: column;
  padding: 0.5rem clamp(1.25rem, 4vw, 2.5rem) 1.5rem;
  background: rgba(247, 241, 230, 0.97);
  backdrop-filter: blur(12px);
}
.nav__sheet a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 0.25rem;
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--line);
}
.nav__sheet a .mdi { color: var(--water); font-size: 1.25rem; }
.nav__sheet-cta { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1.1rem; }
.nav__sheet-cta .btn { width: 100%; }

.sheet-enter-active, .sheet-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.sheet-enter-from, .sheet-leave-to { opacity: 0; transform: translateY(-8px); }

/* Responsive */
@media (max-width: 960px) {
  .nav__links, .nav__phone, .nav__cta { display: none; }
  .nav__burger { display: inline-flex; }
  .nav__sheet { display: flex; }
  .nav__actions { margin-left: auto; }
}
</style>
