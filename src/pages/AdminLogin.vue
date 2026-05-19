<template>
  <div class="min-h-screen bg-gray-950 flex">

    <!-- Left panel: branding -->
    <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gray-900 items-center justify-center p-16">
      <!-- Background shapes -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div class="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-400/3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>

      <!-- Content -->
      <div class="relative z-10 text-center">
        <div class="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-yellow-400/20">
          <span class="text-gray-900 font-black text-2xl tracking-tight">CR</span>
        </div>
        <h1 class="text-5xl font-black text-white mb-4 tracking-tight">CREFER</h1>
        <p class="text-gray-400 text-lg mb-10">Centre de Référence en Électrotechnique</p>

        <div class="space-y-4 text-left max-w-xs mx-auto">
          <div class="flex items-center gap-3 text-gray-400">
            <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <span class="text-sm">Gestion des articles et actualités</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400">
            <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <span class="text-sm">Galerie photo et vidéos</span>
          </div>
          <div class="flex items-center gap-3 text-gray-400">
            <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </div>
            <span class="text-sm">Édition des pages du site</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right panel: login form -->
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="w-full max-w-sm">

        <!-- Mobile logo -->
        <div class="lg:hidden text-center mb-10">
          <div class="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span class="text-gray-900 font-black text-lg">CR</span>
          </div>
          <h1 class="text-2xl font-black text-white">CREFER</h1>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white">Connexion</h2>
          <p class="text-gray-500 mt-1 text-sm">Accédez au panneau d'administration</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email -->
          <div>
            <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Adresse email</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <input
                v-model="email"
                type="email"
                placeholder="admin@crefer.cm"
                required
                autocomplete="email"
                class="w-full bg-gray-900 text-white pl-11 pr-4 py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm placeholder-gray-600"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Mot de passe</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                required
                autocomplete="current-password"
                class="w-full bg-gray-900 text-white pl-11 pr-12 py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm placeholder-gray-600"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-600 hover:text-gray-400 transition-colors"
              >
                <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {{ error }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-800 disabled:text-gray-600 text-gray-900 font-bold py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-yellow-400/20 disabled:shadow-none"
          >
            <span v-if="loading" class="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
            </svg>
            {{ loading ? 'Connexion en cours...' : 'Se connecter' }}
          </button>
        </form>

        <p class="text-center text-gray-700 text-xs mt-8">
          Accès réservé aux administrateurs CREFER
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginWithEmail } from '../services/authService';

export default {
  name: 'AdminLogin',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const loading = ref(false);
    const showPassword = ref(false);

    const handleLogin = async () => {
      error.value = '';
      loading.value = true;
      try {
        await loginWithEmail(email.value, password.value);
        router.push('/admin/dashboard');
      } catch (err) {
        error.value = 'Email ou mot de passe incorrect';
        console.error('Login error:', err);
      } finally {
        loading.value = false;
      }
    };

    return { email, password, error, loading, showPassword, handleLogin };
  },
};
</script>
