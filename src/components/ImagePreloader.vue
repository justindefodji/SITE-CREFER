<template>
  <!-- Composant invisible pour précharger les images critiques -->
  <div style="display: none;">
    <link 
      v-for="image in criticalImages" 
      :key="image"
      rel="preload"
      as="image"
      :href="image"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'ImagePreloader',
  props: {
    images: {
      type: Array,
      default: () => [
        // Supprimer les images de galerie (chargées depuis Firestore en base64)
        // 'assets/images/soutenance-1200.jpg',
        // 'assets/images/image1article2.jpg',
        // 'assets/images/imageback.jpg',
        
        // Images d'articles — à ajouter dans src/assets/images/
        // 'assets/images/articlesolaire1.jpg',
        // 'assets/images/install1article.jpg',
        // 'assets/images/exam1article.jpg'
      ]
    }
  },
  setup(props) {
    const criticalImages = ref(props.images)

    onMounted(() => {
      // Précharger les images critiques
      props.images.forEach(src => {
        const img = new Image()
        img.src = src
      })
    })

    return {
      criticalImages
    }
  }
}
</script>
