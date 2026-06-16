<template>
  <section id="why-us" class="py-16" style="background: linear-gradient(135deg, #0C4A6E 0%, #075985 100%)">
    <v-container>

      <!-- Header -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-10">
          <div class="section-label mb-3">Why Choose Us</div>
          <h2 class="text-white font-weight-black mb-4" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); line-height: 1.15; letter-spacing: -0.02em;">
            The Legacy Pool Co. Difference
          </h2>
          <p class="text-white" style="opacity: 0.88; font-size: 1rem; line-height: 1.7;">
            We're a local, family-run team — which means honest advice, dependable service,
            and a pool that's treated like our own, every single visit.
          </p>
        </v-col>
      </v-row>

      <!-- Feature grid -->
      <v-row justify="center">
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          sm="6"
          lg="3"
        >
          <div class="feature-card pa-6 rounded-xl d-flex flex-column align-center text-center h-100">
            <div class="feature-icon-wrap mb-4">
              <v-icon :icon="feature.icon" color="accent" size="28" />
            </div>
            <h3 class="text-white font-weight-bold mb-2" style="font-size: 1.05rem;">
              {{ feature.title }}
            </h3>
            <p class="text-white" style="opacity: 0.82; font-size: 0.875rem; line-height: 1.6; margin: 0;">
              {{ feature.description }}
            </p>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'mdi-home-heart',
    title: 'Family-Owned & Operated',
    description: 'A local business built on relationships — you deal directly with the people who service your pool.',
  },
  {
    icon: 'mdi-tag-check-outline',
    title: 'Free Estimates',
    description: 'Honest, no-obligation estimates before any work begins. No surprises, no hidden fees.',
  },
  {
    icon: 'mdi-clock-check-outline',
    title: 'Over 3 Years of Experience',
    description: 'Hands-on experience keeping pools clean, balanced, and running efficiently year-round.',
  },
  {
    icon: 'mdi-handshake-outline',
    title: 'Honest, Reliable Service',
    description: 'Dependable scheduling and straightforward communication you can count on, every time.',
  },
]
</script>

<style scoped>
.section-label {
  color: #67E8F9;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.feature-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(4px);
  transition: background 0.2s;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.14);
}

.feature-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 13px;
  background: rgba(6, 182, 212, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
