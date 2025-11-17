<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <section class="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl lg:text-5xl font-bold text-orange-400 mb-4">CONTACTEZ-NOUS VIA CE FORMALAIRE/</h1>
        <p class="text-lg text-gray-600">Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Form Left -->
          <div>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Nom & Prénom -->
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
                  Nom & prénom
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-400 focus:outline-none transition"
                  placeholder="Votre nom complet"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-400 focus:outline-none transition"
                  placeholder="votre@email.com"
                />
              </div>

              <!-- Téléphone -->
              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2">
                  Téléphone
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-400 focus:outline-none transition"
                  placeholder="+228 XX XX XX XX"
                />
              </div>

              <!-- Sujet -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-400 focus:outline-none transition bg-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="admission">Admission</option>
                  <option value="formation">Formation</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg mt-8"
              >
                Envoyer le message
              </button>

              <!-- Success Message -->
              <p v-if="submitted" class="text-center text-green-600 font-semibold bg-green-50 p-3 rounded">
                ✓ Message envoyé avec succès !
              </p>
            </form>
          </div>

          <!-- Message Box Right -->
          <div>
            <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="12"
              class="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-400 focus:outline-none transition resize-none"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Autres moyens de nous contacter</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Adresse -->
          <div class="bg-white rounded-lg shadow p-8">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Adresse</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Lomé-TOGO,<br />
              Siège Social situé à Lomé-TOGO quartier Totsi<br />
              Gblenkômé près de la salle de réunion des témoins de Jéhovah<br />
              Annexe au bord des pavés de Totsi non loin de l'agence TogoCom
            </p>
          </div>

          <!-- Email -->
          <div class="bg-white rounded-lg shadow p-8">
            <div class="text-4xl mb-4">📧</div>
            <h3 class="text-xl font-bold text-gray-909 mb-3">Email</h3>
            <p class="text-gray-600 text-sm">
              <a href="mailto:contact@crefer.tech" class="text-orange-400 hover:text-orange-500 font-semibold">
                contact@crefer.tech
              </a>
            </p>
          </div>

          <!-- Téléphone -->
          <div class="bg-white rounded-lg shadow p-8">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="text-xl font-bold text-gray-909 mb-3">Téléphone</h3>
            <p class="text-gray-600 text-sm space-y-2">
              <div>
                <a href="tel:+22891204373" class="text-orange-400 hover:text-orange-500 font-semibold">
                  (+228) 91 20 43 73
                </a>
              </div>
              <div>
                <a href="tel:+22892531455" class="text-orange-400 hover:text-orange-500 font-semibold">
                  (+228) 92 53 14 55
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Localisation</h2>
        <div class="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-lg flex items-center justify-center">
          <div class="text-center text-gray-600">
            <div class="text-6xl mb-4">🗺️</div>
            <p class="text-lg font-semibold">Carte interactive - Lomé, TOGO</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    const submitted = ref(false)

    const handleSubmit = () => {
      console.log('Formulaire soumis:', form.value)
      submitted.value = true
      form.value = { name: '', email: '', phone: '', subject: '', message: '' }
      setTimeout(() => {
        submitted.value = false
      }, 3000)
    }

    return {
      form,
      submitted,
      handleSubmit
    }
  }
}
</script>
