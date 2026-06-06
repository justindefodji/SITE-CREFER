<template>
  <!-- Composant invisible pour précharger les images critiques -->
  <div style="display: none;" />
</template>

<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ImagePreloader',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = useRoute()

    onMounted(() => {
      // Ne précharger que si des images sont explicitement passées en props
      if (!props.images.length) return
      props.images.forEach(src => {
        const img = new Image()
        img.src = src
      })
    })
  }
}
</script>
