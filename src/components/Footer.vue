<template>
  <footer class="bg-white border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Main Content Grid -->
      <div class="grid md:grid-cols-4 gap-12 mb-16">
        <!-- Logo & Description -->
        <div class="md:col-span-1">
          <router-link 
            to="/" 
            class="inline-block hover:opacity-80 transition-opacity mb-6"
          >
            <img 
              :src="logoUrl" 
              alt="CREFER Logo" 
              class="h-24 w-auto"
            />
          </router-link>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Centre Regional d'Étude et de Formation en Énergies Renouvelables
          </p>
          
          <!-- Contact Info with Icons -->
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              <div>
                <p class="text-gray-700 text-xs font-semibold uppercase">Adresse</p>
                <p class="text-gray-600 text-sm">Lomé-TOGO, Quartier Totsi</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div>
                <p class="text-gray-700 text-xs font-semibold uppercase">Email</p>
                <a href="mailto:contact@crefer.tech" class="text-yellow-500 hover:text-yellow-600 text-sm transition-colors">
                  contact@crefer.tech
                </a>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <div>
                <p class="text-gray-700 text-xs font-semibold uppercase">Téléphone</p>
                <div class="space-y-1">
                  <a href="tel:+22891204373" class="text-yellow-500 hover:text-yellow-600 text-sm transition-colors block">
                    +228 91 20 43 73
                  </a>
                  <a href="tel:+22892531455" class="text-yellow-500 hover:text-yellow-600 text-sm transition-colors block">
                    +228 92 53 14 55
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span class="w-1 h-6 bg-yellow-500 rounded"></span>
            Services
          </h3>
          <ul class="space-y-3 text-gray-600">
            <li>
              <a href="#" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Électricité Bâtiment</span>
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Énergie Solaire</span>
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Efficacité Énergétique</span>
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Télécommunication</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Navigation Menu -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span class="w-1 h-6 bg-yellow-500 rounded"></span>
            Navigation
          </h3>
          <ul class="space-y-3 text-gray-600">
            <li>
              <router-link to="/" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Accueil</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">À Propos</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admissions" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Admissions</span>
              </router-link>
            </li>
            <li>
              <router-link to="/gallery" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Galerie</span>
              </router-link>
            </li>
            <li>
              <router-link to="/articles" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Actualités</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                </svg>
                <span class="group-hover:ml-2 transition-all">Contact</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Social Networks -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span class="w-1 h-6 bg-yellow-500 rounded"></span>
            Suivez-nous
          </h3>
          <div class="grid grid-cols-5 gap-3 mb-8">
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-lg transition-colors group" title="Facebook">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.396-.236-2.545-.236-2.82 0-4.455 1.731-4.455 4.912v1.924z"/>
              </svg>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-black rounded-lg transition-colors group" title="Twitter/X">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.829 6.694h-3.328l7.731-8.835L.424 2.25h6.699l4.912 6.093L17.55 2.25h.694zm-1.106 17.92h1.828L5.283 4.126H3.31L17.138 20.17z"/>
              </svg>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 rounded-lg transition-colors group" title="Instagram">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              </svg>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-blue-700 rounded-lg transition-colors group" title="LinkedIn">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="#" class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-black rounded-lg transition-colors group" title="TikTok">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.88 2.88 0 0 1 .88.13V9.4a5.9 5.9 0 0 0-1-.1A6.56 6.56 0 0 0 5 20.1a6.56 6.56 0 0 0 10.86-4.43v-7a4.82 4.82 0 0 0 3.77 1.7v-3.68z"/>
              </svg>
            </a>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="text-sm font-semibold text-yellow-500 mb-3">Horaires</h4>
            <div class="text-xs text-gray-600 space-y-2">
              <p><span class="text-gray-700">Lun - Ven:</span> 8h00 - 17h00</p>
              <p><span class="text-gray-700">Sam:</span> 8h00 - 12h00</p>
              <p><span class="text-gray-700">Dim:</span> Fermé</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-200 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-600 text-sm">©2025 CREFER. Tous droits réservés.</p>
          <div class="flex gap-6 text-gray-600 text-sm">
            <a href="#" class="hover:text-yellow-500 transition-colors">Politique de confidentialité</a>
            <a href="#" class="hover:text-yellow-500 transition-colors">Conditions d'utilisation</a>
            <a href="#" class="hover:text-yellow-500 transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    const logoUrl = new URL('../assets/images/crefer Logo1.png', import.meta.url).href
    
    return {
      logoUrl
    }
  }
}
</script>
