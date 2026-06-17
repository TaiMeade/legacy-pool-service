<template>
  <section id="reviews" class="py-16" style="background: #F1F5F9;">
    <v-container>

      <!-- Header -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-8">
          <div class="section-label mb-3">Customer Reviews</div>
          <h2 class="section-title mb-3">What Our Customers Say</h2>

          <!-- Overall rating badge -->
          <div class="d-flex justify-center align-center flex-wrap mt-4" style="gap: 10px;">
            <div class="d-flex align-center" style="gap: 3px;">
              <v-icon
                v-for="n in 5"
                :key="n"
                :color="n <= Math.round(overallRating) ? 'amber-darken-1' : 'grey-lighten-1'"
                size="22"
              >
                mdi-star
              </v-icon>
            </div>
            <span class="font-weight-black text-primary" style="font-size: 1.5rem;">
              {{ overallRating.toFixed(1) }}
            </span>
            <span class="text-secondary" style="font-size: 0.9rem;">
              Based on {{ totalReviews }} reviews
            </span>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Review cards — horizontal scroll carousel -->
    <v-container class="px-0 px-sm-3">
      <div class="reviews-track px-4 px-sm-0">
        <v-card
          v-for="(review, i) in reviews"
          :key="i"
          rounded="xl"
          elevation="0"
          class="review-card pa-6 d-flex flex-column"
          style="border: 1px solid rgba(8,145,178,0.12);"
        >
          <!-- Author row -->
          <div class="d-flex align-center mb-3" style="gap: 12px;">
            <v-avatar size="44" :style="{ background: avatarColor(review.name) }">
              <span class="text-white font-weight-bold" style="font-size: 1rem;">
                {{ initial(review.name) }}
              </span>
            </v-avatar>
            <div class="flex-grow-1" style="min-width: 0;">
              <div class="font-weight-bold" style="font-size: 0.95rem; color: #1a1a1a;">
                {{ review.name }}
              </div>
              <div class="text-secondary" style="font-size: 0.78rem;">
                {{ relativeTime(review.date) }}
              </div>
            </div>
          </div>

          <!-- Stars -->
          <div class="d-flex mb-3" style="gap: 2px;">
            <v-icon
              v-for="n in 5"
              :key="n"
              size="18"
              :color="n <= review.rating ? 'amber-darken-1' : 'grey-lighten-1'"
            >
              mdi-star
            </v-icon>
          </div>

          <!-- Review text -->
          <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.65; flex: 1; white-space: pre-line;">
            {{ review.text }}
          </p>
        </v-card>
      </div>
    </v-container>

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

const avatarColors = ['#0891B2', '#075985', '#0E7490', '#0369A1', '#155E75', '#0284C7']

function initial(name) {
  return name.trim().charAt(0).toUpperCase()
}

function avatarColor(name) {
  return avatarColors[name.charCodeAt(0) % avatarColors.length]
}

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

.reviews-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 14px;
  scrollbar-width: thin;
  scrollbar-color: rgba(8, 145, 178, 0.3) transparent;
}

.reviews-track::-webkit-scrollbar {
  height: 6px;
}

.reviews-track::-webkit-scrollbar-thumb {
  background: rgba(8, 145, 178, 0.3);
  border-radius: 99px;
}

.review-card {
  flex: 0 0 330px;
  max-width: 330px;
  scroll-snap-align: start;
  transition: box-shadow 0.25s, transform 0.25s;
}

.review-card:hover {
  box-shadow: 0 12px 40px rgba(8, 145, 178, 0.13) !important;
  transform: translateY(-3px);
}
</style>
