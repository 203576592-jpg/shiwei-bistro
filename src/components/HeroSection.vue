<script setup>
const stats = [
  { value: '12', unit: '年', label: '匠心传承' },
  { value: '36', unit: '道', label: '招牌菜品' },
  { value: '4.9', unit: '分', label: '食客口碑' },
  { value: '20w', unit: '+', label: '接待人次' }
]
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-bg" aria-hidden="true">
      <span class="glow glow-a"></span>
      <span class="glow glow-b"></span>
      <span class="leaf leaf-1"></span>
      <span class="leaf leaf-2"></span>
      <span class="leaf leaf-3"></span>
    </div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="hero-eyebrow">拾味小馆 · 新中式融合餐厅</p>
        <h1 class="hero-title">
          人间烟火味
          <em>最抚凡人心</em>
        </h1>
        <p class="hero-sub">
          坚持时令食材与匠心火候,融东方美学于一桌之间。
          用一餐的时间,把寻常日子过成诗。
        </p>
        <div class="hero-actions">
          <a href="#menu" class="btn btn-primary">查看菜单</a>
          <a href="#reservation" class="btn btn-ghost">立即订位</a>
        </div>

        <dl class="hero-stats">
          <div v-for="s in stats" :key="s.label" class="stat">
            <dt>
              <span class="stat-value">{{ s.value }}</span><span class="stat-unit">{{ s.unit }}</span>
            </dt>
            <dd>{{ s.label }}</dd>
          </div>
        </dl>
      </div>

      <div class="hero-art" aria-hidden="true">
        <div class="art-plate">
          <svg class="bowl" viewBox="0 0 320 260" role="img" aria-label="一碗热气腾腾的面">
            <defs>
              <linearGradient id="bowlGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#e07a3f" />
                <stop offset="1" stop-color="#b8542a" />
              </linearGradient>
              <linearGradient id="soupGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#f7c873" />
                <stop offset="1" stop-color="#e9a54b" />
              </linearGradient>
            </defs>
            <ellipse cx="160" cy="196" rx="132" ry="16" fill="rgba(0,0,0,.22)" />
            <path
              d="M42 118c8 58 42 96 118 96s110-38 118-96c-6 34-44 52-118 52S48 152 42 118z"
              fill="url(#bowlGrad)"
            />
            <path d="M42 118c8 58 42 96 118 96s110-38 118-96" fill="none" stroke="#9c4320" stroke-width="5" />
            <ellipse cx="160" cy="112" rx="112" ry="40" fill="url(#soupGrad)" />
            <ellipse cx="160" cy="110" rx="112" ry="38" fill="none" stroke="#c98a3c" stroke-width="3" />
            <path d="M60 106c24 14 60 16 96 8 22-5 40-13 64-12" fill="none" stroke="#b8542a" stroke-width="4" stroke-linecap="round" />
            <path d="M96 96c18-10 40-10 56-2M148 112c16-12 42-14 62-8" fill="none" stroke="#d9a441" stroke-width="4" stroke-linecap="round" />
            <path d="M118 118c-6-12-4-26 4-34M202 112c10-8 22-8 30-4" fill="none" stroke="#7d8f4e" stroke-width="5" stroke-linecap="round" />
            <g stroke="#d98f4a" stroke-width="6" stroke-linecap="round">
              <path d="M150 118l-18-74M168 122l-4-80" />
            </g>
            <g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".75">
              <path d="M104 52c-4 10-4 20 0 30" />
              <path d="M210 40c-4 12-2 22 4 32" />
              <path d="M158 24c-3 8-3 16 0 24" />
            </g>
            <circle cx="88" cy="128" r="5" fill="#8fbc63" />
            <circle cx="238" cy="120" r="4" fill="#e8583f" />
          </svg>

          <div class="float-card card-rating">
            <div class="stars">★★★★★</div>
            <strong>4.9 / 5.0</strong>
            <span>3,200+ 条真实评价</span>
          </div>

          <div class="float-card card-dish">
            <span class="dish-emoji">🍜</span>
            <div>
              <strong>今日主厨推荐</strong>
              <span>金汤酸菜鱼米线</span>
            </div>
          </div>
        </div>

        <a href="#reservation" class="scroll-hint">
          <span>向下滚动</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0f2418 0%, #1f3d2b 55%, #2a4a35 100%);
  color: #f5efe6;
  overflow: hidden;
  padding: 120px 0 60px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.4;
}

.glow-a {
  width: 520px;
  height: 520px;
  right: -140px;
  top: -120px;
  background: radial-gradient(circle, rgba(217, 164, 65, 0.55), transparent 65%);
}

