export function useOpenGraphArticle() {
  const setArticleOpenGraph = (article) => {
    // Supprimer les anciennes métadonnées Open Graph
    removeOpenGraphMeta()

    // Créer les métadonnées Open Graph
    const metaTags = [
      { property: 'og:title', content: article.title },
      { property: 'og:description', content: article.ogDescription || article.description },
      { property: 'og:image', content: article.ogImage || article.mainImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'CREFER' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: article.title },
      { name: 'twitter:description', content: article.ogDescription || article.description },
      { name: 'twitter:image', content: article.ogImage || article.mainImage },
      { name: 'description', content: article.ogDescription || article.description },
      { property: 'article:published_time', content: new Date().toISOString() },
      { property: 'article:author', content: 'CREFER' },
      { property: 'article:section', content: article.category },
    ]

    // Ajouter les métadonnées au head
    metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      if (tag.property) {
        meta.setAttribute('property', tag.property)
      } else {
        meta.setAttribute('name', tag.name)
      }
      meta.setAttribute('content', tag.content)
      document.head.appendChild(meta)
    })

    // Ajouter le lien canonique
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = window.location.href
  }

  const removeOpenGraphMeta = () => {
    const metaSelectors = [
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:image"]',
      'meta[property="og:image:width"]',
      'meta[property="og:image:height"]',
      'meta[property="og:type"]',
      'meta[property="og:url"]',
      'meta[property="og:site_name"]',
      'meta[name="twitter:card"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]',
      'meta[property="article:published_time"]',
      'meta[property="article:author"]',
      'meta[property="article:section"]',
    ]

    metaSelectors.forEach(selector => {
      const element = document.querySelector(selector)
      if (element) {
        element.remove()
      }
    })
  }

  return {
    setArticleOpenGraph,
    removeOpenGraphMeta
  }
}
