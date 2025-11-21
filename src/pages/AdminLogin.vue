<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <!-- Logo/Header -->
      <div class="text-center mb-8">
        <div class="inline-block p-4 bg-orange-500 rounded-full mb-4">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V9.5M10.5 1.5v4.5h4.5M10.5 1.5l4.95 4.95" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">Admin CREFER</h1>
        <p class="text-gray-400">Connexion à l'espace administrateur</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-2xl">
        <div class="mb-6">
          <label class="block text-gray-300 font-semibold mb-2">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition"
            required
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition disabled:opacity-50"
        >
          {{ loading ? 'Vérification...' : 'Se connecter' }}
        </button>

        <div v-if="error" class="mt-4 p-4 bg-red-900/30 border border-red-500 rounded-lg">
          <p class="text-red-400 text-sm font-semibold">{{ error }}</p>
        </div>
      </form>

      <!-- Info -->
      <div class="mt-8 text-center">
        <router-link to="/" class="text-orange-500 hover:text-orange-400 font-semibold transition">
          ← Retour au site
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminAuth } from '../composables/useAdminData'

export default {
  name: 'AdminLogin',
  setup() {
    const router = useRouter()
    const { login } = useAdminAuth()
    const password = ref('')
    const error = ref('')
    const loading = ref(false)

    const handleLogin = async () => {
      loading.value = true
      error.value = ''

      if (login(password.value)) {
        router.push('/admin')
      } else {
        error.value = 'Mot de passe incorrect'
        password.value = ''
      }

      loading.value = false
    }

    return {
      password,
      error,
      loading,
      handleLogin
    }
  }
}
</script>
