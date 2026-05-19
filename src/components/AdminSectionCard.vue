<template>
  <div class="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <h2 class="text-white font-bold text-sm">{{ title }}</h2>
      <button
        type="button"
        @click="$emit('save')"
        :disabled="saving"
        class="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-800 text-gray-900 disabled:text-gray-600 font-bold text-xs rounded-lg transition-all"
      >
        <span v-if="saving" class="w-3 h-3 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
        <svg v-else class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
        {{ saved ? 'Sauvegardé ✓' : 'Sauvegarder' }}
      </button>
    </div>
    <div class="p-6">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminSectionCard',
  props: {
    title: String,
    icon: String,
    color: { type: String, default: 'yellow' },
    saving: Boolean,
    saved: Boolean,
  },
  emits: ['save'],
};
</script>
