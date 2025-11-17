<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Navigation />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
/* Les styles sont fournis par Tailwind via src/assets/index.css */
</style>
