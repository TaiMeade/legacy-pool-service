<template>
  <v-app>
    <AppNavbar @open-contact="contactOpen = true" />

    <main>
      <HeroSection @open-contact="contactOpen = true" />
      <AboutSection />
      <ServicesSection @open-contact="contactOpen = true" />
      <GallerySection />
      <WhyUsSection @open-contact="contactOpen = true" />
      <ServiceAreaSection @open-contact="contactOpen = true" />
      <ReviewsSection />
      <AppFooter @open-contact="contactOpen = true" />
    </main>

    <ContactModal v-model="contactOpen" />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import AppNavbar          from '@/components/AppNavbar.vue'
import HeroSection        from '@/components/HeroSection.vue'
import AboutSection       from '@/components/AboutSection.vue'
import ServicesSection    from '@/components/ServicesSection.vue'
import GallerySection     from '@/components/GallerySection.vue'
import WhyUsSection       from '@/components/WhyUsSection.vue'
import ServiceAreaSection from '@/components/ServiceAreaSection.vue'
import ReviewsSection     from '@/components/ReviewsSection.vue'
import AppFooter          from '@/components/AppFooter.vue'
import ContactModal       from '@/components/ContactModal.vue'

const contactOpen = ref(false)
</script>

<style>
/* Keep Vuetify's app surface from fighting our sand background */
.v-application__wrap { min-height: 100vh; }
main { display: block; }
</style>
