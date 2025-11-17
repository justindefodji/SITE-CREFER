<template>
  <footer class="bg-white border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Logo & Address -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">⚡</span>
            </div>
            <span class="font-bold text-xl text-gray-900">CREFER</span>
          </div>
          <p class="text-xs text-gray-500 mb-4">
            Centre d'Étude et de Formation en Énergies Renouvelables
          </p>
          
          <h4 class="font-bold text-gray-900 mb-3">Adresse</h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            Lomé-TOGO,<br />
            Siège Social situé à Lomé-TOGO quartier Totsi<br />
            Gblenkômé près de la salle de réunion des témoins de Jéhovah<br />
            Annexe au bord des pavés de Totsi non loin de l'agence TogoCom
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-bold text-gray-900 mb-6">Services</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                ÉLECTRICITÉ BÂTIMENT ET INDUSTRIELLE
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                EFFICACITÉ ÉNERGÉTIQUE
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                ÉNERGIE SOLAIRE PHOTOVOLTAÏQUE
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                Biogaz
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                Plomberie
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                Froid-Climatisation
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                RÉSEAUX ET TÉLÉCOMMUNICATION
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-400 transition-colors">
                CAMERA DE SURVEILLANCE ET ANTENNE PARABOLIQUE
              </a>
            </li>
          </ul>
        </div>

        <!-- Menu -->
        <div>
          <h4 class="font-bold text-gray-900 mb-6">Menu</h4>
          <ul class="space-y-3 text-sm text-gray-600">
            <li>
              <router-link to="/" class="hover:text-orange-400 transition-colors">
                Accueil
              </router-link>
            </li>
            <li>
              <router-link to="/admissions" class="hover:text-orange-400 transition-colors">
                Admission
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-orange-400 transition-colors">
                À propos
              </router-link>
            </li>
            <li>
              <router-link to="/gallery" class="hover:text-orange-400 transition-colors">
                Galerie
              </router-link>
            </li>
            <li>
              <router-link to="/articles" class="hover:text-orange-400 transition-colors">
                Actualités
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div>
          <h4 class="font-bold text-gray-900 mb-6">Liens sociaux</h4>
          <div class="flex gap-4 mb-8">
            <a href="#" class="text-orange-400 hover:text-orange-500 text-2xl">f</a>
            <a href="#" class="text-orange-400 hover:text-orange-500 text-2xl">𝕏</a>
            <a href="#" class="text-orange-400 hover:text-orange-500 text-2xl">📷</a>
            <a href="#" class="text-orange-400 hover:text-orange-500 text-2xl">in</a>
            <a href="#" class="text-orange-400 hover:text-orange-500 text-2xl">♪</a>
          </div>

          <h4 class="font-bold text-gray-900 mb-3">Email</h4>
          <p class="text-sm text-gray-600 mb-4">
            <a href="mailto:contact@crefer.tech" class="text-orange-400 hover:text-orange-500">
              contact@crefer.tech
            </a>
          </p>

          <h4 class="font-bold text-gray-900 mb-3">Contact</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>
              <a href="tel:+22891204373" class="hover:text-orange-400 transition-colors">
                (+228) 91 20 43 73
              </a>
            </li>
            <li>
              <a href="tel:+22892531455" class="hover:text-orange-400 transition-colors">
                (+228) 92 53 14 55
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
        <p>© 2020-2025 CREFER. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
