<template>
  <section id="gallery" class="section section--deep gallery">
    <div class="gallery__water" aria-hidden="true">
      <span class="caustic caustic--a"></span>
      <span class="caustic caustic--b"></span>
    </div>

    <div class="wrap">
      <div class="section-head section-head--center">
        <span class="eyebrow"><i class="mdi mdi-image-multiple-outline"></i> Our Work</span>
        <h2 class="h2 gallery__title">Real pools, real results</h2>
        <p class="lead">
          A look at the pools, filters, and equipment we care for around Yuma. Tap any photo
          to take a closer look.
        </p>
      </div>
    </div>

    <!-- Horizontal scroll strip -->
    <div class="gallery__track-wrap">
      <div class="gallery__track">
        <button
          v-for="(img, i) in images"
          :key="i"
          type="button"
          class="gallery__item"
          @click="openLightbox(i)"
        >
          <img :src="img" :alt="`Legacy Pool Co. work photo ${i + 1}`" loading="lazy" />
          <span class="gallery__zoom"><i class="mdi mdi-magnify-plus-outline"></i></span>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <v-dialog v-model="lightbox" max-width="960">
      <div class="lightbox">
        <button class="lightbox__close" aria-label="Close" @click="lightbox = false">
          <i class="mdi mdi-close"></i>
        </button>
        <img :src="images[current]" alt="Legacy Pool Co. work photo" class="lightbox__img" />
        <div class="lightbox__nav">
          <button aria-label="Previous" @click.stop="prev"><i class="mdi mdi-chevron-left"></i></button>
          <span>{{ current + 1 }} / {{ images.length }}</span>
          <button aria-label="Next" @click.stop="next"><i class="mdi mdi-chevron-right"></i></button>
        </div>
      </div>
    </v-dialog>

    <!-- Surface back to the deck -->
    <div class="waterline" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,38 C240,76 480,8 720,32 C960,56 1200,82 1440,40 L1440,80 L0,80 Z" fill="#F7F1E6" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Auto-discover every image in src/assets/gallery — drop new photos in that folder
// and they appear on the next build (Vite hashes the names for GitHub Pages).
const modules = import.meta.glob(
  '../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default', query: '?url' }
)
const images = Object.keys(modules).sort().map((key) => modules[key])

const lightbox = ref(false)
const current = ref(0)

function openLightbox(i) { current.value = i; lightbox.value = true }
function next() { current.value = (current.value + 1) % images.length }
function prev() { current.value = (current.value - 1 + images.length) % images.length }
</script>

<style scoped>
.gallery { overflow: hidden; padding-bottom: clamp(6.5rem, 11vw, 10rem); }
.gallery__water { position: absolute; inset: 0; z-index: 0; }
.caustic {
  position: absolute; border-radius: 50%; filter: blur(50px); mix-blend-mode: screen;
}
.caustic--a {
  width: 50vw; height: 50vw; left: -12vw; top: -14vw;
  background: radial-gradient(circle, rgba(39, 192, 217, 0.4), transparent 62%);
  animation: drift1 21s ease-in-out infinite alternate;
}
.caustic--b {
  width: 44vw; height: 44vw; right: -10vw; bottom: 6vw;
  background: radial-gradient(circle, rgba(127, 224, 238, 0.32), transparent 64%);
  animation: drift2 25s ease-in-out infinite alternate;
}
.gallery .wrap { position: relative; z-index: 1; }
.gallery__title { margin: 1rem 0; }

.gallery__track-wrap { position: relative; z-index: 1; margin-top: clamp(2.5rem, 5vw, 3.5rem); }
.gallery__track {
  display: flex;
  gap: 1.1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem clamp(1.25rem, 4vw, 2.5rem) 1.25rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.35) transparent;
}
.gallery__track::-webkit-scrollbar { height: 7px; }
.gallery__track::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 99px; }

.gallery__item {
  position: relative;
  flex: 0 0 auto;
  width: 320px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  scroll-snap-align: start;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  padding: 0;
  cursor: pointer;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}
.gallery__item:hover { transform: translateY(-5px); box-shadow: 0 28px 50px -24px rgba(0, 0, 0, 0.6); }
.gallery__item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
.gallery__item:hover img { transform: scale(1.05); }
.gallery__zoom {
  position: absolute;
  right: 0.7rem; bottom: 0.7rem;
  width: 38px; height: 38px; border-radius: 11px;
  display: grid; place-items: center;
  background: rgba(7, 35, 46, 0.55);
  color: #fff; font-size: 1.2rem;
  backdrop-filter: blur(4px);
  opacity: 0; transform: translateY(6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.gallery__item:hover .gallery__zoom { opacity: 1; transform: translateY(0); }

/* Lightbox */
.lightbox { position: relative; background: #06141b; border-radius: 16px; overflow: hidden; }
.lightbox__img { width: 100%; max-height: 82vh; object-fit: contain; display: block; }
.lightbox__close,
.lightbox__nav button {
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: #fff;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: 999px;
  transition: background 0.2s ease;
}
.lightbox__close:hover,
.lightbox__nav button:hover { background: rgba(255, 255, 255, 0.28); }
.lightbox__close { position: absolute; top: 0.8rem; right: 0.8rem; width: 42px; height: 42px; font-size: 1.4rem; z-index: 2; }
.lightbox__nav {
  position: absolute; bottom: 0.8rem; left: 0; right: 0;
  display: flex; align-items: center; justify-content: center; gap: 1.1rem;
  color: #fff; font-size: 0.9rem; font-weight: 500;
}
.lightbox__nav button { width: 42px; height: 42px; font-size: 1.5rem; }

@media (max-width: 520px) {
  .gallery__item { width: 78vw; height: 200px; }
}
</style>
