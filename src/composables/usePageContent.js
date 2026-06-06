import { ref, onMounted } from 'vue';
import { getSiteSection, SITE_DEFAULTS } from '../services/siteContentService';

export function usePageContent(pageId) {
  const content = ref({});
  const loading = ref(true);

  const get = (sectionId, field, fallback = '') => {
    return content.value[sectionId]?.[field]
      ?? SITE_DEFAULTS[pageId]?.[sectionId]?.[field]
      ?? fallback;
  };

  onMounted(async () => {
    try {
      const pageSections = SITE_DEFAULTS[pageId] || {};
      const results = await Promise.allSettled(
        Object.keys(pageSections).map(async (sectionId) => [
          sectionId,
          await getSiteSection(pageId, sectionId),
        ])
      );
      const entries = results
        .filter((r) => r.status === 'fulfilled')
        .map((r) => r.value);
      content.value = Object.fromEntries(entries);
    } catch (error) {
      console.error(`Error loading site content for ${pageId}:`, error);
      content.value = { ...(SITE_DEFAULTS[pageId] || {}) };
    } finally {
      loading.value = false;
    }
  });

  return { content, loading, get };
}
