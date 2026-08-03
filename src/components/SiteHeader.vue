<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: '首页', href: '#home' },
  { label: '关于我们', href: '#about' },
  { label: '特色菜单', href: '#menu' },
  { label: '餐厅环境', href: '#gallery' },
  { label: '顾客评价', href: '#testimonials' }
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-header" :class="{ scrolled, open: menuOpen }">
    <div class="container header-inner">
      <a href="#home" class="brand" @click="closeMenu">
        <svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="currentColor" />
          <path d="M20 20h24v4H20z" fill="currentColor" opacity=".9" />
          <path d="M22 28h20v6a10 10 0 0 1-20 0z" fill="#e07a3f" />
          <path d="M24 40c2 3 5 4 8 4s6-1 8-4" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round" />
        </svg>
        <span class="brand-text">
          <strong>拾味小馆</strong>
          <small>SHIWEI BISTRO</small>
        </span>
      </a>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">
          {{ link.label }}
        </a>
        <a href="#reservation" class="btn btn-primary nav-cta" @click="closeMenu">在线订位</a>
      </nav>

      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-label="切换导航菜单"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
  padding: 22px 0;
  color: #fff;
}

.site-header.scrolled {
  background: rgba(20, 41, 28, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  padding: 12px 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  color: var(--green-dark);
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-text strong {
  font-family: var(--font-serif);
  font-size: 21px;
  letter-spacing: 0.12em;
}

.brand-text small {
  font-size: 10px;
  letter-spacing: 0.32em;
  opacity: 0.75;
  font-weight: 500;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-links a:not(.nav-cta) {
  font-size: 15px;
  letter-spacing: 0.08em;
  position: relative;
  padding: 6px 0;
  transition: opacity 0.25s ease;
}

.nav-links a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--gold);
  transition: width 0.3s ease;
}

.nav-links a:not(.nav-cta):hover {
  opacity: 0.85;
}

.nav-links a:not(.nav-cta):hover::after {
  width: 100%;
}

.nav-cta {
  padding: 11px 24px;
  font-size: 14px;
}

.menu-toggle {
    display: none;
    position: relative;
    z-index: 5;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: currentColor;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.site-header.open .menu-toggle span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.site-header.open .menu-toggle span:nth-child(2) {
  opacity: 0;
}
.site-header.open .menu-toggle span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(78vw, 320px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 26px;
    padding: 0 40px;
    background: var(--green-dark);
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: var(--shadow-lg);
  }

  .nav-links.open {
      transform: translateX(0);
      z-index: 4;
    }

  .nav-links a:not(.nav-cta) {
    font-size: 19px;
    font-family: var(--font-serif);
  }

  .nav-cta {
    margin-top: 12px;
  }
}
</style>