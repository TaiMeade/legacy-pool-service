<template>
  <section id="service-area" class="py-16 bg-background">
    <v-container>
      <v-row align="center" justify="center">

        <!-- Text -->
        <v-col cols="12" md="6" lg="5">
          <div class="section-label mb-3">Coverage</div>
          <h2 class="section-title mb-5">Proudly Serving Yuma, AZ</h2>
          <p class="text-secondary mb-5" style="font-size: 1.0625rem; line-height: 1.75;">
            Legacy Pool Co. provides reliable pool service throughout Yuma, Arizona and the
            surrounding area — keeping local pools clean, safe, and running efficiently all year long.
          </p>

          <v-row dense class="mb-6">
            <v-col v-for="area in serviceAreas" :key="area" cols="6">
              <div class="d-flex align-center mb-2" style="gap: 8px;">
                <v-icon color="primary" size="16">mdi-check-circle</v-icon>
                <span class="text-secondary" style="font-size: 0.9rem;">{{ area }}</span>
              </div>
            </v-col>
          </v-row>

          <p class="text-secondary" style="font-size: 0.9rem; font-style: italic;">
            Not sure if we cover your neighborhood? Give us a call — we'll let you know and try to help.
          </p>
        </v-col>

        <!-- Map / location card -->
        <v-col cols="12" md="5" lg="5" class="d-flex justify-center">
          <v-card rounded="xl" elevation="3" class="w-100 overflow-hidden" style="max-width: 420px;">
            <div
              class="map-placeholder d-flex flex-column align-center justify-center pa-8 text-center"
              style="min-height: 300px;"
            >
              <v-icon color="primary" size="56" class="mb-4">mdi-map-marker-radius</v-icon>
              <p class="font-weight-bold text-primary mb-1" style="font-size: 1.05rem;">
                Legacy Pool Co.
              </p>
              <p class="text-secondary mb-4" style="font-size: 0.9rem;">
                Serving all of Yuma, Arizona
              </p>
              <v-btn
                color="primary"
                variant="tonal"
                rounded="lg"
                size="small"
                href="https://www.google.com/maps/search/?api=1&query=Yuma+AZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-icon start size="16">mdi-map-search</v-icon>
                View on Map
              </v-btn>
            </div>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const serviceAreas = [
  'Yuma, AZ',
  'Foothills',
  'Fortuna Foothills',
  'Somerton',
  'San Luis',
  'Wellton',
  'Gadsden',
  'And surrounding areas',
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

.map-placeholder {
  background: linear-gradient(135deg, #E0F2FE 0%, #F8FAFC 100%);
}
</style>
