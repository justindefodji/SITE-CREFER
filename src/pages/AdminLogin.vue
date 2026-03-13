<template>
  <div class="min-h-screen bg-gradient-to-br from-red-600 via-slate-900 to-slate-900 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo / Title -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-white mb-2">CREFER</h1>
        <p class="text-slate-300">Admin - Connexion</p>
      </div>

      <!-- Login Card -->
      <div class="bg-slate-800 rounded-lg shadow-2xl p-8 border border-slate-700">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="votre@email.com"
              required
              class="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            />
          </div>

          <!-- Password Field -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">Mot de passe</label>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              required
              class="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            />
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-900 border border-red-600 text-red-300 px-4 py-3 rounded-lg text-sm">
            {{ error }}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            {{ loading ? 'Connexion en cours...' : 'Se connecter' }}
          </button>
        </form>

        <!-- Help Text -->
        <p class="text-slate-400 text-xs text-center mt-6">
          
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

    return {
      email,
      password,
      error,
      loading,
      handleLogin,
    };
  },
};
</script>
