/**
 * Composable pour gérer les métadonnées SEO
 * Permet de configurer les balises meta, title et canonical URL pour chaque page
 */

export function useSEO() {
  /**
   * Définit les métadonnées SEO pour une page
   * @param {Object} config - Configuration SEO
   * @param {string} config.title - Titre de la page (affiché dans l'onglet navigateur)
   * @param {string} config.description - Description meta (max 160 caractères)
   * @param {string} config.keywords - Mots-clés SEO (optionnel)
   * @param {string} config.canonical - URL canonique (optionnel)
   * @param {Object} config.openGraph - Configuration Open Graph (optionnel)
   */
  const setSEO = (config) => {
    const {
      title = 'CREFER',
      description = 'Centre de Ressources pour la Formation et l\'Excellence Professionnelle',
      keywords = 'CREFER, formation, électrotechnique',
      canonical = window.location.href,
      openGraph = {}
    } = config

    // Mettre à jour le titre
    document.title = title

    // Mettre à jour ou créer la meta description
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'keywords', keywords)

    // Mettre à jour ou créer la balise canonical
    setCanonical(canonical)

    // Mettre à jour les Open Graph si fournis
    if (Object.keys(openGraph).length > 0) {
      setOpenGraphTags({
        title,
        description,
        ...openGraph
      })
    }
  }

  /**
   * Définit ou met à jour une balise meta
   */
  const setMetaTag = (attrName, attrValue, content) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attrName, attrValue)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  }

  /**
   * Définit ou met à jour la balise canonical
   */
  const setCanonical = (url) => {
    let element = document.querySelector('link[rel="canonical"]')
    
    if (!element) {
      element = document.createElement('link')
      element.setAttribute('rel', 'canonical')
      document.head.appendChild(element)
    }
    
    element.setAttribute('href', url)
  }

  /**
   * Définit les balises Open Graph
   */
  const setOpenGraphTags = (config) => {
    const {
      title = 'CREFER',
      description = '',
      image = 'https://crefer.tech/src/assets/images/logo2CREFER.png',
      url = window.location.href,
      type = 'website'
    } = config

    setMetaTag('property', 'og:type', type)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:locale', 'fr_FR')
    
    if (image) {
      setMetaTag('property', 'og:image', image)
      setMetaTag('property', 'og:image:alt', title)
    }

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    if (image) {
      setMetaTag('name', 'twitter:image', image)
    }
  }

  /**
   * Ajoute les données structurées JSON-LD
   */
  const setStructuredData = (data) => {
    let script = document.querySelector('script[type="application/ld+json"]')
    
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    
    script.textContent = JSON.stringify(data)
  }

  return {
    setSEO,
    setOpenGraphTags,
    setMetaTag,
    setCanonical,
    setStructuredData
  }
}
