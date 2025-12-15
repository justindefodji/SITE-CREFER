<template>
  <picture class="block">
    <!-- Support WebP pour les navigateurs modernes -->
    <source :srcset="webpPath" type="image/webp" />
    <!-- Fallback JPG -->
    <img
      :src="jpgPath"
      :alt="alt"
      :class="imageClass"
      loading="lazy"
      decoding="async"
      @load="onLoad"
      @error="onError"
      :style="lazyStyle"
    />
  </picture>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'LazyImage',
  props: {
    webpPath: {
      type: String,
      required: true
    },
    jpgPath: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Image'
    },
    imageClass: {
      type: String,
      default: 'w-full h-full object-cover'
    }
  },
  setup(props, { emit }) {
    const isLoaded = ref(false)

    const lazyStyle = computed(() => ({
      opacity: isLoaded.value ? 1 : 0.7,
      transition: 'opacity 0.3s ease-in-out'
    }))

    const onLoad = () => {
      isLoaded.value = true
      emit('load')
    }

    const onError = () => {
      emit('error')
    }

    return {
      isLoaded,
      lazyStyle,
      onLoad,
      onError
    }
  }
}
</script>
