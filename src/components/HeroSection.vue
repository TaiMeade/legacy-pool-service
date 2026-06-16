<template>
  <section id="hero" class="hero-section d-flex align-center">
    <div class="hero-bg" />
    <div class="hero-overlay" />

    <v-container class="hero-content py-16">
      <v-row justify="center">
        <v-col cols="12" md="9" lg="8" class="text-center">

          <!-- Pricing banner -->
          <div class="d-flex justify-center mb-5">
            <v-chip color="accent" variant="flat" size="large" class="font-weight-bold px-4 py-2">
              <v-icon start size="18">mdi-tag</v-icon>
              Weekly pool service starting at $150/month
            </v-chip>
          </div>

          <!-- Headline -->
          <h1 class="text-white font-weight-black mb-4" style="font-size: clamp(2rem, 5.5vw, 3.75rem); line-height: 1.1; letter-spacing: -0.02em;">
            Dependable Pool Service<br />
            <span style="color: #67E8F9;">You Can Trust</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-white mb-8" style="font-size: clamp(1rem, 2.5vw, 1.25rem); opacity: 0.92; max-width: 640px; margin-inline: auto; line-height: 1.6;">
            Legacy Pool Co. is a local, family-owned business keeping Yuma's pools clean, safe,
            and running efficiently year-round — with honest communication and reliable service.
          </p>

          <!-- CTAs -->
          <div class="d-flex justify-center flex-wrap" style="gap: 14px;">
            <v-btn
              color="accent"
              variant="flat"
              size="x-large"
              rounded="lg"
              min-width="210"
              @click="$emit('open-contact')"
            >
              <v-icon start>mdi-clipboard-text-outline</v-icon>
              Get a Free Estimate
            </v-btn>
            <v-btn
              color="white"
              variant="outlined"
              size="x-large"
              rounded="lg"
              min-width="210"
              href="tel:+19287500972"
            >
              <v-icon start>mdi-phone</v-icon>
              (928) 750-0972
            </v-btn>
          </div>

          <!-- Trust badges -->
          <div class="d-flex justify-center flex-wrap mt-10" style="gap: 32px;">
            <div v-for="badge in trustBadges" :key="badge.text" class="d-flex align-center" style="gap: 8px;">
              <v-icon :icon="badge.icon" color="accent" size="20" />
              <span class="text-white" style="font-size: 0.875rem; opacity: 0.9;">{{ badge.text }}</span>
            </div>
          </div>

        </v-col>
      </v-row>
    </v-container>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <v-icon color="white" style="opacity: 0.6; animation: bounce 2s infinite;">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const trustBadges = [
  { icon: 'mdi-home-heart', text: 'Family-Owned & Operated' },
  { icon: 'mdi-tag-outline', text: 'Free Estimates' },
  { icon: 'mdi-clock-check-outline', text: '3+ Years Experience' },
]
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(135deg, #0C4A6E 0%, #075985 45%, #0891B2 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(circle at 20% 20%, rgba(103, 232, 249, 0.18) 0%, transparent 45%),
    radial-gradient(circle at 80% 75%, rgba(8, 145, 178, 0.30) 0%, transparent 55%);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.scroll-indicator {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(8px); }
}
</style>
