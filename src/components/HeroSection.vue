<template>
  <section id="hero" class="hero">
    <!-- Living water backdrop -->
    <div class="hero__water" aria-hidden="true">
      <span class="hero__sun"></span>
      <span class="caustic caustic--1"></span>
      <span class="caustic caustic--2"></span>
      <span class="hero__ripple"></span>
    </div>

    <div class="wrap hero__inner">
      <!-- Copy -->
      <div class="hero__content rise">
        <span class="eyebrow"><i class="mdi mdi-map-marker"></i> Yuma, Arizona</span>
        <h1 class="h1 hero__title">
          Your pool,<br />always <span class="accent">swim-ready</span>.
        </h1>
        <p class="lead hero__lead">
          Family-owned weekly pool service in Yuma — clear water, balanced chemicals,
          and equipment that just works. No surprises, just a pool you can jump into.
        </p>
        <div class="hero__cta">
          <button class="btn btn--sun btn--lg" @click="$emit('open-contact')">
            <i class="mdi mdi-clipboard-text-outline"></i> Get a free estimate
          </button>
          <a class="btn btn--ghost btn--lg" href="tel:+19287500972">
            <i class="mdi mdi-phone"></i> (928) 750-0972
          </a>
        </div>
        <div class="hero__trust">
          <span><i class="mdi mdi-home-heart"></i> Family-owned &amp; local</span>
          <span><i class="mdi mdi-tag-check"></i> Free estimates</span>
          <span><i class="mdi mdi-clock-check-outline"></i> 3+ years experience</span>
        </div>
      </div>

      <!-- Price card -->
      <aside class="hero__card rise" style="animation-delay: 0.12s;">
        <div class="hero__card-glow" aria-hidden="true"></div>
        <span class="hero__card-label">Weekly Pool Service</span>
        <div class="hero__price">
          <span class="hero__price-from">from</span>
          <span class="hero__price-amt">$175</span>
          <span class="hero__price-per">/ month</span>
        </div>
        <ul class="hero__card-list">
          <li><i class="mdi mdi-check-circle"></i> Weekly cleaning &amp; chemical balancing</li>
          <li><i class="mdi mdi-check-circle"></i> Filter checks &amp; equipment monitoring</li>
          <li><i class="mdi mdi-check-circle"></i> Honest, reliable, same friendly face</li>
        </ul>
        <button class="btn btn--sun hero__card-btn" @click="$emit('open-contact')">
          Start service
        </button>
        <p class="hero__card-foot">Serving Yuma &amp; the Foothills</p>
      </aside>
    </div>

    <!-- Waterline into the deck -->
    <div class="waterline" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,42 C240,82 480,8 720,30 C960,52 1200,86 1440,40 L1440,80 L0,80 Z" fill="#F7F1E6" />
      </svg>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;
  padding-block: 7rem 5rem;
  background: radial-gradient(125% 110% at 72% 8%, #0E5C70 0%, #0A3A4A 46%, #07232E 100%);
}

/* ---- Water backdrop ---- */
.hero__water { position: absolute; inset: 0; z-index: 0; }
.hero__sun {
  position: absolute;
  top: -18%;
  right: -6%;
  width: 46vw;
  height: 46vw;
  background: radial-gradient(circle, rgba(245, 165, 36, 0.28), transparent 62%);
  filter: blur(10px);
}
.caustic {
  position: absolute;
  border-radius: 50%;
  filter: blur(46px);
  mix-blend-mode: screen;
}
.caustic--1 {
  width: 62vw; height: 62vw; left: -14vw; top: -16vw;
  background: radial-gradient(circle, rgba(127, 224, 238, 0.55), transparent 60%);
  animation: drift1 19s ease-in-out infinite alternate;
}
.caustic--2 {
  width: 52vw; height: 52vw; right: -10vw; bottom: -22vw;
  background: radial-gradient(circle, rgba(39, 192, 217, 0.5), transparent 62%);
  animation: drift2 23s ease-in-out infinite alternate;
}
.hero__ripple {
  position: absolute;
  inset: -25%;
  background-image: repeating-linear-gradient(
    118deg,
    rgba(255, 255, 255, 0.05) 0 2px,
    transparent 2px 11px
  );
  opacity: 0.6;
  mix-blend-mode: overlay;
  animation: ripple-shimmer 24s linear infinite;
}

/* ---- Layout ---- */
.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.25fr 0.85fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
  width: 100%;
}

.hero :deep(.eyebrow) { color: var(--aqua); }
.hero__title { margin: 1.1rem 0 1.3rem; color: #fff; }
.hero__title .accent {
  color: var(--aqua-soft);
  position: relative;
}
.hero__lead { max-width: 30rem; color: rgba(255, 255, 255, 0.82); }
.hero__cta { display: flex; flex-wrap: wrap; gap: 0.9rem; margin: 2rem 0 1.75rem; }
.hero__trust {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.78);
}
.hero__trust span { display: inline-flex; align-items: center; gap: 0.45rem; }
.hero__trust .mdi { color: var(--aqua); font-size: 1.1rem; }

/* ---- Price card ---- */
.hero__card {
  position: relative;
  border-radius: 26px;
  padding: 2rem 1.9rem 1.9rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(14px);
  box-shadow: 0 40px 80px -36px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  animation-name: rise-in, float-soft;
  animation-duration: 0.7s, 7s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-delay: 0.12s, 0.9s;
  animation-fill-mode: both, none;
}
.hero__card-glow {
  position: absolute;
  top: -40%;
  right: -30%;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(39, 192, 217, 0.45), transparent 65%);
  filter: blur(20px);
}
.hero__card-label {
  position: relative;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--aqua-soft);
}
.hero__price { position: relative; display: flex; align-items: baseline; gap: 0.4rem; margin: 0.5rem 0 1.2rem; }
.hero__price-from { font-size: 0.95rem; color: rgba(255, 255, 255, 0.7); }
.hero__price-amt {
  font-family: 'Clash Display', sans-serif;
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 1;
  color: #fff;
}
.hero__price-per { font-size: 1rem; color: rgba(255, 255, 255, 0.7); }
.hero__card-list { position: relative; list-style: none; padding: 0; margin: 0 0 1.5rem; display: grid; gap: 0.7rem; }
.hero__card-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.92rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.9);
}
.hero__card-list .mdi { color: var(--aqua); font-size: 1.15rem; flex-shrink: 0; }
.hero__card-btn { position: relative; width: 100%; }
.hero__card-foot { position: relative; text-align: center; margin: 0.9rem 0 0; font-size: 0.8rem; color: rgba(255, 255, 255, 0.62); }

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .hero__card { max-width: 420px; }
}
@media (max-width: 560px) {
  .hero__cta .btn { flex: 1 1 100%; }
}
</style>
