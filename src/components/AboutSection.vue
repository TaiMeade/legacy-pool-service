<template>
  <section id="about" class="py-16 bg-background">
    <v-container>
      <v-row align="center" justify="center">

        <!-- Text content -->
        <v-col cols="12" md="6" lg="5" order="2" order-md="1">
          <div class="section-label mb-3">About Us</div>
          <h2 class="section-title mb-5">
            Honest, Local Pool Care<br />You Can Rely On
          </h2>
          <p class="text-secondary mb-4" style="font-size: 1.0625rem; line-height: 1.75;">
            Legacy Pool Co. was founded with one goal in mind — to provide dependable, honest pool
            service that customers can trust. As a local, family-owned business, we take pride in
            building lasting relationships and delivering quality care to every pool we service.
          </p>
          <p class="text-secondary mb-6" style="font-size: 1.0625rem; line-height: 1.75;">
            We specialize in reliable weekly pool service, filter cleanings and breakdowns, equipment
            repairs, timers, valves, and general maintenance. We believe in honest communication and
            treat every pool as if it were our own — delivering quality service with integrity and
            professionalism.
          </p>

          <v-row dense>
            <v-col v-for="stat in stats" :key="stat.label" cols="6">
              <div class="stat-card pa-4 rounded-lg text-center mb-3">
                <div class="text-primary font-weight-black mb-1" style="font-size: 1.875rem;">
                  {{ stat.value }}
                </div>
                <div class="text-secondary" style="font-size: 0.8125rem;">{{ stat.label }}</div>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <!-- Visual panel -->
        <v-col cols="12" md="5" lg="5" order="1" order-md="2" class="d-flex justify-center mb-8 mb-md-0">
          <div class="about-visual rounded-xl d-flex flex-column align-center justify-center pa-8 text-center">
            <v-icon color="white" size="64" class="mb-4">mdi-pool</v-icon>
            <p class="text-white font-weight-bold mb-2" style="font-size: 1.125rem;">Family-Owned &amp; Operated</p>
            <p class="text-white" style="opacity: 0.85; font-size: 0.9rem; line-height: 1.6; max-width: 260px;">
              Proudly serving Yuma, Arizona and the surrounding area with reliable, year-round pool care.
            </p>
            <v-divider color="white" opacity="0.3" class="my-4 w-75" />
            <div class="d-flex align-center" style="gap: 8px;">
              <v-icon color="accent" size="20">mdi-map-marker</v-icon>
              <span class="text-white" style="font-size: 0.875rem;">Yuma, AZ</span>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const stats = [
  { value: '3+',   label: 'Years of Experience' },
  { value: '$150', label: 'Weekly Service / mo' },
  { value: '100%', label: 'Family Owned' },
  { value: 'Free', label: 'Estimates' },
]
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

.stat-card {
  background: rgba(8, 145, 178, 0.06);
  border: 1px solid rgba(8, 145, 178, 0.16);
}

.about-visual {
  background: linear-gradient(135deg, #075985 0%, #0891B2 100%);
  width: 100%;
  max-width: 380px;
  min-height: 340px;
  box-shadow: 0 20px 60px rgba(8, 145, 178, 0.3);
}
</style>
