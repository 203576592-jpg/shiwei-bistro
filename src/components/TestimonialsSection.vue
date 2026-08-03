<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const reviews = [
  {
    quote: '从摆盘到火候都无可挑剔,藤椒烤鱼是我今年吃过最惊艳的一道菜。明档里翻飞的火苗,就是最好的招牌。',
    name: '张女士',
    role: '美食博主 · 探店 300+ 家',
    emoji: '🧑‍🍳'
  },
  {
    quote: '带家人来吃过五六次了,菜品稳定、服务贴心,连挑剔的爸妈都成了常客。桂花酒酿圆子每次必点。',
    name: '李先生',
    role: '五年老客',
    emoji: '👨‍👩‍👧'
  },
  {
    quote: 'Traditional flavors with a modern touch. The tea pairing and seasonal tasting menu are a must-try experience. 十星推荐!',
    name: 'Mr. Chen',
    role: 'TasteAtlas 收录餐厅',
    emoji: '🌏'
  }
]

const index = ref(0)
const active = computed(() => reviews[index.value])

let timer = null

function next() {
  index.value = (index.value + 1) % reviews.length
}

function go(i) {
  index.value = i
}

function restart() {
  clearInterval(timer)
  timer = setInterval(next, 5200)
}

onMounted(() => restart())
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="section-eyebrow">顾客评价 · REVIEWS</p>
        <h2 class="section-title">吃过的人,都会记得</h2>
      </div>

      <div class="review-stage" v-reveal="80">
        <Transition name="review" mode="out-in">
          <figure :key="index" class="review-card">
            <span class="quote-mark" aria-hidden="true">“</span>
            <p class="review-quote">{{ active.quote }}</p>
            <figcaption>
              <span class="review-avatar">{{ active.emoji }}</span>
              <div>
                <strong>{{ active.name }}</strong>
                <span>{{ active.role }}</span>
              </div>
              <span class="review-stars" aria-label="五星好评">★★★★★</span>
            </figcaption>
          </figure>
        </Transition>

        <div class="review-dots">
          <button
            v-for="(r, i) in reviews"
            :key="r.name"
            :class="{ active: i === index }"
            :aria-label="'查看第 ' + (i + 1) + ' 条评价'"
            @click="go(i)"
            @mouseenter="restart"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 110px 0;
  background: var(--green-dark);
  color: #f5efe6;
  position: relative;
  overflow: hidden;
}

.testimonials::before {
  content: '';
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  top: -180px;
  right: -140px;
  background: radial-gradient(circle, rgba(201, 111, 58, 0.35), transparent 65%);
  pointer-events: none;
}

.testimonials::after {
  content: '';
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  bottom: -190px;
  left: -120px;
  background: radial-gradient(circle, rgba(217, 164, 65, 0.28), transparent 65%);
  pointer-events: none;
}

.testimonials .section-eyebrow {
  color: var(--gold);
}

.testimonials .section-title {
  color: #fff;
}

.review-stage {
  max-width: 820px;
  margin-inline: auto;
  position: relative;
  z-index: 1;
}

.review-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 22px;
  padding: 52px 56px 40px;
  text-align: center;
  backdrop-filter: blur(8px);
}

.quote-mark {
  font-family: var(--font-serif);
  font-size: 72px;
  line-height: 1;
  color: var(--gold);
  display: block;
  margin-bottom: 6px;
}

.review-quote {
  font-family: var(--font-serif);
  font-size: clamp(17px, 2.4vw, 21px);
  line-height: 2;
  color: rgba(245, 239, 230, 0.95);
  min-height: 132px;
}

.review-card figcaption {
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.review-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 26px;
  background: rgba(217, 164, 65, 0.18);
  border: 1px solid rgba(217, 164, 65, 0.4);
}

.review-card figcaption div {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.review-card figcaption strong {
  font-size: 15px;
  letter-spacing: 0.08em;
}

.review-card figcaption div span {
  font-size: 12.5px;
  color: rgba(245, 239, 230, 0.6);
}

.review-stars {
  color: var(--gold);
  letter-spacing: 2px;
  font-size: 15px;
}

.review-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}

.review-dots button {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: rgba(245, 239, 230, 0.28);
  transition: all 0.3s ease;
}

.review-dots button.active {
  width: 28px;
  background: var(--gold);
}

.review-enter-active,
.review-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.review-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.review-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 620px) {
  .review-card {
    padding: 36px 22px 30px;
  }
  .review-quote {
    min-height: auto;
  }
  .review-card figcaption {
    flex-wrap: wrap;
  }
}
</style>