import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// v-reveal: 滚动进入视口时执行入场动画
app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = binding.value + 'ms'
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
  }
})

app.mount('#app')