.glow-b {
  width: 460px;
  height: 460px;
  left: -160px;
  bottom: -180px;
  background: radial-gradient(circle, rgba(201, 111, 58, 0.5), transparent 65%);
}

.leaf {
  position: absolute;
  width: 130px;
  height: 190px;
  background: radial-gradient(circle at 30% 30%, rgba(151, 191, 99, 0.5), rgba(127, 143, 78, 0.08) 70%);
  border-radius: 60% 40% 55% 45% / 50% 45% 55% 50%;
  transform: rotate(-24deg);
  opacity: 0.7;
}

.leaf-1 {
  top: 18%;
  left: 6%;
}
.leaf-2 {
  bottom: 10%;
  right: 42%;
  transform: rotate(40deg) scale(0.8);
  opacity: 0.45;
}
.leaf-3 {
  top: 12%;
  right: 8%;
  transform: rotate(120deg) scale(0.6);
  opacity: 0.35;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--gold);
  font-size: 14px;
  letter-spacing: 0.35em;
  margin-bottom: 20px;
}

.hero-eyebrow::before {
  content: '';
  width: 36px;
  height: 1px;
  background: var(--gold);
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(40px, 6.4vw, 74px);
  line-height: 1.22;
  font-weight: 900;
  letter-spacing: 0.06em;
}

.hero-title em {
  display: block;
  font-style: normal;
  color: var(--gold);
  margin-top: 6px;
}

.hero-sub {
  margin-top: 26px;
  max-width: 460px;
  color: rgba(245, 239, 230, 0.82);
  font-size: 16px;
  line-height: 2;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 38px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 38px;
  margin-top: 56px;
  padding-top: 30px;
  border-top: 1px solid rgba(245, 239, 230, 0.18);
}

.stat dt {
  display: flex;
  align-items: baseline;
  gap: 3px;
}

.stat-value {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 700;
  color: #fff;
}

.stat-unit {
  color: var(--gold);
  font-size: 14px;
}

.stat dd {
  font-size: 13px;
  letter-spacing: 0.2em;
  color: rgba(245, 239, 230, 0.62);
  margin-top: 2px;
}

.hero-art {
  position: relative;
  display: flex;
  justify-content: center;
}

.art-plate {
  position: relative;
  width: min(480px, 100%);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}

.art-plate::before {
  content: '';
  position: absolute;
  inset: 6%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 60%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.35);
}

.bowl {
  width: 86%;
  filter: drop-shadow(0 30px 34px rgba(0, 0, 0, 0.38));
  animation: float 5.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

.float-card {
  position: absolute;
  background: rgba(255, 253, 248, 0.96);
  color: var(--ink);
  border-radius: 14px;
  box-shadow: var(--shadow-md);
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  backdrop-filter: blur(6px);
}

.card-rating {
  top: 6%;
  left: 0;
  animation: bob 4.2s ease-in-out infinite;
}

.card-rating .stars {
  color: var(--gold);
  font-size: 13px;
  letter-spacing: 2px;
}

.card-rating strong {
  font-family: var(--font-serif);
  font-size: 22px;
}

.card-rating span {
  font-size: 12px;
  color: var(--ink-soft);
}

.card-dish {
  bottom: 8%;
  right: 0;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  animation: bob 4.8s ease-in-out infinite reverse;
}

.dish-emoji {
  font-size: 30px;
}

.card-dish div {
  display: flex;
  flex-direction: column;
}

.card-dish strong {
  font-family: var(--font-serif);
  font-size: 14px;
}

.card-dish span {
  font-size: 12px;
  color: var(--ink-soft);
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.scroll-hint {
  position: absolute;
  bottom: -56px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(245, 239, 230, 0.65);
  font-size: 12px;
  letter-spacing: 0.3em;
  animation: hintPulse 2.2s ease-in-out infinite;
}

@keyframes hintPulse {
  0%, 100% { opacity: 0.55; transform: translate(-50%, 0); }
  50% { opacity: 1; transform: translate(-50%, 6px); }
}

@media (max-width: 960px) {
  .hero {
    padding: 130px 0 90px;
  }
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-eyebrow {
    justify-content: center;
  }
  .hero-sub {
    margin-inline: auto;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-stats {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .hero-art {
    margin-top: 10px;
  }
  .scroll-hint {
    display: none;
  }
}

@media (max-width: 520px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
    text-align: left;
  }
  .card-rating {
    left: -4px;
  }
  .card-dish {
    right: -4px;
  }
}
</style>