<template>
  <div class="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-40 shadow-sm">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
      <!-- Desktop / Tablet: regular grid -->
      <div class="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 text-[12px] sm:text-sm leading-snug text-gray-700 items-center">
        <div class="py-2 text-center md:text-left">
          <span class="font-bold text-gray-900">ANNÉE</span>
          <span class="text-yellow-500 font-bold ml-1">2025-2026</span>
        </div>

        <div class="py-2 text-center md:text-left">
          <span class="font-bold text-gray-900">RENTRÉE</span>
          <span class="text-yellow-500 font-bold ml-1">2025-2026</span>
        </div>

        <div class="py-2 text-center md:text-left">
          <span class="font-bold text-gray-900">CAP & BT:</span>
          <span class="text-yellow-500 font-bold ml-1">15 SEP</span>
        </div>

        <div class="py-2 text-center md:text-right">
          <span class="font-bold text-gray-900">MODULAIRE:</span>
          <span class="text-yellow-500 font-bold ml-1">13 OCT</span>
        </div>
      </div>

      <!-- Mobile: marquee (défilement droite->gauche) -->
      <div class="sm:hidden">
        <div class="marquee-wrapper overflow-hidden">
          <div class="marquee-track text-gray-700 font-bold">
            <span class="marquee-item">ANNÉE <span class="text-yellow-500">2025-2026</span> • </span>
            <span class="marquee-item">RENTRÉE <span class="text-yellow-500">2025-2026</span> • </span>
            <span class="marquee-item">CAP & BT: <span class="text-yellow-500">15 SEP 2025</span> • </span>
            <span class="marquee-item">MODULAIRE: <span class="text-yellow-500">13 OCT</span></span>

            <!-- répéter pour boucle fluide -->
            <span class="marquee-item">&nbsp;&nbsp;ANNÉE <span class="text-yellow-500">2025-2026</span> • </span>
            <span class="marquee-item">RENTRÉE <span class="text-yellow-500">2025-2026</span> • </span>
            <span class="marquee-item">CAP & BT: <span class="text-yellow-500">15 SEP 2025</span> • </span>
            <span class="marquee-item">MODULAIRE: <span class="text-yellow-500">13 OCT</span></span>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfosBar'
}
</script>

<style scoped>
/* Mobile marquee animation: translate from right to left */
.marquee-wrapper {
  width: 100%;
}
.marquee-track {
  display: inline-block;
  white-space: nowrap;
  will-change: transform;
  /* durée allongée pour ralentir le défilement (boucle continue) */
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

/* Reduce animation speed if user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
