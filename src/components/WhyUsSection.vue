<template>
  <section id="why-us" class="section section--sand whyus">
    <div class="wrap whyus__grid">
      <div class="whyus__head">
        <span class="eyebrow"><i class="mdi mdi-shield-check-outline"></i> Why Choose Us</span>
        <h2 class="h2 whyus__title">The Legacy Pool difference</h2>
        <p class="lead">
          We're not a franchise — we're your neighbors. That means honest advice, dependable
          scheduling, and a pool that's treated like our own, every single visit.
        </p>
        <button class="btn btn--water" @click="$emit('open-contact')">
          <i class="mdi mdi-clipboard-text-outline"></i> Get a free estimate
        </button>
      </div>

      <div class="whyus__features">
        <div v-for="f in features" :key="f.title" class="card card--hover whyus__feature">
          <span class="icon-chip"><i :class="`mdi ${f.icon}`"></i></span>
          <div>
            <h3 class="h3 whyus__feature-title">{{ f.title }}</h3>
            <p class="whyus__feature-text">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const features = [
  { icon: 'mdi-home-heart', title: 'Family-Owned & Operated', text: 'A local business built on relationships — you deal directly with the people who service your pool.' },
  { icon: 'mdi-tag-check-outline', title: 'Free Estimates', text: 'Honest, no-obligation estimates before any work begins. No surprises, no hidden fees.' },
  { icon: 'mdi-clock-check-outline', title: 'Over 3 Years of Experience', text: 'Hands-on experience keeping Yuma pools clean, balanced, and running efficiently year-round.' },
  { icon: 'mdi-handshake-outline', title: 'Honest, Reliable Service', text: 'Dependable scheduling and straightforward communication you can count on, every time.' },
]
</script>

<style scoped>
.whyus__grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: start;
}
.whyus__head { position: sticky; top: 96px; }
.whyus__title { margin: 1rem 0 1.2rem; }
.whyus__head .btn { margin-top: 1.8rem; }

.whyus__features { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.whyus__feature { display: flex; gap: 1.1rem; }
.whyus__feature-title { margin: 0 0 0.4rem; font-size: 1.05rem; }
.whyus__feature-text { font-size: 0.9rem; line-height: 1.6; color: var(--muted); margin: 0; }

@media (max-width: 880px) {
  .whyus__grid { grid-template-columns: 1fr; }
  .whyus__head { position: static; }
}
@media (max-width: 520px) {
  .whyus__features { grid-template-columns: 1fr; }
}
</style>
