/**
 * Configuration Google Analytics 4
 * Intégration du suivi Google Analytics pour mesurer les performances du site
 */

export function initializeGoogleAnalytics() {
  // Google Analytics 4 Measurement ID (à remplacer par votre ID)
  const MEASUREMENT_ID = 'G-XXXXXXXXXXXXX' // À configurer avec votre ID GA4

  // Charger le script Google Analytics
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialiser dataLayer
  window.dataLayer = window.dataLayer || []
  
  function gtag() {
    window.dataLayer.push(arguments)
  }
  
  window.gtag = gtag
  
  // Configuration Google Analytics
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID, {
    'page_path': window.location.pathname,
    'page_title': document.title,
    'anonymize_ip': true, // Anonymiser les IPs pour respecter la confidentialité
    'cookie_flags': 'SameSite=None;Secure' // Sécurité cookies
  })
}

/**
 * Événement pour le suivi des conversions d'admission
 * Appeler cette fonction quand un utilisateur soumet un formulaire d'admission
 */
export function trackAdmissionEvent() {
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      value: 1.0,
      currency: 'USD',
      event_category: 'admission',
      event_label: 'admission_form_submission'
    })
  }
}

/**
 * Événement pour le suivi des contacts
 * Appeler cette fonction quand un utilisateur soumet un formulaire de contact
 */
export function trackContactEvent() {
  if (window.gtag) {
    window.gtag('event', 'contact', {
      event_category: 'engagement',
      event_label: 'contact_form_submission'
    })
  }
}

/**
 * Événement pour le suivi des clics sur les boutons d'appels à l'action
 */
export function trackCTAClick(label) {
  if (window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'cta',
      event_label: label
    })
  }
}

/**
 * Événement pour le suivi des vues de pages spécifiques
 */
export function trackPageView(pageName) {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_path: window.location.pathname
    })
  }
}

/**
 * Événement pour le suivi des clics sur les vidéos YouTube
 */
export function trackVideoClick(videoTitle) {
  if (window.gtag) {
    window.gtag('event', 'video_play', {
      event_category: 'video',
      event_label: videoTitle
    })
  }
}

/**
 * Événement pour le suivi des downloads (PDF, brochures, etc.)
 */
export function trackDownload(fileName) {
  if (window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'downloads',
      event_label: fileName
    })
  }
}

/**
 * Événement pour le suivi des clics externes (vers les réseaux sociaux, etc.)
 */
export function trackExternalLink(linkName, linkUrl) {
  if (window.gtag) {
    window.gtag('event', 'click_outbound', {
      event_category: 'external_links',
      event_label: linkName,
      link_url: linkUrl
    })
  }
}
