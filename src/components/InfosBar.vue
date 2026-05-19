<template>
  <div class="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-40 shadow-sm">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
      <!-- Desktop / Tablet: regular grid -->
      <div class="hidden sm:grid grid-cols-3 gap-4 md:gap-8 text-[12px] sm:text-sm leading-snug text-gray-700 items-center justify-center">
        <div class="py-2 text-center">
          <span class="font-bold text-gray-900">{{ bar.item1Label }}</span>
          <span class="text-yellow-500 font-bold ml-1">{{ bar.item1Value }}</span>
        </div>
        <div class="py-2 text-center">
          <span class="font-bold text-gray-900">{{ bar.item2Label }}</span>
          <span class="text-yellow-500 font-bold ml-1">{{ bar.item2Value }}</span>
        </div>
        <div class="py-2 text-center">
          <span class="font-bold text-gray-900">{{ bar.item3Label }}</span>
          <span class="text-yellow-500 font-bold ml-1">{{ bar.item3Value }}</span>
        </div>
      </div>

      <!-- Mobile: marquee (défilement droite->gauche) -->
      <div class="sm:hidden">
        <div class="marquee-wrapper overflow-hidden">
          <div class="marquee-track text-gray-700 font-bold">
            <span class="marquee-item">{{ bar.item1Label }} <span class="text-yellow-500">{{ bar.item1Value }}</span> &nbsp; • &nbsp; </span>
            <span class="marquee-item">{{ bar.item2Label }} <span class="text-yellow-500">{{ bar.item2Value }}</span> &nbsp; • &nbsp; </span>
            <span class="marquee-item">{{ bar.item3Label }} <span class="text-yellow-500">{{ bar.item3Value }}</span></span>
            <!-- répéter pour boucle fluide -->
            <span class="marquee-item">&nbsp;&nbsp;{{ bar.item1Label }} <span class="text-yellow-500">{{ bar.item1Value }}</span> &nbsp; • &nbsp; </span>
            <span class="marquee-item">{{ bar.item2Label }} <span class="text-yellow-500">{{ bar.item2Value }}</span> &nbsp; • &nbsp; </span>
            <span class="marquee-item">{{ bar.item3Label }} <span class="text-yellow-500">{{ bar.item3Value }}</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { usePageContent } from '@/composables/usePageContent'

export default {
  name: 'InfosBar',
  setup() {
    const { get } = usePageContent('global')

    const bar = computed(() => ({
      item1Label: get('infobar', 'item1Label', 'ANNÉE'),
      item1Value: get('infobar', 'item1Value', '2025-2026'),
      item2Label: get('infobar', 'item2Label', 'CAP & BT'),
      item2Value: get('infobar', 'item2Value', '15 SEPTEMBRE 2025'),
      item3Label: get('infobar', 'item3Label', 'MODULAIRE'),
      item3Value: get('infobar', 'item3Value', '13 AVRIL 2026'),
    }))

    return { bar }
  },
}
</script>

<style scoped>
.marquee-wrapper {
  width: 100%;
}
.marquee-track {
  display: inline-block;
  white-space: nowrap;
  will-change: transform;
  animation: marquee-scroll 50s linear infinite;
  font-weight: 600;
  font-size: 13px;
}
.marquee-item {
  display: inline-block;
  padding-right: 1.25rem;
}

@keyframes marquee-scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
