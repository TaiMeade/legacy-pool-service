<template>
  <section id="services" class="py-16" style="background: #F1F5F9;">
    <v-container>

      <!-- Header -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center mb-8">
          <div class="section-label mb-3">What We Do</div>
          <h2 class="section-title mb-4">Our Pool Services</h2>
          <p class="text-secondary" style="font-size: 1rem; line-height: 1.7; max-width: 560px; margin-inline: auto;">
            From weekly maintenance to equipment repairs and green-to-clean rescues, we handle every
            aspect of pool care — reliably, professionally, and at a fair price.
          </p>
        </v-col>
      </v-row>

      <!-- Service cards -->
      <v-row justify="center">
        <v-col
          v-for="service in services"
          :key="service.title"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex"
        >
          <v-card
            rounded="xl"
            elevation="0"
            class="service-card pa-6 w-100 d-flex flex-column"
            style="border: 1px solid rgba(8,145,178,0.12); transition: box-shadow 0.25s, transform 0.25s;"
          >
            <div class="service-icon-wrap mb-4">
              <v-icon :icon="service.icon" color="primary" size="32" />
            </div>
            <h3 class="font-weight-bold mb-2" style="font-size: 1.0625rem; color: #1a1a1a;">
              {{ service.title }}
            </h3>
            <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.65; flex: 1;">
              {{ service.description }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- CTA row -->
      <v-row justify="center" class="mt-10">
        <v-col cols="12" class="text-center">
          <p class="text-secondary mb-4">Need something not listed? Give us a call and we'll help.</p>
          <div class="d-flex justify-center flex-wrap" style="gap: 12px;">
            <v-btn
              color="primary"
              variant="flat"
              size="large"
              rounded="lg"
              @click="$emit('open-contact')"
            >
              <v-icon start>mdi-clipboard-text-outline</v-icon>
              Request Service
            </v-btn>
            <v-btn
              color="primary"
              variant="outlined"
              size="large"
              rounded="lg"
              href="tel:+19287500972"
            >
              <v-icon start>mdi-phone</v-icon>
              (928) 750-0972
            </v-btn>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const services = [
  {
    icon: 'mdi-pool',
    title: 'Weekly Pool Maintenance',
    description:
      'Reliable weekly service to keep your water balanced, clean, and swim-ready all year — starting at $150/month.',
  },
  {
    icon: 'mdi-air-filter',
    title: 'Filter Cleaning & Breakdowns',
    description:
      'Full filter cleanings and breakdowns to keep your system flowing efficiently and your water crystal clear.',
  },
  {
    icon: 'mdi-wrench-outline',
    title: 'Equipment Repairs & Troubleshooting',
    description:
      'We diagnose and repair pumps, filters, and pool equipment — getting everything running the way it should.',
  },
  {
    icon: 'mdi-pipe-valve',
    title: 'Valve Replacement',
    description:
      'Worn or leaking valves replaced quickly so your plumbing and water flow stay reliable.',
  },
  {
    icon: 'mdi-timer-outline',
    title: 'Timer Installation & Programming',
    description:
      'New timer installation and programming to automate your pump schedule and save on energy.',
  },
  {
    icon: 'mdi-water-pump',
    title: 'Pump & Filter Repairs',
    description:
      'Repairs and replacements for pumps and filters to restore proper circulation and filtration.',
  },
  {
    icon: 'mdi-water-sync',
    title: 'Green-to-Clean Services',
    description:
      'Turned green? We bring neglected and algae-filled pools back to clean, clear, and swimmable.',
  },
  {
    icon: 'mdi-broom',
    title: 'One-Time Cleanings',
    description:
      'Hosting guests or just need a refresh? Book a thorough one-time cleaning whenever you need it.',
  },
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

.service-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(8, 145, 178, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card:hover {
  box-shadow: 0 12px 40px rgba(8, 145, 178, 0.15) !important;
  transform: translateY(-4px);
}
</style>
