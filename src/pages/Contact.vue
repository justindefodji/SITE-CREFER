<template>
  <div class="min-h-screen bg-white overflow-hidden">
    <!-- Header Section -->
    <section
      class="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
      v-scroll-animate
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <!-- Gradient sophisticated -->
      <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-black/60 to-transparent z-15"></div>
      
      <div class="max-w-7xl mx-auto relative z-20 pt-28 pb-8">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Restons en contact</h1>
        <p class="text-lg lg:text-xl text-slate-200 max-w-2xl">Nous sommes là pour vous aider. Envoyez-nous un message et nous vous répondrons dans les meilleurs délais.</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50" v-scroll-animate>
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Envoyez-nous un message</h2>
          <p class="text-gray-600 text-lg">Notre équipe répondra à votre demande dès que possible</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Form Left -->
          <div class="space-y-6">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Nom & Prénom -->
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-900 mb-2.5">
                  Nom & prénom
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:outline-none transition duration-200 shadow-sm hover:border-gray-400"
                  placeholder="Votre nom complet"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-2.5">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:outline-none transition duration-200 shadow-sm hover:border-gray-400"
                  placeholder="votre@email.com"
                />
              </div>

              <!-- Téléphone -->
              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2.5">
                  Téléphone
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:outline-none transition duration-200 shadow-sm hover:border-gray-400"
                  placeholder="+228 XX XX XX XX"
                />
              </div>

              <!-- Sujet -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2.5">
                  Sujet
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:outline-none transition duration-200 shadow-sm hover:border-gray-400"
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
                class="w-full px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 font-bold text-lg mt-8 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
              >
                Envoyer le message
              </button>

              <!-- Success Message -->
              <p v-if="submitted" class="text-center text-green-700 font-semibold bg-green-50 border border-green-200 p-4 rounded-xl animate-bounce">
                ✓ Message envoyé avec succès !
              </p>
            </form>
          </div>

          <!-- Message Box Right -->
          <div>
            <label for="message" class="block text-sm font-semibold text-gray-900 mb-2.5">
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="15"
              class="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:outline-none transition duration-200 shadow-sm hover:border-gray-400 resize-none"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white" v-scroll-animate>
      <div class="max-w-6xl mx-auto">
        <div class="mb-14">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Autres moyens de nous contacter</h2>
          <p class="text-gray-600 text-lg">Nous vous répondrons rapidement via le canal de votre choix</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Adresse -->
          <div class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-yellow-200" v-scroll-animate>
            <div class="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">Adresse</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Lomé-TOGO,<br />
              Siège Social situé à Lomé-TOGO quartier Totsi<br />
              Gblenkômé près de la salle de réunion des témoins de Jéhovah<br />
              Annexe au bord des pavés de Totsi non loin de l'agence TogoCom
            </p>
          </div>

          <!-- Email -->
          <div class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200" v-scroll-animate>
            <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">Email</h3>
            <p class="text-gray-600 text-sm">
              <a href="mailto:contact@crefer.tech" class="text-blue-600 hover:text-blue-700 font-semibold transition-colors hover:underline">
                contact@crefer.tech
              </a>
            </p>
          </div>

          <!-- Téléphone -->
          <div class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200" v-scroll-animate>
            <div class="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">Téléphone</h3>
            <div class="text-gray-600 text-sm space-y-2">
              <div>
                <a href="tel:+22891204373" class="text-green-600 hover:text-green-700 font-semibold transition-colors hover:underline">
                  (+228) 91 20 43 73
                </a>
              </div>
              <div>
                <a href="tel:+22892531455" class="text-green-600 hover:text-green-700 font-semibold transition-colors hover:underline">
                  (+228) 92 53 14 55
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-indigo-50 to-slate-50" v-scroll-animate>
      <div class="max-w-6xl mx-auto">
        <div class="mb-10">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Localisation</h2>
          <p class="text-gray-600 text-lg">Trouvez-nous facilement à Lomé</p>
        </div>
        <div class="w-full h-96 rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.2441234567894!2d1.1030607!3d6.1883976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1021590e04739e1f%3A0xeb6875f1fa1aca85!2sLom%C3%A9!5e0!3m2!1sfr!2stg!4v1234567890"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="mt-8 text-center">
          <a 
            href="https://www.google.com/maps/dir//Lom%C3%A9/@6.1883976,1.1030607,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1021590e04739e1f:0xeb6875f1fa1aca85!2m2!1d1.1854728!2d6.1884066?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Ouvrir dans Google Maps
          </a>
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
    // Image pour la section Header
    const backgroundImageUrl = ref(new URL('../assets/images/_DSC4916-1200.jpg', import.meta.url).href)
    
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
      handleSubmit,
      backgroundImageUrl
    }
  }
}
</script>
