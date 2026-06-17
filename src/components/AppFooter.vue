<template>
  <v-footer class="footer pa-0" style="background: #061B2B;">
    <v-container class="py-12">
      <v-row>

        <!-- Brand column -->
        <v-col cols="12" md="4" class="mb-8 mb-md-0">
          <div class="d-flex align-center mb-4" style="gap: 12px;">
            <div class="logo-badge d-flex align-center justify-center">
              <v-img :src="logo" alt="Legacy Pool Co. logo" width="34" height="34" :aspect-ratio="1" />
            </div>
            <div>
              <div class="text-white font-weight-bold" style="font-size: 1rem;">Legacy Pool Co.</div>
              <div class="text-white" style="font-size: 0.8rem; opacity: 0.6;">Yuma, AZ</div>
            </div>
          </div>
          <p class="text-white mb-5" style="opacity: 0.65; font-size: 0.875rem; line-height: 1.7; max-width: 280px;">
            A local, family-owned swimming pool service company proudly serving Yuma, Arizona —
            honest, reliable pool care year-round.
          </p>
          <!-- Social links -->
          <div class="d-flex" style="gap: 10px;">
            <v-btn
              icon
              variant="tonal"
              color="white"
              size="small"
              href="https://www.instagram.com/legacypoolserviceaz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <v-icon size="18">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="tonal"
              color="white"
              size="small"
              href="mailto:legacypoolservice26@gmail.com"
              aria-label="Email"
            >
              <v-icon size="18">mdi-email-outline</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Services column -->
        <v-col cols="6" md="3" class="mb-8 mb-md-0">
          <div class="footer-heading mb-4">Services</div>
          <div v-for="service in footerServices" :key="service" class="footer-link mb-2">
            {{ service }}
          </div>
        </v-col>

        <!-- Contact column -->
        <v-col cols="12" sm="6" md="2" class="mb-8 mb-md-0">
          <div class="footer-heading mb-4">Contact</div>
          <div class="d-flex align-start mb-3" style="gap: 10px;">
            <v-icon color="accent" size="16" class="mt-1">mdi-account</v-icon>
            <span class="text-white" style="opacity: 0.7; font-size: 0.875rem; line-height: 1.5;">
              Aubrianna Ziemer
            </span>
          </div>
          <div class="d-flex align-center mb-3" style="gap: 10px;">
            <v-icon color="accent" size="16">mdi-phone</v-icon>
            <a href="tel:+19287500972" class="text-white text-decoration-none" style="opacity: 0.7; font-size: 0.875rem;">
              (928) 750-0972
            </a>
          </div>
          <div class="d-flex align-start" style="gap: 10px;">
            <v-icon color="accent" size="16" class="mt-1">mdi-email-outline</v-icon>
            <a href="mailto:legacypoolservice26@gmail.com" class="text-white text-decoration-none" style="opacity: 0.7; font-size: 0.875rem; line-height: 1.5; word-break: break-all;">
              legacypoolservice26@gmail.com
            </a>
          </div>
        </v-col>

        <!-- CTA column -->
        <v-col cols="12" sm="6" md="3">
          <div class="footer-heading mb-4">Ready to Book?</div>
          <p class="text-white mb-4" style="opacity: 0.65; font-size: 0.875rem; line-height: 1.6;">
            Weekly service starting at $150/month. Get a free estimate today.
          </p>
          <v-btn
            color="accent"
            variant="flat"
            rounded="lg"
            block
            class="mb-3"
            @click="$emit('open-contact')"
          >
            Get a Free Estimate
          </v-btn>
          <v-btn
            color="white"
            variant="outlined"
            rounded="lg"
            block
            href="tel:+19287500972"
          >
            <v-icon start>mdi-phone</v-icon>
            Call Now
          </v-btn>
        </v-col>

      </v-row>

      <v-divider color="white" opacity="0.1" class="my-8" />

      <!-- Bottom bar -->
      <div class="d-flex flex-column flex-sm-row justify-space-between align-center" style="gap: 8px;">
        <p class="text-white ma-0" style="opacity: 0.4; font-size: 0.78rem;">
          © {{ new Date().getFullYear() }} Legacy Pool Co. All rights reserved.
        </p>
        <p class="text-white ma-0" style="opacity: 0.4; font-size: 0.78rem;">
          Family-Owned &amp; Operated · Yuma, AZ
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import logo from '@/assets/logo.png'

defineEmits(['open-contact'])

const footerServices = [
  'Weekly Maintenance',
  'Filter Cleaning',
  'Equipment Repairs',
  'Green-to-Clean',
  'One-Time Cleanings',
]
</script>

<style scoped>
.logo-badge {
  width: 44px;
  height: 44px;
  border-radius: 11px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.footer-heading {
  color: #67E8F9;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.footer-link {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
}
</style>
