<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'
import GallerySection from './components/GallerySection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ReservationSection from './components/ReservationSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <GallerySection />
    <TestimonialsSection />
    <ReservationSection />
  </main>
  <SiteFooter />
  <BackToTop />
</template>