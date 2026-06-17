<template>
  <footer class="foot section--deep">
    <div class="foot__water" aria-hidden="true"></div>

    <div class="wrap foot__inner">
      <!-- Brand -->
      <div class="foot__brand">
        <div class="foot__id">
          <span class="foot__logo"><img :src="logo" alt="Legacy Pool Co. logo" /></span>
          <div>
            <strong>Legacy Pool Co.</strong>
            <span>Yuma, AZ</span>
          </div>
        </div>
        <p class="foot__tagline">Built with trust. Maintained with care.</p>
        <div class="foot__social">
          <a href="https://www.instagram.com/legacypoolserviceaz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i class="mdi mdi-instagram"></i>
          </a>
          <a href="mailto:legacypoolservice26@gmail.com" aria-label="Email">
            <i class="mdi mdi-email-outline"></i>
          </a>
        </div>
      </div>

      <!-- Services -->
      <div class="foot__col">
        <h4 class="foot__head">Services</h4>
        <span v-for="s in services" :key="s">{{ s }}</span>
      </div>

      <!-- Contact -->
      <div class="foot__col">
        <h4 class="foot__head">Contact</h4>
        <span><i class="mdi mdi-account-outline"></i> Aubrianna Ziemer</span>
        <a href="tel:+19287500972"><i class="mdi mdi-phone-outline"></i> (928) 750-0972</a>
        <a href="mailto:legacypoolservice26@gmail.com" class="foot__email">
          <i class="mdi mdi-email-outline"></i> legacypoolservice26@gmail.com
        </a>
      </div>

      <!-- CTA -->
      <div class="foot__cta">
        <h4 class="foot__head">Ready for clear water?</h4>
        <p>Free estimate, no obligation. Weekly service from $150/month.</p>
        <button class="btn btn--sun" @click="$emit('open-contact')">Get a free estimate</button>
        <a class="btn btn--ghost" href="tel:+19287500972"><i class="mdi mdi-phone"></i> Call now</a>
      </div>
    </div>

    <div class="wrap foot__bar">
      <span>© {{ year }} Legacy Pool Co. All rights reserved.</span>
      <span>Family-owned &amp; operated · Yuma, Arizona</span>
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/logo.png'

defineEmits(['open-contact'])

const year = new Date().getFullYear()
const services = [
  'Weekly Maintenance',
  'Filter Cleaning',
  'Equipment Repairs',
  'Green-to-Clean',
  'One-Time Cleanings',
]
</script>

<style scoped>
.foot { position: relative; overflow: hidden; padding-block: clamp(3.5rem, 7vw, 5.5rem) 2rem; }
.foot__water {
  position: absolute;
  inset: 0;
  background: radial-gradient(60vw 40vw at 85% 0%, rgba(39, 192, 217, 0.16), transparent 60%);
  pointer-events: none;
}
.foot__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.43fr 1.4fr;
  gap: clamp(2rem, 4vw, 3rem);
}

.foot__id { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.1rem; }
.foot__logo {
  width: 48px; height: 48px; border-radius: 13px; background: #fff;
  overflow: hidden; display: grid; place-items: center; flex-shrink: 0;
}
.foot__logo img { width: 100%; height: 100%; object-fit: contain; }
.foot__id strong { font-family: 'Clash Display', sans-serif; font-weight: 600; font-size: 1.05rem; color: #fff; display: block; }
.foot__id span { font-size: 0.8rem; color: rgba(255, 255, 255, 0.6); }
.foot__tagline {
  font-family: 'Clash Display', sans-serif;
  font-size: 1.05rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.82);
  max-width: 16rem;
  margin: 0 0 1.3rem;
}
.foot__social { display: flex; gap: 0.6rem; }
.foot__social a {
  width: 42px; height: 42px; border-radius: 12px;
  display: grid; place-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #fff; font-size: 1.2rem;
  transition: background 0.2s ease, transform 0.2s ease;
}
.foot__social a:hover { background: rgba(39, 192, 217, 0.25); transform: translateY(-2px); }

.foot__head {
  font-family: 'General Sans', sans-serif;
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--aqua);
  margin-bottom: 1.1rem;
}
.foot__col { display: flex; flex-direction: column; gap: 0.7rem; }
.foot__col span, .foot__col a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
}
.foot__col a:hover { color: #fff; }
.foot__col .mdi { color: var(--aqua); font-size: 1.05rem; }
.foot__email { word-break: break-all; }

.foot__cta p { font-size: 0.92rem; line-height: 1.55; color: rgba(255, 255, 255, 0.72); margin: 0 0 1.1rem; }
.foot__cta .btn { width: 100%; margin-bottom: 0.6rem; }

.foot__bar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.6rem;
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 900px) {
  .foot__inner { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .foot__inner { grid-template-columns: 1fr; }
  .foot__bar { flex-direction: column; }
}
</style>
