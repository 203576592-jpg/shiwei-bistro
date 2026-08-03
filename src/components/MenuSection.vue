<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'signature', label: '招牌推荐' },
  { id: 'hot', label: '热菜' },
  { id: 'cold', label: '凉菜小食' },
  { id: 'staple', label: '主食' },
  { id: 'dessert', label: '甜品饮品' }
]

const dishes = [
  { id: 'signature', name: '秘制黑椒安格斯牛肋', desc: '低温慢煮四小时,黑椒酱汁收得浓稠,入口即化。', price: 168, tag: '主厨推荐', emoji: '🥩' },
  { id: 'signature', name: '川味藤椒烤鱼', desc: '鲜活鲈鱼现杀现烤,藤椒清麻,香辣过瘾。', price: 98, tag: '人气之选', emoji: '🐟' },
  { id: 'signature', name: '松茸炖走地鸡', desc: '时令松茸配散养鸡,文火慢炖三小时,汤清味厚。', price: 128, tag: '时令限定', emoji: '🍄' },
  { id: 'signature', name: '金汤酸菜鱼米线', desc: '老坛酸菜熬出金汤,滑鱼片配手工米线。', price: 42, tag: '招牌主食', emoji: '🍜' },
  { id: 'signature', name: '手作杨枝甘露', desc: '每日现切芒果,西柚果粒,椰浆打底。', price: 28, tag: '甜品人气', emoji: '🍮' },
  { id: 'signature', name: '清炒时蔬拼盘', desc: '应季绿叶菜与山珍同炒,橄榄油轻点。', price: 36, tag: '每日鲜采', emoji: '🥬' },

  { id: 'hot', name: '沸腾水煮鱼', desc: '汉源花椒与二荆条辣椒现炼红油,鱼片嫩滑。', price: 88, tag: '微辣', emoji: '🌶️' },
  { id: 'hot', name: '麻辣香锅', desc: '自选时蔬与肉料,猛火翻炒,锅气十足。', price: 68, tag: '人气', emoji: '🍲' },
  { id: 'hot', name: '糖醋里脊', desc: '外酥里嫩,酸甜适口,老小皆宜。', price: 58, tag: '', emoji: '🍖' },
  { id: 'hot', name: '干锅花菜', desc: '花菜过油后与五花肉同炒,焦香微辣。', price: 42, tag: '下饭', emoji: '🥦' },
  { id: 'hot', name: '虾仁滑蛋', desc: '河虾仁配土鸡蛋,滑嫩鲜甜。', price: 56, tag: '', emoji: '🍤' },
  { id: 'hot', name: '黑松露炒饭', desc: '隔夜米饭配黑松露酱,颗颗分明。', price: 48, tag: '新品', emoji: '🍚' },

  { id: 'cold', name: '江南口水鸡', desc: '三黄鸡白切,红油蒜泥浇汁,皮爽肉滑。', price: 46, tag: '经典', emoji: '🍗' },
  { id: 'cold', name: '桂花糖藕', desc: '糯米灌藕,桂花蜜浸渍,软糯清甜。', price: 26, tag: '', emoji: '🪷' },
  { id: 'cold', name: '老醋花生', desc: '山西老醋配花生米,酥脆开胃。', price: 18, tag: '下酒', emoji: '🥜' },
  { id: 'cold', name: '蒜蓉拍黄瓜', desc: '现拍黄瓜,蒜香十足,清爽解腻。', price: 16, tag: '', emoji: '🥒' },
  { id: 'cold', name: '话梅小番茄', desc: '去皮小番茄话梅腌制,酸甜开胃。', price: 22, tag: '人气', emoji: '🍅' },

  { id: 'staple', name: '手工小笼包', desc: '现包现蒸,皮薄汤足,配姜丝香醋。', price: 32, tag: '手工现做', emoji: '🥟' },
  { id: 'staple', name: '葱油拌面', desc: '上海本帮做派,葱油焦香,面条劲道。', price: 22, tag: '本帮', emoji: '🍝' },
  { id: 'staple', name: '海鲜炒河粉', desc: '大火快炒,镬气十足,鲜虾鱿鱼满口鲜。', price: 38, tag: '', emoji: '🍤' },
  { id: 'staple', name: '菌菇养生粥', desc: '五谷杂粮慢熬,配菌菇与时蔬丁。', price: 26, tag: '养生', emoji: '🥣' },
  { id: 'staple', name: '手工鸡蛋面', desc: '土鸡蛋和面,浇头可选番茄牛腩或雪菜肉丝。', price: 28, tag: '', emoji: '🍜' },

  { id: 'dessert', name: '桂花酒酿圆子', desc: '手搓小圆子,酒酿桂花同煮,暖胃微醺。', price: 20, tag: '', emoji: '🍡' },
  { id: 'dessert', name: '抹茶奶冻', desc: '宇治抹茶配鲜奶冻,微苦回甘。', price: 24, tag: '新品', emoji: '🍵' },
  { id: 'dessert', name: '时令鲜榨果汁', desc: '应季水果现点现榨,无添加。', price: 18, tag: '', emoji: '🧃' },
  { id: 'dessert', name: '手冲茶饮', desc: '明前龙井 / 凤凰单丛 / 茉莉花茶。', price: 30, tag: '精选', emoji: '🫖' }
]

