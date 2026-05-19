<template>
  <div class="space-y-2">
    <!-- Preview: image uploadée -->
    <div v-if="modelValue" class="relative rounded-xl overflow-hidden bg-gray-800 border border-gray-700" :style="{ height: previewHeight }">
      <img :src="modelValue" class="w-full h-full object-cover" />
      <div class="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Sauvegardée</div>
      <button
        type="button"
        @click="$emit('update:modelValue', '')"
        class="absolute top-2 right-2 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
        title="Supprimer"
      >
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Preview: image actuelle du site (fallback local) -->
    <div v-else-if="fallbackSrc" class="relative rounded-xl overflow-hidden border-2 border-dashed border-gray-600" :style="{ height: previewHeight }">
      <img :src="fallbackSrc" class="w-full h-full object-cover opacity-60" />
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
        <div class="bg-gray-700/90 text-gray-300 text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2">Image actuelle du site</div>
        <p class="text-gray-400 text-[10px]">Uploadez pour la remplacer</p>
      </div>
    </div>

    <!-- Aucune image -->
    <div
      v-else
      class="rounded-xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center bg-gray-900 text-gray-600"
      :style="{ height: previewHeight }"
    >
      <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
      <span class="text-xs">Aucune image</span>
    </div>

    <!-- Bouton upload -->
    <label class="flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs font-medium rounded-lg cursor-pointer transition-all border border-gray-700">
      <input type="file" accept="image/*" class="hidden" :disabled="compressing" @change="handleFile" />
      <span v-if="compressing" class="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
      <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
      </svg>
      {{ compressing ? 'Compression...' : (modelValue ? 'Remplacer' : 'Uploader une image') }}
    </label>

    <p v-if="sizeInfo" class="text-gray-500 text-xs">{{ sizeInfo }}</p>
    <p v-if="error" class="text-red-400 text-xs">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AdminImageField',
  props: {
    modelValue: { type: String, default: '' },
    fallbackSrc: { type: String, default: '' },
    storagePath: { type: String, default: '' },
    previewHeight: { type: String, default: '140px' },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const compressing = ref(false);
    const error = ref('');
    const sizeInfo = ref('');

    const compressToBase64 = (file, maxPx = 800, quality = 0.55) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (e) => {
          const img = new Image();
          img.onerror = reject;
          img.onload = () => {
            let { width, height } = img;
            if (width > maxPx || height > maxPx) {
              const ratio = Math.min(maxPx / width, maxPx / height);
              width = Math.round(width * ratio);
              height = Math.round(height * ratio);
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', quality));
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      });

    const handleFile = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      error.value = '';
      sizeInfo.value = '';
      compressing.value = true;
      try {
        const dataUrl = await compressToBase64(file);
        const kb = Math.round((dataUrl.length * 0.75) / 1024);
        sizeInfo.value = `Image compressée : ~${kb} Ko`;
        emit('update:modelValue', dataUrl);
      } catch (err) {
        error.value = "Erreur lors de la compression. Réessayez.";
        console.error(err);
      } finally {
        compressing.value = false;
        e.target.value = '';
      }
    };

    return { compressing, error, sizeInfo, handleFile };
  },
};
</script>
