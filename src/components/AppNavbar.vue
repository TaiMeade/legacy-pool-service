<template>
  <v-app-bar
    :elevation="scrolled ? 4 : 0"
    color="transparent"
    class="px-2"
    :style="navStyle"
  >
    <!-- Logo / wordmark -->
    <v-app-bar-title class="pa-0" style="min-width: 200px;">
      <a href="#hero" class="d-flex align-center text-decoration-none" style="gap: 10px;" @click.prevent="smoothScroll('#hero')">
        <div class="logo-badge d-flex align-center justify-center">
          <v-icon color="white" size="24">mdi-pool</v-icon>
        </div>
        <div class="d-flex flex-column" style="line-height: 1.15;">
          <span class="font-weight-bold" style="color: #FFFFFF; font-size: 1rem;">Legacy Pool Co.</span>
          <span style="color: rgba(255,255,255,0.78); font-size: 0.72rem;">Yuma, AZ</span>
        </div>
      </a>
    </v-app-bar-title>

    <v-spacer />

    <!-- Desktop nav links -->
    <div class="d-none d-md-flex align-center" style="gap: 4px;">
      <v-btn
        v-for="link in navLinks"
        :key="link.label"
        variant="text"
        color="white"
        @click="smoothScroll(link.anchor)"
      >
        {{ link.label }}
      </v-btn>
    </div>

    <!-- CTA button -->
    <v-btn
      color="accent"
      variant="flat"
      rounded="lg"
      class="ml-3 d-none d-md-flex"
      @click="$emit('open-contact')"
    >
      Free Estimate
    </v-btn>

    <!-- Mobile menu trigger -->
    <v-app-bar-nav-icon
      class="d-flex d-md-none"
      color="white"
      @click="drawer = true"
    />
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right" width="260">
    <v-list class="pt-4">
      <v-list-item
        prepend-icon="mdi-pool"
        title="Legacy Pool Co."
        subtitle="Yuma, AZ"
        class="mb-2"
      />
      <v-divider />
      <v-list-item
        v-for="link in navLinks"
        :key="link.label"
        :title="link.label"
        :prepend-icon="link.icon"
        @click="mobileNav(link.anchor)"
      />
      <v-divider class="mt-2" />
      <div class="pa-4">
        <v-btn block color="accent" variant="flat" rounded="lg" @click="mobileNav(null)">
          Free Estimate
        </v-btn>
        <v-btn block color="primary" variant="tonal" rounded="lg" class="mt-3" href="tel:+19287500972">
          <v-icon start>mdi-phone</v-icon>
          (928) 750-0972
        </v-btn>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['open-contact'])

const drawer = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'About',        anchor: '#about',        icon: 'mdi-information-outline' },
  { label: 'Services',     anchor: '#services',     icon: 'mdi-pool' },
  { label: 'Why Us',       anchor: '#why-us',       icon: 'mdi-shield-check-outline' },
  { label: 'Service Area', anchor: '#service-area', icon: 'mdi-map-marker-outline' },
]

const navStyle = computed(
  () =>
    `background: linear-gradient(to bottom, rgba(7,89,133,${scrolled.value ? 0.97 : 0.85}) 0%, rgba(7,89,133,${scrolled.value ? 0.9 : 0.45}) 100%) !important; transition: box-shadow 0.3s, background 0.3s;`
)

function smoothScroll(anchor) {
  if (!anchor) return
  const el = document.querySelector(anchor)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function mobileNav(anchor) {
  drawer.value = false
  if (anchor) {
    setTimeout(() => smoothScroll(anchor), 150)
  } else {
    setTimeout(() => emit('open-contact'), 150)
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.logo-badge {
  width: 40px;
  height: 40px;
  border-radius: 11px;
  background: linear-gradient(135deg, #06B6D4 0%, #075985 100%);
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
}
</style>