const active = ref('signature')
const list = computed(() => dishes.filter((d) => d.id === active.value))
</script>

<template>
  <section id="menu" class="menu">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="section-eyebrow">特色菜单 · OUR MENU</p>
        <h2 class="section-title">四季流转,一味不少</h2>
        <p class="section-sub">菜单随节气更替,这里只展示当下最值得一试的部分。</p>
      </div>

      <div class="tabs" v-reveal="80" role="tablist" aria-label="菜单分类">
        <button
          v-for="c in categories"
          :key="c.id"
          role="tab"
          :aria-selected="active === c.id"
          :class="{ active: active === c.id }"
          @click="active = c.id"
        >
          {{ c.label }}
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <ul :key="active" class="dish-grid">
          <li v-for="(d, i) in list" :key="d.name" class="dish-card" v-reveal="i * 60">
            <div class="dish-art" :class="'tone-' + ((i % 4) + 1)">
              <span class="dish-emoji">{{ d.emoji }}</span>
              <span v-if="d.tag" class="dish-tag">{{ d.tag }}</span>
            </div>
            <div class="dish-body">
              <div class="dish-head">
                <h3>{{ d.name }}</h3>
                <span class="dish-price">¥{{ d.price }}</span>
              </div>
              <p class="dish-desc">{{ d.desc }}</p>
            </div>
          </li>
        </ul>
      </Transition>

      <div class="menu-foot" v-reveal="120">
        <p>* 完整菜单以到店当日为准,部分菜品随季节供应。</p>
        <a href="#reservation" class="btn btn-ghost-dark">预约尝鲜 →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu {
  padding: 110px 0;
  background: linear-gradient(180deg, var(--cream-2), #f7f1e6);
  position: relative;
}

.menu::before {
  content: 'MENU';
  position: absolute;
  top: 40px;
  right: 4%;
  font-family: var(--font-serif);
  font-size: clamp(80px, 14vw, 180px);
  font-weight: 900;
  color: rgba(43, 33, 24, 0.045);
  letter-spacing: 0.1em;
  pointer-events: none;
  user-select: none;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 44px;
}

.tabs button {
  padding: 11px 26px;
  border-radius: 999px;
  font-size: 15px;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
  background: transparent;
  border: 1.5px solid transparent;
  transition: all 0.3s ease;
}

.tabs button:hover {
  color: var(--accent-dark);
  border-color: var(--line);
  background: rgba(255, 255, 255, 0.6);
}

.tabs button.active {
  background: var(--green);
  color: #fff;
  box-shadow: 0 10px 22px rgba(31, 61, 43, 0.3);
}

.dish-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.dish-card {
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.dish-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

.dish-art {
  position: relative;
  height: 150px;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.tone-1 {
  background: linear-gradient(135deg, #fbe3c9, #f3c58f);
}
.tone-2 {
  background: linear-gradient(135deg, #dce8cf, #b9cf9d);
}
.tone-3 {
  background: linear-gradient(135deg, #f7d9d0, #eab8a5);
}
.tone-4 {
  background: linear-gradient(135deg, #dfe7f0, #b9cbe0);
}

.dish-art::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.55), transparent 55%);
}

.dish-emoji {
  font-size: 64px;
  filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.18));
  transform: translateY(2px);
  transition: transform 0.35s ease;
}

.dish-card:hover .dish-emoji {
  transform: translateY(-6px) scale(1.08);
}

.dish-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(43, 33, 24, 0.82);
  color: #fff;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 999px;
  letter-spacing: 0.08em;
  z-index: 1;
}

.dish-body {
  padding: 18px 20px 22px;
}

.dish-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.dish-head h3 {
  font-family: var(--font-serif);
  font-size: 17.5px;
  letter-spacing: 0.05em;
}

.dish-price {
  font-family: var(--font-serif);
  color: var(--accent-dark);
  font-size: 19px;
  font-weight: 700;
  white-space: nowrap;
}

.dish-desc {
  margin-top: 8px;
  font-size: 13.5px;
  color: var(--ink-soft);
  line-height: 1.8;
}

.menu-foot {
  margin-top: 46px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.menu-foot p {
  font-size: 13px;
  color: var(--ink-soft);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1000px) {
  .dish-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .dish-grid {
    grid-template-columns: 1fr;
  }
  .tabs button {
    padding: 9px 18px;
    font-size: 14px;
  }
}
</style>