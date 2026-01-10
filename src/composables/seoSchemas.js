/**
 * Données structurées JSON-LD pour le SEO
 * Utilisé par Google et autres moteurs de recherche pour mieux comprendre le contenu
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'CREFER',
  description: 'Centre de Ressources pour la Formation et l\'Excellence Professionnelle',
  url: 'https://crefer.tech',
  logo: 'https://crefer.tech/src/assets/images/logo2CREFER.png',
  email: 'contact@crefer.tech',
  sameAs: [
    'https://www.facebook.com/crefer',
    'https://www.instagram.com/crefer'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Votre adresse]',
    addressLocality: '[Ville]',
    postalCode: '[Code postal]',
    addressCountry: 'FR'
  },
  image: 'https://crefer.tech/src/assets/images/logo2CREFER.png',
  memberOf: {
    '@type': 'Organization',
    name: 'Ministère de l\'Éducation'
  }
}

export const breadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://crefer.tech${crumb.url}`
    }))
  }
}

export const articleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: article.image || 'https://crefer.tech/src/assets/images/logo2CREFER.png',
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'CREFER'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CREFER',
      logo: {
        '@type': 'ImageObject',
        url: 'https://crefer.tech/src/assets/images/logo2CREFER.png'
      }
    }
  }
}

export const courseSchema = (course) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    image: course.image || 'https://crefer.tech/src/assets/images/logo2CREFER.png',
    instructor: {
      '@type': 'Organization',
      name: 'CREFER'
    },
    provider: {
      '@type': 'Organization',
      name: 'CREFER',
      url: 'https://crefer.tech'
    },
    aggregateRating: course.rating ? {
      '@type': 'AggregateRating',
      ratingValue: course.rating.value,
      ratingCount: course.rating.count
    } : undefined
  }
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CREFER',
  description: 'Centre de Ressources pour la Formation et l\'Excellence Professionnelle',
  url: 'https://crefer.tech',
  telephone: '[Votre téléphone]',
  email: 'contact@crefer.tech',
  image: 'https://crefer.tech/src/assets/images/logo2CREFER.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Votre adresse]',
    addressLocality: '[Ville]',
    postalCode: '[Code postal]',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '[Latitude]',
    longitude: '[Longitude]'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00'
    }
  ],
  sameAs: [
    'https://www.facebook.com/crefer',
    'https://www.instagram.com/crefer'
  ]
}
