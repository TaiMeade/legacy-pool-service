<template>
  <section id="service-area" class="section section--paper area">
    <div class="wrap area__grid">
      <!-- Copy -->
      <div class="area__copy">
        <span class="eyebrow"><i class="mdi mdi-map-marker-outline"></i> Coverage</span>
        <h2 class="h2 area__title">Proudly serving Yuma &amp; the Foothills</h2>
        <p class="lead">
          Legacy Pool Co. provides reliable pool service throughout Yuma, Arizona and the
          surrounding area — keeping local pools clean, safe, and running efficiently all year.
        </p>

        <ul class="area__list">
          <li v-for="a in areas" :key="a"><i class="mdi mdi-check-circle"></i> {{ a }}</li>
        </ul>

        <p class="area__note">
          Not sure if we cover your neighborhood? Give us a call — we'll let you know and try to help.
        </p>
      </div>

      <!-- Location card -->
      <aside class="area__card">
        <div class="area__card-map">
          <i class="mdi mdi-map-marker-radius"></i>
          <span class="area__card-ring"></span>
        </div>
        <h3 class="h3">Based right here in Yuma</h3>
        <p>Serving all of Yuma, Arizona and the surrounding communities.</p>
        <a
          class="btn btn--outline"
          href="https://www.google.com/maps/search/?api=1&query=Yuma+AZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="mdi mdi-map-search"></i> View on map
        </a>
      </aside>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const areas = [
  'Yuma',
  'Foothills',
  'Fortuna Foothills',
  'Somerton',
  'San Luis',
  'Wellton',
  'Gadsden',
  'Surrounding areas',
]
</script>

<style scoped>
.area__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: center;
}
.area__title { margin: 1rem 0 1.2rem; }
.area__list {
  list-style: none;
  padding: 0;
  margin: 1.8rem 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem 1.5rem;
}
.area__list li { display: flex; align-items: center; gap: 0.55rem; font-size: 0.95rem; color: var(--muted); }
.area__list .mdi { color: var(--water); font-size: 1.15rem; }
.area__note { font-size: 0.92rem; font-style: italic; color: var(--muted); margin: 0; }

.area__card {
  background: linear-gradient(160deg, var(--sand) 0%, var(--sand-2) 100%);
  border: 1px solid var(--line);
  border-radius: 26px;
  padding: clamp(2rem, 4vw, 2.75rem);
  text-align: center;
}
.area__card-map {
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto 1.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(14, 126, 151, 0.1);
  color: var(--water);
  font-size: 2.4rem;
}
.area__card-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(39, 192, 217, 0.4);
  animation: area-pulse 2.6s ease-out infinite;
}
@keyframes area-pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.45); opacity: 0; }
}
.area__card h3 { margin-bottom: 0.5rem; }
.area__card p { font-size: 0.95rem; color: var(--muted); margin: 0 0 1.5rem; }

@media (max-width: 880px) {
  .area__grid { grid-template-columns: 1fr; }
}
@media (max-width: 460px) {
  .area__list { grid-template-columns: 1fr; }
}
</style>
