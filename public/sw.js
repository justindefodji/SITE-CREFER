// Service Worker pour mettre en cache les images
const CACHE_NAME = 'crefer-images-v1'
const IMAGE_ASSETS = [
  'assets/images/soutenance-1200.jpg',
  'assets/images/image1article2.jpg',
  'assets/images/articlesolaire1.jpg',
  'assets/images/install1article.jpg',
  'assets/images/exam1article.jpg',
  'assets/images/imageback.jpg'
]

// Installation et mise en cache des images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(IMAGE_ASSETS)
    })
  )
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
