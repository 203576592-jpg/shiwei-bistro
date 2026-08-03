<script setup>
const quickLinks = [
  { label: '关于我们', href: '#about' },
  { label: '特色菜单', href: '#menu' },
  { label: '餐厅环境', href: '#gallery' },
  { label: '顾客评价', href: '#testimonials' },
  { label: '在线订位', href: '#reservation' }
]

const business = [
  { label: '商务宴请', note: '包间 4–20 人,提供定制菜单' },
  { label: '生日聚会', note: '免费布置与定制甜品台' },
  { label: '企业团餐', note: '每日鲜配,专人配送' }
]
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#home" class="brand">
            <svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="32" r="30" fill="currentColor" />
              <path d="M20 20h24v4H20z" fill="currentColor" opacity=".9" />
              <path d="M22 28h20v6a10 10 0 0 1-20 0z" fill="#e07a3f" />
              <path d="M24 40c2 3 5 4 8 4s6-1 8-4" stroke="#14291c" stroke-width="2.2" fill="none" stroke-linecap="round" />
            </svg>
            <span class="brand-text">
              <strong>拾味小馆</strong>
              <small>SHIWEI BISTRO</small>
            </span>
          </a>
          <p>
            一间十年如一的小馆,坚持时令食材与匠心火候。
            用一桌有温度的饭,招待每一位认真生活的你。
          </p>
          <div class="socials">
            <a href="#" aria-label="微信公众号">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8.5 4C4.9 4 2 6.4 2 9.4c0 1.7 1 3.2 2.6 4.2l-.6 2 2.2-1.1c.7.2 1.5.3 2.3.3h.4a5.6 5.6 0 0 1-.3-1.8c0-3 3-5.4 6.6-5.4h.3C14.4 5.7 11.7 4 8.5 4zM6.3 8.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm4.4 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"/><path d="M22 13.8c0-2.5-2.5-4.5-5.5-4.5s-5.5 2-5.5 4.5 2.5 4.5 5.5 4.5c.6 0 1.2-.1 1.8-.2l1.7.9-.4-1.6c1.4-.8 2.4-2 2.4-3.6zm-7.3-.7a.7.7 0 1 1 0-1.3.7.7 0 0 1 0 1.3zm3.6 0a.7.7 0 1 1 0-1.3.7.7 0 0 1 0 1.3z"/></svg>
            </a>
            <a href="#" aria-label="小红书">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>
            </a>
            <a href="#" aria-label="微博">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 5.3c-.3-.1-.3-.5 0-.6 1-.5 2.1-.6 3.2-.3 1 .3 1.8 1 2.3 1.9.2.4-.2.8-.6.5-.8-.6-1.8-1-2.8-.9-.8.1-1.6.4-2.1.9-.1.1-.2 0-.2-.1-.1-.4-.1-.8.2-1.4zM19 9.6c-.2.1-.5-.1-.4-.3.6-1.7.3-3.6-1-4.9-.2-.2-.1-.6.3-.6 1.2 0 2.3.6 3 1.5 1.3 1.7 1.4 4.1.2 5.9-.1.2-.5.2-.6 0-.3-.5-.9-.9-1.5-1.6z"/><path d="M12 4.5c-4.4 0-8 3.2-8 7.1 0 1.3.4 2.5 1.1 3.6-.2.9-1.3 2.6-1.3 2.6s1.8.1 2.7-.6c1 .5 2.2.8 3.5.8 4.4 0 8-3.2 8-7.1s-3.6-7.1-8-7.1z"/></svg>
            </a>
          </div>
        </div>

        <nav class="footer-col">
          <h3>快速导航</h3>
          <a v-for="l in quickLinks" :key="l.href" :href="l.href">{{ l.label }}</a>
        </nav>

        <div class="footer-col">
          <h3>宴请服务</h3>
          <div v-for="b in business" :key="b.label" class="biz-item">
            <strong>{{ b.label }}</strong>
            <span>{{ b.note }}</span>
          </div>
        </div>

        <div class="footer-col">
          <h3>联系我们</h3>
          <p>📍 上海市徐汇区衡山路 88 号</p>
          <p>📞 021-6666 8888</p>
          <p>✉️ hi@shiwei.example</p>
          <p>🕐 11:00–14:00 · 17:00–22:00</p>
          <p class="closed-day">周一闭店休整</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 拾味小馆 ShiWei Bistro · 本页面为演示项目,菜品与信息均为虚构</p>
        <p>沪ICP备00000000号-0</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--green-dark);
  color: rgba(245, 239, 230, 0.85);
  padding: 80px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1fr 1fr;
  gap: 44px;
  padding-bottom: 56px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
}

.brand-mark {
  width: 46px;
  height: 46px;
  color: var(--accent);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-text strong {
  font-family: var(--font-serif);
  font-size: 22px;
  letter-spacing: 0.12em;
}

.brand-text small {
  font-size: 10px;
  letter-spacing: 0.32em;
  opacity: 0.7;
}

.footer-brand p {
  margin-top: 18px;
  font-size: 14px;
  line-height: 2;
  color: rgba(245, 239, 230, 0.65);
  max-width: 340px;
}

.socials {
  display: flex;
  gap: 12px;
  margin-top: 22px;
}

.socials a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid rgba(245, 239, 230, 0.25);
  transition: all 0.3s ease;
}

.socials a:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-3px);
}

.footer-col h3 {
  font-family: var(--font-serif);
  font-size: 17px;
  color: #fff;
  letter-spacing: 0.12em;
  margin-bottom: 20px;
}

.footer-col a {
  display: block;
  font-size: 14px;
  padding: 5px 0;
  color: rgba(245, 239, 230, 0.7);
  transition: color 0.25s ease, transform 0.25s ease;
}

.footer-col a:hover {
  color: var(--gold);
  transform: translateX(4px);
}

.biz-item {
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
}

.biz-item strong {
  font-size: 14.5px;
  color: rgba(245, 239, 230, 0.9);
}

.biz-item span {
  font-size: 12.5px;
  color: rgba(245, 239, 230, 0.55);
}

.footer-col p {
  font-size: 14px;
  line-height: 2.1;
  color: rgba(245, 239, 230, 0.7);
}

.closed-day {
  color: var(--gold);
}

.footer-bottom {
  border-top: 1px solid rgba(245, 239, 230, 0.14);
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12.5px;
  color: rgba(245, 239, 230, 0.45);
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>