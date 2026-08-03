<script setup>
const features = [
  {
    icon: '🌿',
    title: '时令之选',
    desc: '只做当季食材,每日清晨鲜采直送,菜单随四季更替。'
  },
  {
    icon: '🔥',
    title: '匠心火候',
    desc: '明档现炒,猛火快攻,每一道菜都讲究锅气与分寸。'
  },
  {
    icon: '🏮',
    title: '东方美学',
    desc: '器皿、陈设、灯光皆有讲究,让用餐成为一场雅集。'
  }
]

const milestones = ['2014 · 一间四张桌的小馆', '2017 · 迁址衡山路,口碑出圈', '2021 · 入选本地必吃榜', '2026 · 十年如一,初心不改']
</script>

<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual" v-reveal>
          <div class="visual-frame">
            <div class="frame-inner">
              <div class="kitchen-illustration" aria-hidden="true">
                <span class="kglow"></span>
                <svg viewBox="0 0 320 240">
                  <rect width="320" height="240" rx="14" fill="#2a4a35" />
                  <circle cx="60" cy="58" r="26" fill="#e9a54b" />
                  <circle cx="60" cy="58" r="16" fill="#d9a441" />
                  <path d="M60 8v14M60 84v14M20 58h14M86 58h14" stroke="#f5efe6" stroke-width="4" stroke-linecap="round" />
                  <path d="M118 118h130v14H118zM130 96h106v14H130z" fill="#c96f3a" />
                  <rect x="128" y="78" width="110" height="16" rx="8" fill="#8fbc63" />
                  <path d="M40 120c-10 30-4 60 16 78" stroke="#f5efe6" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8" />
                  <path d="M40 120c-10 30-4 60 16 78" stroke="#e9a54b" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="6 8" opacity=".9" />
                  <rect x="66" y="132" width="168" height="26" rx="13" fill="#5d2f1e" />
                  <rect x="78" y="146" width="8" height="52" rx="4" fill="#3c2417" />
                  <rect x="126" y="146" width="8" height="52" rx="4" fill="#3c2417" />
                  <rect x="174" y="146" width="8" height="52" rx="4" fill="#3c2417" />
                  <rect x="222" y="146" width="8" height="52" rx="4" fill="#3c2417" />
                  <path d="M78 196c8-8 26-8 34 0M126 196c8-8 26-8 34 0M174 196c8-8 26-8 34 0M222 196c8-8 26-8 34 0" stroke="#f5efe6" stroke-width="3" fill="none" opacity=".55" />
                  <path d="M52 224h216" stroke="#14291c" stroke-width="6" stroke-linecap="round" opacity=".5" />
                </svg>
              </div>
            </div>
          </div>
          <div class="badge-year">
            <strong>12</strong>
            <span>年<br />专注本味</span>
          </div>
        </div>

        <div class="about-copy">
          <p class="section-eyebrow" v-reveal>关于我们 · OUR STORY</p>
          <h2 class="section-title" v-reveal="60">一桌好饭,始于一颗认真做饭的心</h2>
          <p class="about-lead" v-reveal="120">
            2014 年,我们在衡山路租下四张桌的小铺。没有华丽的装修,只有一锅一铲,
            和"把家常做到极致"的执念。
          </p>
          <p class="about-text" v-reveal="160">
            十年来,我们走遍产区寻访食材,向老师傅讨教火候,把二十四节气的味道装进菜单。
            如今的小馆依然不大,但每一道菜端上桌前,都要经过我们自己的筷子。
          </p>

          <ul class="features">
            <li v-for="(f, i) in features" :key="f.title" v-reveal="i * 90">
              <span class="feature-icon">{{ f.icon }}</span>
              <div>
                <h3>{{ f.title }}</h3>
                <p>{{ f.desc }}</p>
              </div>
            </li>
          </ul>

          <ul class="milestones" v-reveal="220">
            <li v-for="m in milestones" :key="m">
              <span class="dot"></span>{{ m }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 110px 0;
  background: var(--cream);
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 64px;
  align-items: center;
}

.about-visual {
  position: relative;
}

.visual-frame {
  background: var(--green);
  border-radius: var(--radius);
  padding: 14px;
  box-shadow: var(--shadow-md);
  transform: rotate(-1.6deg);
  transition: transform 0.4s ease;
}

.about-visual:hover .visual-frame {
  transform: rotate(0deg);
}

.frame-inner {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.kitchen-illustration {
  position: relative;
  background: linear-gradient(160deg, #2a4a35, #14291c);
}

.kglow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(233, 165, 75, 0.28), transparent 55%);
}

.kitchen-illustration svg {
  width: 100%;
  height: auto;
  position: relative;
}

.badge-year {
  position: absolute;
  right: -18px;
  bottom: -22px;
  background: var(--accent);
  color: #fff;
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow-md);
  transform: rotate(2deg);
}

.badge-year strong {
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
}

.badge-year span {
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.2em;
}

.about-copy .section-eyebrow {
  margin-bottom: 12px;
}

.about-copy .section-title {
  text-align: left;
  max-width: 480px;
}

.about-lead {
  margin-top: 22px;
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--green-soft);
  line-height: 1.9;
}

.about-text {
  margin-top: 14px;
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 2;
}

.features {
  list-style: none;
  margin-top: 32px;
  display: grid;
  gap: 16px;
}

.features li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.features li:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

.feature-icon {
  font-size: 26px;
  width: 52px;
  height: 52px;
  flex: none;
  display: grid;
  place-items: center;
  background: var(--cream-2);
  border-radius: 12px;
}

.features h3 {
  font-family: var(--font-serif);
  font-size: 17px;
  letter-spacing: 0.06em;
}

.features p {
  font-size: 13.5px;
  color: var(--ink-soft);
  margin-top: 2px;
}

.milestones {
  list-style: none;
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
}

.milestones li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--ink-soft);
  letter-spacing: 0.04em;
}

.milestones .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 56px;
  }
  .about-visual {
    max-width: 520px;
    margin-inline: auto;
  }
  .about-copy .section-title {
    max-width: none;
  }
}
</style>