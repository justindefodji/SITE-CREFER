<template>
  <div class="space-y-2">

    <!-- Preview: YouTube thumbnail -->
    <div v-if="isYoutube" class="relative rounded-xl overflow-hidden bg-gray-800 border border-gray-700" :style="{ height: previewHeight }">
      <img :src="youtubeThumbnail" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center bg-black/30">
        <div class="w-14 h-14 bg-red-600/90 rounded-full flex items-center justify-center shadow-xl">
          <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div class="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">YouTube</div>
      <button type="button" @click="clearVideo" class="absolute top-2 right-2 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg" title="Supprimer">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Preview: vidéo locale (base64 ou URL directe) -->
    <div v-else-if="modelValue" class="relative rounded-xl overflow-hidden bg-black border border-gray-700" :style="{ height: previewHeight }">
      <video :src="modelValue" class="w-full h-full object-contain" preload="metadata" muted controls></video>
      <div class="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none">Sauvegardée</div>
      <button type="button" @click="clearVideo" class="absolute top-2 right-2 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg" title="Supprimer">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Aucune vidéo -->
    <div v-else class="rounded-xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center bg-gray-900 text-gray-600" :style="{ height: previewHeight }">
      <svg class="w-9 h-9 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
      <span class="text-xs">Aucune vidéo</span>
    </div>

    <!-- Champ URL YouTube / URL directe -->
    <div class="flex gap-2">
      <input
        v-model="urlInput"
        @keydown.enter.prevent="applyUrl"
        class="flex-1 bg-gray-950 text-white px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-xs placeholder-gray-600"
        placeholder="https://www.youtube.com/watch?v=..."
      />
      <button
        type="button"
        @click="applyUrl"
        :disabled="!urlInput.trim()"
        class="px-3 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white text-xs font-semibold rounded-lg transition-colors"
      >
        OK
      </button>
    </div>

    <!-- Zone glisser-déposer / bouton upload -->
    <div
      class="relative border-2 border-dashed rounded-xl transition-all"
      :class="isDragging ? 'border-yellow-400 bg-yellow-400/5' : 'border-gray-700 bg-gray-900/50'"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
    >
      <label class="flex flex-col items-center justify-center gap-1.5 px-4 py-4 cursor-pointer select-none">
        <input type="file" accept="video/mp4,video/webm,video/ogg" class="hidden" :disabled="uploading" @change="handleFile" />
        <span v-if="uploading" class="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></span>
        <svg v-else class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
        </svg>
        <span class="text-xs font-semibold text-gray-400">{{ uploading ? 'Import en cours…' : 'Glisser-déposer ou cliquer pour importer' }}</span>
        <span class="text-[10px] text-gray-600">MP4, WebM — max 500 Ko (Firestore). Sinon, utilisez un lien YouTube.</span>
      </label>
    </div>

    <p v-if="sizeInfo" class="text-gray-500 text-xs">{{ sizeInfo }}</p>
    <p v-if="error" class="text-red-400 text-xs">{{ error }}</p>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  name: 'AdminVideoField',
  props: {
    modelValue: { type: String, default: '' },
    previewHeight: { type: String, default: '200px' },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const uploading = ref(false);
    const error = ref('');
    const sizeInfo = ref('');
    const isDragging = ref(false);

    const urlInput = ref(props.modelValue.startsWith('data:') ? '' : props.modelValue);
    watch(() => props.modelValue, (val) => {
      if (!val.startsWith('data:')) urlInput.value = val;
    });

    const isYoutube = computed(() => {
      const url = props.modelValue;
      return Boolean(url && (url.includes('youtube.com') || url.includes('youtu.be')));
    });

    const youtubeVideoId = computed(() => {
      const url = props.modelValue;
      const short = url.match(/youtu\.be\/([^?&]+)/);
      if (short) return short[1];
      const long = url.match(/[?&]v=([^&]+)/);
      if (long) return long[1];
      return '';
    });

    const youtubeThumbnail = computed(() =>
      youtubeVideoId.value ? `https://img.youtube.com/vi/${youtubeVideoId.value}/mqdefault.jpg` : ''
    );

    const applyUrl = () => {
      const val = urlInput.value.trim();
      error.value = '';
      sizeInfo.value = '';
      emit('update:modelValue', val);
    };

    const clearVideo = () => {
      urlInput.value = '';
      error.value = '';
      sizeInfo.value = '';
      emit('update:modelValue', '');
    };

    const processFile = async (file) => {
      if (!file) return;
      error.value = '';
      sizeInfo.value = '';

      const maxBytes = 500 * 1024;
      if (file.size > maxBytes) {
        error.value = `Vidéo trop grande (${Math.round(file.size / 1024)} Ko). Maximum : 500 Ko. Utilisez un lien YouTube à la place.`;
        return;
      }

      uploading.value = true;
      try {
        const dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = reject;
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(file);
        });
        sizeInfo.value = `Vidéo importée : ${Math.round(file.size / 1024)} Ko`;
        urlInput.value = '';
        emit('update:modelValue', dataUrl);
      } catch (err) {
        error.value = "Erreur lors de l'import. Réessayez.";
        console.error(err);
      } finally {
        uploading.value = false;
      }
    };

    const handleFile = async (e) => {
      await processFile(e.target.files?.[0]);
      e.target.value = '';
    };

    const handleDrop = async (e) => {
      isDragging.value = false;
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith('video/')) await processFile(file);
    };

    return {
      uploading, error, sizeInfo, isDragging,
      urlInput, isYoutube, youtubeThumbnail,
      applyUrl, clearVideo, handleFile, handleDrop,
    };
  },
};
</script>
