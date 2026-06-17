<template>
  <section id="reviews" class="section section--sand reviews">
    <div class="wrap">
      <div class="section-head section-head--center">
        <span class="eyebrow"><i class="mdi mdi-star-outline"></i> Customer Reviews</span>
        <h2 class="h2 reviews__title">Loved by Yuma pool owners</h2>
        <div class="reviews__overall">
          <span class="reviews__stars">
            <i v-for="n in 5" :key="n" class="mdi mdi-star"></i>
          </span>
          <strong>{{ overallRating.toFixed(1) }}</strong>
          <span class="reviews__count">Based on {{ totalReviews }} reviews</span>
        </div>
      </div>
    </div>

    <!-- Carousel -->
    <div class="reviews__track-wrap">
      <div class="reviews__track">
        <article v-for="(r, i) in reviews" :key="i" class="review">
          <div class="review__top">
            <span class="review__avatar" :style="{ background: avatarColor(r.name) }">{{ initial(r.name) }}</span>
            <div class="review__who">
              <strong>{{ r.name }}</strong>
              <span>{{ relativeTime(r.date) }}</span>
            </div>
          </div>
          <div class="review__stars">
            <i v-for="n in 5" :key="n" class="mdi mdi-star" :class="{ 'is-off': n > r.rating }"></i>
          </div>
          <p class="review__text">{{ r.text }}</p>
        </article>
      </div>
    </div>

    <!-- Dive into the deep end (footer) -->
    <div class="waterline" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,42 C240,80 480,10 720,32 C960,54 1200,84 1440,40 L1440,80 L0,80 Z" fill="#0A3A4A" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { reviews } from '@/data/reviews'

const totalReviews = computed(() => reviews.length)
const overallRating = computed(() => {
  if (!reviews.length) return 0
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
})

const avatarColors = ['#0E7E97', '#0A3A4A', '#0E5C70', '#127E8E', '#155E75', '#0E8FA8']

function initial(name) { return name.trim().charAt(0).toUpperCase() }
function avatarColor(name) { return avatarColors[name.charCodeAt(0) % avatarColors.length] }

function relativeTime(dateStr) {
  const then = new Date(dateStr).getTime()
  const days = Math.max(0, Math.round((Date.now() - then) / 86400000))
  if (days < 1) return 'Today'
  if (days === 1) return 'A day ago'
  if (days < 7) return `${days} days ago`
  if (days < 14) return 'A week ago'
  if (days < 30) return `${Math.round(days / 7)} weeks ago`
  if (days < 60) return 'A month ago'
  if (days < 365) return `${Math.round(days / 30)} months ago`
  if (days < 730) return 'A year ago'
  return `${Math.round(days / 365)} years ago`
}
</script>

<style scoped>
.reviews { padding-bottom: clamp(6.5rem, 11vw, 10rem); }
.reviews__title { margin: 1rem 0 1.2rem; }

.reviews__overall { display: inline-flex; align-items: center; flex-wrap: wrap; gap: 0.6rem; }
.reviews__stars { display: inline-flex; gap: 2px; color: var(--sun); font-size: 1.35rem; line-height: 1; }
.reviews__overall strong { font-family: 'Clash Display', sans-serif; font-weight: 700; font-size: 1.5rem; color: var(--ink); }
.reviews__count { font-size: 0.9rem; color: var(--muted); }

.reviews__track-wrap { margin-top: clamp(2.5rem, 5vw, 3.5rem); }
.reviews__track {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem clamp(1.25rem, 4vw, 2.5rem) 1.25rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(14, 126, 151, 0.35) transparent;
}
.reviews__track::-webkit-scrollbar { height: 7px; }
.reviews__track::-webkit-scrollbar-thumb { background: rgba(14, 126, 151, 0.3); border-radius: 99px; }

.review {
  flex: 0 0 340px;
  max-width: 340px;
  scroll-snap-align: start;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.6rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.review:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
.review__top { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.9rem; }
.review__avatar {
  width: 46px; height: 46px; border-radius: 14px;
  display: grid; place-items: center;
  color: #fff; font-weight: 600; font-size: 1.05rem;
  flex-shrink: 0;
}
.review__who strong { display: block; font-size: 0.95rem; color: var(--ink); }
.review__who span { font-size: 0.78rem; color: var(--muted); }
.review__stars { display: flex; gap: 2px; color: var(--sun); font-size: 1.05rem; margin-bottom: 0.8rem; }
.review__stars .is-off { color: rgba(7, 35, 46, 0.18); }
.review__text { font-size: 0.92rem; line-height: 1.65; color: var(--muted); margin: 0; white-space: pre-line; }

@media (max-width: 520px) {
  .review { flex-basis: 80vw; max-width: 80vw; }
}
</style>
