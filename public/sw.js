// Service Worker pour mettre en cache les images
const CACHE_NAME = 'crefer-images-v2'

// Installation sans pré-cache (les noms de fichiers Vite contiennent des hashes)
self.addEventListener('install', (event) => {
  self.skipWaiting()
})

// Stratégie de cache-first pour les images
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request).then((response) => {
            // Mettre en cache les nouvelles images
            if (response.ok) {
              cache.put(event.request, response.clone())
            }
            return response
          })
        })
      })
    )
  }
})
