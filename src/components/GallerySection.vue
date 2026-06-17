<template>
  <section id="gallery" class="py-16 bg-background">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-8">
          <div class="section-label mb-3">Our Work</div>
          <h2 class="section-title mb-4">Pools &amp; Equipment We've Serviced</h2>
          <p class="text-secondary" style="font-size: 1rem; line-height: 1.7; max-width: 560px; margin-inline: auto;">
            A look at some of the real pools, filters, and equipment we care for around Yuma.
            Tap any photo to take a closer look.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Horizontal scroll strip -->
    <v-container class="px-0 px-sm-3">
      <div class="gallery-track px-4 px-sm-0">
        <button
          v-for="(img, i) in images"
          :key="i"
          type="button"
          class="gallery-item"
          @click="openLightbox(i)"
        >
          <img :src="img" :alt="`Legacy Pool Co. work photo ${i + 1}`" loading="lazy" />
        </button>
      </div>
    </v-container>

    <!-- Lightbox -->
    <v-dialog v-model="lightbox" max-width="920">
      <div class="lightbox-wrap">
        <v-btn icon variant="text" color="white" class="lightbox-close" @click="lightbox = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <img :src="images[current]" alt="Legacy Pool Co. work photo" class="lightbox-img" />

        <div class="lightbox-nav">
          <v-btn icon variant="text" color="white" @click.stop="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <span class="text-white font-weight-medium" style="font-size: 0.875rem;">
            {{ current + 1 }} / {{ images.length }}
          </span>
          <v-btn icon variant="text" color="white" @click.stop="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Auto-discover every image in src/assets/gallery — just drop new photos in that
// folder (jpg/png/webp) and they appear here on the next build. Vite hashes the
// filenames so the paths work correctly on GitHub Pages.
const modules = import.meta.glob(
  '../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default', query: '?url' }
)
const images = Object.keys(modules)
  .sort()
  .map((key) => modules[key])

const lightbox = ref(false)
const current = ref(0)

function openLightbox(i) {
  current.value = i
  lightbox.value = true
}
function next() {
  current.value = (current.value + 1) % images.length
}
function prev() {
  current.value = (current.value - 1 + images.length) % images.length
}
</script>

<style scoped>
.section-label {
  color: #0891B2;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  line-height: 1.15;
  color: #0F172A;
  letter-spacing: -0.02em;
}

.gallery-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 14px;
  scrollbar-width: thin;
  scrollbar-color: rgba(8, 145, 178, 0.3) transparent;
}

.gallery-track::-webkit-scrollbar {
  height: 6px;
}

.gallery-track::-webkit-scrollbar-thumb {
  background: rgba(8, 145, 178, 0.3);
  border-radius: 99px;
}

.gallery-item {
  flex: 0 0 auto;
  width: 300px;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  scroll-snap-align: start;
  border: 1px solid rgba(8, 145, 178, 0.12);
  background: #e2e8f0;
  padding: 0;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(8, 145, 178, 0.18);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.lightbox-wrap {
  position: relative;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}

.lightbox-img {
  width: 100%;
  max-height: 82vh;
  object-fit: contain;
  display: block;
}

.lightbox-close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
}

.lightbox-nav {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
</style>
