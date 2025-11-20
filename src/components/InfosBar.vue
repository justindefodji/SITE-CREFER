<template>
  <div class="bg-white border-b-0 fixed top-0 left-0 right-0 z-40">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1 sm:py-2">
      <!-- Desktop / Tablet: regular grid -->
      <div class="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 text-[12px] sm:text-sm leading-snug text-gray-700 items-center">
        <div class="py-1 text-center md:text-left flex items-center justify-center md:justify-start">
          <span class="font-semibold mr-2">ACADEMIQUE</span>
          <span class="text-orange-500">2025-2026</span>
        </div>

        <div class="py-1 text-center md:text-left flex items-center justify-center md:justify-start">
          <span class="font-semibold mr-2">RENTRÉE ACADEMIQUE</span>
          <span class="text-orange-500">2025-2026</span>
        </div>

        <div class="py-1 text-center md:text-left flex items-center justify-center md:justify-start">
          <span class="font-semibold mr-2">CAP &amp; BT :</span>
          <span class="text-orange-500">15 SEPTEMBRE 2025</span>
        </div>

        <div class="py-1 text-center md:text-right flex items-center justify-center md:justify-end">
          <span class="font-semibold mr-2">MODULAIRE :</span>
          <span class="text-orange-500">13 OCTOBRE</span>
        </div>
      </div>

      <!-- Mobile: marquee (défilement droite->gauche) -->
      <div class="sm:hidden">
        <div class="marquee-wrapper overflow-hidden">
          <div class="marquee-track">
            <span class="marquee-item">ACADEMIQUE <strong class="text-orange-500">2025-2026</strong> • </span>
            <span class="marquee-item">RENTRÉE ACADEMIQUE <strong class="text-orange-500">2025-2026</strong> • </span>
            <span class="marquee-item">CAP &amp; BT : <strong class="text-orange-500">15 SEPTEMBRE 2025</strong> • </span>
            <span class="marquee-item">MODULAIRE : <strong class="text-orange-500">13 OCTOBRE</strong></span>

            <!-- répéter pour boucle fluide -->
            <span class="marquee-item">&nbsp;&nbsp;ACADEMIQUE <strong class="text-orange-500">2025-2026</strong> • </span>
            <span class="marquee-item">RENTRÉE ACADEMIQUE <strong class="text-orange-500">2025-2026</strong> • </span>
            <span class="marquee-item">CAP &amp; BT : <strong class="text-orange-500">15 SEPTEMBRE 2025</strong> • </span>
            <span class="marquee-item">MODULAIRE : <strong class="text-orange-500">13 OCTOBRE</strong></span>
            
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
