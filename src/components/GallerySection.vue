<script setup>
const spaces = [
  { name: '大堂雅座', emoji: '🪑', cls: 'tone-a', tall: false, wide: true, note: '暖光与绿植,适合三两好友' },
  { name: '私宴长桌', emoji: '🕯️', cls: 'tone-b', tall: false, wide: false, note: '十人长桌,烛光晚宴' },
  { name: '明档厨房', emoji: '🔥', cls: 'tone-c', tall: true, wide: false, note: '烟火气看得见' },
  { name: '露台花园', emoji: '🌿', cls: 'tone-d', tall: false, wide: false, note: '绿荫环绕,四季皆宜' },
  { name: '包间会客', emoji: '🏮', cls: 'tone-e', tall: false, wide: true, note: '安静私密,商务宴请' },
  { name: '吧台一隅', emoji: '🍶', cls: 'tone-f', tall: false, wide: false, note: '深夜食堂的松弛感' }
]
</script>

<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="section-eyebrow">餐厅环境 · OUR SPACE</p>
        <h2 class="section-title">一处安放味觉与心情的空间</h2>
        <p class="section-sub">从大堂到包间,每一处细节都为一场好饭而设计。</p>
      </div>

      <div class="gallery-grid">
        <figure
          v-for="(s, i) in spaces"
          :key="s.name"
          class="space-card"
          :class="[s.cls, { tall: s.tall, wide: s.wide }]"
          v-reveal="(i % 3) * 80"
        >
          <div class="space-emoji">{{ s.emoji }}</div>
          <div class="space-grain" aria-hidden="true"></div>
          <figcaption>
            <h3>{{ s.name }}</h3>
            <p>{{ s.note }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: 110px 0;
  background: var(--cream);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 190px;
  gap: 18px;
}

.space-card {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 22px;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.space-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.space-card.tall {
  grid-row: span 2;
}

.space-card.wide {
  grid-column: span 2;
}

.tone-a {
  background: linear-gradient(150deg, #6d4c33, #3c2a1a);
}
.tone-b {
  background: linear-gradient(150deg, #4a3b4e, #241b2b);
}
.tone-c {
  background: linear-gradient(150deg, #7a3d24, #401e10);
}
.tone-d {
  background: linear-gradient(150deg, #55704a, #263a24);
}
.tone-e {
  background: linear-gradient(150deg, #2f4a5c, #152633);
}
.tone-f {
  background: linear-gradient(150deg, #8a5a2b, #4a2e12);
}

.space-grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.16) 1px, transparent 1.4px);
  background-size: 22px 22px;
  opacity: 0.35;
  pointer-events: none;
}

.space-emoji {
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 56px;
  opacity: 0.92;
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;
}

.space-card:hover .space-emoji {
  transform: scale(1.12) rotate(-6deg);
}

.space-card figcaption {
  position: relative;
  z-index: 1;
  color: #fff;
}

.space-card h3 {
  font-family: var(--font-serif);
  font-size: 20px;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

.space-card p {
  font-size: 12.5px;
  opacity: 0.78;
  max-width: 240px;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 170px;
  }
  .space-card.wide {
    grid-column: span 2;
  }
}

@media (max-width: 560px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 160px;
  }
  .space-card.wide,
  .space-card.tall {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>