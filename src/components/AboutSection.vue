<template>
  <section id="about" class="section section--sand">
    <div class="wrap about">
      <!-- Copy -->
      <div class="about__copy">
        <span class="eyebrow"><i class="mdi mdi-water"></i> About Us</span>
        <h2 class="h2 about__title">Honest, local pool care you can rely on</h2>
        <p class="lead">
          Legacy Pool Co. was founded with one goal — to provide dependable, honest pool service
          that Yuma families can trust. As a local, family-owned business, we build lasting
          relationships and treat every pool as if it were our own.
        </p>
        <p class="about__p">
          From weekly service and filter cleanings to equipment repairs, timers, and valves, we keep
          your water clean, safe, and running efficiently year-round — with honest communication and
          no surprises.
        </p>

        <div class="about__stats">
          <div class="about__stat">
            <strong>3+</strong>
            <span>Years of experience</span>
          </div>
          <div class="about__stat">
            <strong>100%</strong>
            <span>Family owned</span>
          </div>
        </div>
      </div>

      <!-- Deck panel -->
      <aside class="about__panel">
        <div class="about__panel-glow" aria-hidden="true"></div>
        <i class="mdi mdi-pool about__panel-icon"></i>
        <h3 class="about__panel-title">Family-owned &amp; operated</h3>
        <p class="about__panel-text">
          We live and work in Yuma. When you call, you reach the same friendly team that shows up
          to care for your pool — every week.
        </p>
        <div class="about__panel-loc">
          <i class="mdi mdi-map-marker"></i> Proudly serving Yuma, Arizona
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(2.5rem, 5vw, 4.5rem);
}
.about__title { margin: 1rem 0 1.4rem; }
.about__p { font-size: 1.0625rem; line-height: 1.7; color: var(--muted); margin: 1.1rem 0 0; }

.about__stats { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 2rem; }
.about__stat { display: flex; flex-direction: column; }
.about__stat strong {
  font-family: 'Clash Display', sans-serif;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 1;
  color: var(--water);
}
.about__stat span { font-size: 0.85rem; color: var(--muted); margin-top: 0.3rem; }

.about__panel {
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  padding: clamp(2rem, 4vw, 2.75rem);
  color: #fff;
  background: linear-gradient(155deg, var(--water) 0%, var(--deep) 78%);
  box-shadow: var(--shadow-card);
}
.about__panel-glow {
  position: absolute;
  top: -30%; right: -20%;
  width: 70%; height: 70%;
  background: radial-gradient(circle, rgba(127, 224, 238, 0.4), transparent 65%);
  filter: blur(14px);
}
.about__panel-icon { position: relative; font-size: 2.6rem; color: var(--aqua-soft); }
.about__panel-title { position: relative; color: #fff; font-size: 1.4rem; margin: 1rem 0 0.7rem; }
.about__panel-text { position: relative; font-size: 0.98rem; line-height: 1.6; color: rgba(255, 255, 255, 0.85); margin: 0; }
.about__panel-loc {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1.3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
  font-weight: 500;
}
.about__panel-loc .mdi { color: var(--aqua); }

@media (max-width: 880px) {
  .about { grid-template-columns: 1fr; }
}
</style>
