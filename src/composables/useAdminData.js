import { ref, reactive } from 'vue'

const STORAGE_KEY = 'crefer_admin_data'
const AUTH_KEY = 'crefer_admin_auth'

const defaultData = {
  home: {
    hero: {
      title: 'FORMER\nLES EXPERTS EN\nÉNERGIE DE DEMAIN',
      subtitle: 'Rejoignez la révolution des énergies renouvelables et devenez un leader reconnu.'
    },
    stats: {
      formed: 560,
      startups: 20,
      employment: 280,
      projects: 10
    },
    about: {
      title: 'Pourquoi Choisir CREFER ?',
      description: 'Le manque de spécialistes en photovoltaïque a motivé notre création. Aujourd\'hui, nous sommes la référence régionale, formant des leaders de l\'énergie solaire et de l\'électricité.'
    }
  },
  contact: {
    title: 'CONTACTEZ-NOUS VIA CE FORMULAIRE',
    subtitle: 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais'
  },
  articles: {
    title: 'NOS ACTUALITÉS',
    subtitle: 'Découvrez les dernières actualités et projets de CREFER'
  },
  admissions: {
    title: 'ADMISSIONS 2025-2026',
    subtitle: 'Rejoignez nos programmes de formation en énergies renouvelables'
  }
}

export function useAdminData() {
  const adminData = reactive(loadData())

  function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaultData))
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(adminData))
  }

  function updateData(path, value) {
    const keys = path.split('.')
    let current = adminData
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]]
    }
    current[keys[keys.length - 1]] = value
    saveData()
  }

  function resetData() {
    const fresh = JSON.parse(JSON.stringify(defaultData))
    Object.assign(adminData, fresh)
    saveData()
  }

  return {
    adminData,
    updateData,
    resetData,
    saveData
  }
}

export function useAdminAuth() {
  const isAuthenticated = ref(checkAuth())
  const adminPassword = 'crefer2025' // À changer en production

  function checkAuth() {
    return localStorage.getItem(AUTH_KEY) === 'true'
  }

  function login(password) {
    if (password === adminPassword) {
      localStorage.setItem(AUTH_KEY, 'true')
      isAuthenticated.value = true
      return true
    }
    return false
  }

  function logout() {
    localStorage.removeItem(AUTH_KEY)
    isAuthenticated.value = false
  }

  return {
    isAuthenticated,
    login,
    logout
  }
}
