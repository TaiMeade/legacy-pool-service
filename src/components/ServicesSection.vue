<template>
  <section id="services" class="section section--paper services">
    <div class="wrap">
      <div class="section-head section-head--center">
        <span class="eyebrow"><i class="mdi mdi-pool"></i> What We Do</span>
        <h2 class="h2 services__title">Everything your pool needs</h2>
        <p class="lead">
          From weekly maintenance to green-to-clean rescues, we handle every part of pool care —
          reliably, professionally, and at a fair price.
        </p>
      </div>

      <div class="services__grid">
        <article v-for="s in services" :key="s.title" class="card card--hover service">
          <span class="icon-chip"><i :class="`mdi ${s.icon}`"></i></span>
          <h3 class="h3 service__title">{{ s.title }}</h3>
          <p class="service__text">{{ s.text }}</p>
        </article>
      </div>

      <div class="services__cta">
        <p>Don't see exactly what you need? Just ask — we're happy to help.</p>
        <div class="services__cta-btns">
          <button class="btn btn--water" @click="$emit('open-contact')">
            <i class="mdi mdi-clipboard-text-outline"></i> Request service
          </button>
          <a class="btn btn--outline" href="tel:+19287500972">
            <i class="mdi mdi-phone"></i> (928) 750-0972
          </a>
        </div>
      </div>
    </div>

    <!-- Dive into the deep end (gallery) -->
    <div class="waterline" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C240,78 480,6 720,30 C960,54 1200,84 1440,38 L1440,80 L0,80 Z" fill="#0A3A4A" />
      </svg>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const services = [
  { icon: 'mdi-pool', title: 'Weekly Pool Maintenance', text: 'Reliable weekly service to keep your water balanced, clean, and swim-ready all year — from $175/month.' },
  { icon: 'mdi-air-filter', title: 'Filter Cleaning & Breakdowns', text: 'Full filter cleanings and breakdowns to keep your system flowing efficiently and your water clear.' },
  { icon: 'mdi-wrench-outline', title: 'Equipment Repairs', text: 'We diagnose and repair pumps, filters, and pool equipment — getting everything running right.' },
  { icon: 'mdi-pipe-valve', title: 'Valve Replacement', text: 'Worn or leaking valves replaced quickly so your plumbing and water flow stay reliable.' },
  { icon: 'mdi-timer-outline', title: 'Timer Install & Programming', text: 'New timer installation and programming to automate your pump schedule and save on energy.' },
  { icon: 'mdi-water-pump', title: 'Pump & Filter Repairs', text: 'Repairs and replacements for pumps and filters to restore proper circulation and filtration.' },
  { icon: 'mdi-water-sync', title: 'Green-to-Clean', text: 'Turned green? We bring neglected, algae-filled pools back to clean, clear, and swimmable.' },
  { icon: 'mdi-broom', title: 'One-Time Cleanings', text: 'Hosting guests or need a refresh? Book a thorough one-time cleaning whenever you need it.' },
]
</script>

<style scoped>
.services { padding-bottom: clamp(6.5rem, 11vw, 10rem); }
.services__title { margin: 1rem 0 1rem; }
.services__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
}
.service { display: flex; flex-direction: column; }
.service__title { margin: 1.1rem 0 0.5rem; }
.service__text { font-size: 0.92rem; line-height: 1.6; color: var(--muted); margin: 0; }

.services__cta { text-align: center; margin-top: clamp(2.5rem, 5vw, 3.5rem); }
.services__cta p { color: var(--muted); margin: 0 0 1.1rem; }
.services__cta-btns { display: flex; flex-wrap: wrap; gap: 0.9rem; justify-content: center; }

@media (max-width: 1024px) { .services__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .services__grid { grid-template-columns: 1fr; } }
</style>
