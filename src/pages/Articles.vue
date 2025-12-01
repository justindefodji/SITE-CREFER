<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <section
      class="relative py-12 px-4 sm:px-6 lg:px-8 border-b overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black/55 z-10"></div>
      <!-- Gradient noir de bas vers le haut -->
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-15"></div>
      
      <div class="max-w-7xl mx-auto relative z-20 pt-24">
        <h1 class="text-3xl lg:text-5xl font-bold text-white mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOS ACTUALITÉS</h1>
        <p class="text-lg lg:text-xl text-blue-100">Découvrez les dernières actualités et projets de CREFER</p>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-amber-50">
      <div class="max-w-7xl mx-auto">
        <div class="space-y-12">
          <!-- Article 1 - Soutenance Mémoire -->
          <article class="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <!-- Image Left -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-lg w-full aspect-square">
                <img 
                  :src="soutenanceImageUrl" 
                  alt="Soutenance Mémoire" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Content Right -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">31 OCTOBRE 2025</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Soutenance de Mémoire - Promotion 12 SPV
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Ce vendredi 31 octobre, 12 étudiants de la filière SPV (Solaire Photovoltaïque) soutiendront leur mémoire de fin de formation. Une étape décisive qui marque l'aboutissement de plusieurs mois d'efforts, de rigueur et de passion pour l'électricité et l'énergie solaire.
              </p>
              <div class="flex items-center gap-2 text-gray-600 mb-4">
                <span>📍</span>
                <span>Annexe CREFER, au bord des pavés de Totsi</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600 mb-6">
                <span>🕐</span>
                <span>08h00 - 12h00</span>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 2 - 14ème Promotion Modulaire -->
          <article class="flex flex-col lg:flex-row-reverse gap-8 items-start">
            <!-- Images Gallery Right -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="grid grid-cols-2 gap-4">
                <!-- Large image top left -->
                <div class="col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg h-full cursor-pointer hover:shadow-xl transition-shadow" @click="openLightbox(0)">
                  <img 
                    :src="promotionImage1Url" 
                    alt="14ème Promotion Modulaire - Image 1" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Top right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openLightbox(1)">
                  <img 
                    :src="promotionImage2Url" 
                    alt="14ème Promotion Modulaire - Image 2" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Bottom right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openLightbox(2)">
                  <img 
                    :src="promotionImage3Url" 
                    alt="14ème Promotion Modulaire - Image 3" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            <!-- Content Left -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">Rentrée académique</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Lancement de la 14ème Promotion des Formations Modulaires
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Ce lundi 14 octobre marque le lancement de la 14ème promotion des formations modulaires de 06 et 12 mois en électricité, plomberie, énergie solaire et froid-climatisation. À travers cette nouvelle promotion, CREFER confirme son engagement à former des techniciens compétents, polyvalents et opérationnels, capables de répondre efficacement aux besoins croissants du marché Togolais et régional.
              </p>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Avec un encadrement de qualité et une approche résolument pratique de l'apprentissage, CREFER s'impose aujourd'hui comme une véritable référence de la formation technique et professionnelle au Togo.
              </p>
              <div class="text-yellow-500 font-bold mb-6">
                👏 Bienvenue aux nouveaux apprenants !
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 3 - Nos Anciens Étudiants & Engagements -->
          <article class="flex flex-col lg:flex-row gap-8 items-start">
            <!-- Images Gallery Left -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="grid grid-cols-2 gap-4">
                <!-- Large image left -->
                <div class="col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg h-full cursor-pointer hover:shadow-xl transition-shadow" @click="openSolarLightbox(0)">
                  <img 
                    :src="solarImage1Url" 
                    alt="Anciens étudiants CREFER - Stage pratique" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Right image -->
                <div class="col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg h-full cursor-pointer hover:shadow-xl transition-shadow" @click="openSolarLightbox(1)">
                  <img 
                    :src="solarImage2Url" 
                    alt="Formation pratique CREFER - Énergie solaire" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            <!-- Content Right -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">2021 - NOS RÉALISATIONS</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                1500+ Étudiants Formés et Transformés
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Depuis sa création, CREFER a déjà formé près de <strong>1500 étudiants</strong> venus du Togo et d'ailleurs. Notre engagement reste le même : garantir à chaque étudiant un stage pratique et l'opportunité de transformer sa formation en réelle compétence professionnelle.
              </p>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Retour en images sur nos anciens étudiants (Promotion 5, 2021) en pleine immersion sur le terrain. Ces moments résument bien l'ADN de CREFER : apprendre par la pratique, pour s'insérer durablement dans le monde professionnel.
              </p>
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p class="text-gray-800 font-semibold">
                  👉 La rentrée 2025 marque notre 14ème promotion. Une nouvelle génération prête à relever les défis énergétiques et techniques de l'Afrique !
                </p>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 4 - CREFER, la garantie d'un stage concret -->
          <article class="flex flex-col lg:flex-row-reverse gap-8 items-start">
            <!-- Images Gallery 2x2 Right -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="grid grid-cols-2 gap-4">
                <!-- Top left image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openInstallLightbox(0)">
                  <img 
                    :src="installImage1Url" 
                    alt="Installation solaire - Image 1" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Top right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openInstallLightbox(1)">
                  <img 
                    :src="installImage2Url" 
                    alt="Installation solaire - Image 2" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Bottom left image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openInstallLightbox(2)">
                  <img 
                    :src="installImage3Url" 
                    alt="Installation solaire - Image 3" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Bottom right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openInstallLightbox(3)">
                  <img 
                    :src="installImage4Url" 
                    alt="Installation solaire - Image 4" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            <!-- Content Left -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">NOVEMBRE 2025 - FORMATION PRATIQUE</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                CREFER, la Garantie d'un Stage Concret !
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                👷‍♂️ <strong>Nos étudiants maîtrisent chaque étape</strong> : du dimensionnement à l'installation. Chaque formation est ancrée dans la réalité du terrain, garantissant une expérience pratique authentique et directement applicable.
              </p>
              <p class="text-gray-700 mb-6 leading-relaxed">
                ☀️ <strong>Choisis CREFER et deviens le pro du solaire.</strong> Notre engagement : former des techniciens capables de relever les défis énergétiques de demain.
              </p>
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p class="text-gray-800 font-semibold mb-3">📍 Nous contacter :</p>
                <p class="text-gray-700 mb-2"><strong>📞</strong> +22891204373 🇹🇬</p>
                <p class="text-gray-700 mb-2"><strong>🌐</strong> www.crefer.tech/admissions</p>
                <p class="text-gray-700"><strong>📍 Adresse :</strong> Lomé-TOGO, quartier Totsi</p>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 5 - Examen Blanc BT Électrotechnique -->
          <article class="flex flex-col lg:flex-row gap-8 items-start">
            <!-- Images Gallery 2x2 Left -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="grid grid-cols-2 gap-4">
                <!-- Top left image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openExamLightbox(0)">
                  <img 
                    :src="examImage1Url" 
                    alt="Examen blanc BT - Image 1" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Top right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openExamLightbox(1)">
                  <img 
                    :src="examImage2Url" 
                    alt="Examen blanc BT - Image 2" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Bottom left image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openExamLightbox(2)">
                  <img 
                    :src="examImage3Url" 
                    alt="Examen blanc BT - Image 3" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Bottom right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openExamLightbox(3)">
                  <img 
                    :src="examImage4Url" 
                    alt="Examen blanc BT - Image 4" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            <!-- Content Right -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">NOVEMBRE 2025 - ÉVALUATION & EXCELLENCE</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                🎓 Examen Blanc – BT Électrotechnique ⚡
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Depuis lundi dernier, nos étudiants de troisième année BT Électrotechnique sont en <strong>examen blanc</strong>, une étape cruciale dans leur préparation à l'examen national prévu pour <strong>juillet 2025</strong>.
              </p>
              <p class="text-gray-700 mb-6 leading-relaxed">
                🔧 <strong>Ce jour, ils étaient en atelier</strong> pour le TP d'électricité industrielle, un exercice pratique chronométré sur 6 heures, mobilisant rigueur, technicité et maîtrise du temps.
              </p>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Les <strong>résultats de cette première phase</strong> seront proclamés mardi prochain.
              </p>
              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p class="text-gray-800 font-semibold mb-3">
                  💪 Nous leur souhaitons beaucoup de courage pour la suite de cet examen blanc. Le chemin vers l'excellence passe par la pratique et la persévérance !
                </p>
              </div>
              <div class="text-gray-700 font-semibold mb-6">
                <p class="mb-2"><strong>📞</strong> +22891204373 🇹🇬</p>
                <p><strong>📍</strong> Lomé-TOGO, quartier Totsi</p>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 6 - Soutenance EZUKE Yao John -->
          <article class="flex flex-col lg:flex-row-reverse gap-8 items-start">
            <!-- Images Gallery 2x2 Right -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="grid grid-cols-2 gap-4">
                <!-- Top left image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openSoutenanceLightbox(0)">
                  <img 
                    :src="soutenanceImage1Url" 
                    alt="Soutenance mémoire - Image 1" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Top right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openSoutenanceLightbox(1)">
                  <img 
                    :src="soutenanceImage2Url" 
                    alt="Soutenance mémoire - Image 2" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Bottom left image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openSoutenanceLightbox(2)">
                  <img 
                    :src="soutenanceImage3Url" 
                    alt="Soutenance mémoire - Image 3" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <!-- Bottom right image -->
                <div class="col-span-1 rounded-lg overflow-hidden shadow-lg aspect-square cursor-pointer hover:shadow-xl transition-shadow" @click="openSoutenanceLightbox(3)">
                  <img 
                    :src="soutenanceImage4Url" 
                    alt="Soutenance mémoire - Image 4" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>

            <!-- Content Left -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">NOVEMBRE 2025 - EXCELLENCE ACADÉMIQUE</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Zoom sur la Présentation de Mémoire - EZUKE Yao John 
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                C'est avec <strong>assurance et rigueur</strong> que notre étudiant a brillamment soutenu son mémoire sur le thème : <strong>« Étude et dimensionnement d'un système photovoltaïque en milieu urbain : cas de la boutique de M. KOTCHANOU »</strong>.
              </p>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Entouré de sa famille et de ses amis, il a su démontrer sa <strong>maîtrise du sujet</strong> et la <strong>qualité de son travail</strong>. Une belle démonstration de l'excellence que CREFER cultive chez ses étudiants.
              </p>
              <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p class="text-gray-800 font-semibold text-lg">
                  🎓 Faites le choix de l'excellence, en choisissant CREFER !
                </p>
              </div>
              <div class="text-gray-700 font-semibold mb-6 space-y-2">
                <p><strong>📞</strong> +22891204373 🇹🇬</p>
                <p><strong>🌐</strong> www.crefer.tech/admissions</p>
                <p><strong>📍 Siège Social :</strong> Totsi Gblenkomé près de la salle de réunion des témoins de Jéhovah</p>
                <p><strong>📍 Annexe :</strong> Au bord des pavés de Totsi non loin de l'agence TogoCom</p>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

         
        </div>

        <!-- Load More Button -->
        <!-- <div class="flex justify-center mt-16">
          <button class="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-white transition-colors hover:shadow-lg transform hover:-translate-y-1">
            Charger plus d'articles
          </button>
        </div> -->
      </div>
    </section>

    <!-- Lightbox Modal for Article 2 Images -->
    <div 
      v-if="showLightbox" 
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <!-- Close button -->
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Main image -->
        <img 
          :src="lightboxImages[currentLightboxIndex]" 
          :alt="`Image ${currentLightboxIndex + 1}`"
          class="w-full h-auto rounded-lg"
        />

        <!-- Navigation arrows -->
        <button 
          v-if="currentLightboxIndex > 0"
          @click="previousLightboxImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          v-if="currentLightboxIndex < lightboxImages.length - 1"
          @click="nextLightboxImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Image counter -->
        <div class="text-center text-white mt-4 font-semibold">
          {{ currentLightboxIndex + 1 }} / {{ lightboxImages.length }}
        </div>
      </div>
    </div>

    <!-- Lightbox Modal for Article 3 (Solar Images) -->
    <div 
      v-if="showSolarLightbox" 
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      @click="closeSolarLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <!-- Close button -->
        <button 
          @click="closeSolarLightbox"
          class="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Main image -->
        <img 
          :src="solarLightboxImages[currentSolarLightboxIndex]" 
          :alt="`Image ${currentSolarLightboxIndex + 1}`"
          class="w-full h-auto rounded-lg"
        />

        <!-- Navigation arrows -->
        <button 
          v-if="currentSolarLightboxIndex > 0"
          @click="previousSolarLightboxImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          v-if="currentSolarLightboxIndex < solarLightboxImages.length - 1"
          @click="nextSolarLightboxImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Image counter -->
        <div class="text-center text-white mt-4 font-semibold">
          {{ currentSolarLightboxIndex + 1 }} / {{ solarLightboxImages.length }}
        </div>
      </div>
    </div>

    <!-- Lightbox Modal for Article 4 (Install Images) -->
    <div 
      v-if="showInstallLightbox" 
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      @click="closeInstallLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <!-- Close button -->
        <button 
          @click="closeInstallLightbox"
          class="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Main image -->
        <img 
          :src="installLightboxImages[currentInstallLightboxIndex]" 
          :alt="`Image ${currentInstallLightboxIndex + 1}`"
          class="w-full h-auto rounded-lg"
        />

        <!-- Navigation arrows -->
        <button 
          v-if="currentInstallLightboxIndex > 0"
          @click="previousInstallLightboxImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          v-if="currentInstallLightboxIndex < installLightboxImages.length - 1"
          @click="nextInstallLightboxImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Image counter -->
        <div class="text-center text-white mt-4 font-semibold">
          {{ currentInstallLightboxIndex + 1 }} / {{ installLightboxImages.length }}
        </div>
      </div>
    </div>

    <!-- Lightbox Modal for Article 5 (Exam Images) -->
    <div 
      v-if="showExamLightbox" 
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      @click="closeExamLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <!-- Close button -->
        <button 
          @click="closeExamLightbox"
          class="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Main image -->
        <img 
          :src="examLightboxImages[currentExamLightboxIndex]" 
          :alt="`Image ${currentExamLightboxIndex + 1}`"
          class="w-full h-auto rounded-lg"
        />

        <!-- Navigation arrows -->
        <button 
          v-if="currentExamLightboxIndex > 0"
          @click="previousExamLightboxImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          v-if="currentExamLightboxIndex < examLightboxImages.length - 1"
          @click="nextExamLightboxImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Image counter -->
        <div class="text-center text-white mt-4 font-semibold">
          {{ currentExamLightboxIndex + 1 }} / {{ examLightboxImages.length }}
        </div>
      </div>
    </div>

    <!-- Lightbox Modal for Article 6 (Soutenance Images) -->
    <div 
      v-if="showSoutenanceLightbox" 
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      @click="closeSoutenanceLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <!-- Close button -->
        <button 
          @click="closeSoutenanceLightbox"
          class="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Main image -->
        <img 
          :src="soutenanceLightboxImages[currentSoutenanceLightboxIndex]" 
          :alt="`Image ${currentSoutenanceLightboxIndex + 1}`"
          class="w-full h-auto rounded-lg"
        />

        <!-- Navigation arrows -->
        <button 
          v-if="currentSoutenanceLightboxIndex > 0"
          @click="previousSoutenanceLightboxImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          v-if="currentSoutenanceLightboxIndex < soutenanceLightboxImages.length - 1"
          @click="nextSoutenanceLightboxImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Image counter -->
        <div class="text-center text-white mt-4 font-semibold">
          {{ currentSoutenanceLightboxIndex + 1 }} / {{ soutenanceLightboxImages.length }}
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <section class="bg-gradient-to-r from-gray-900 to-yellow-500 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Restez Informé</h2>
        <p class="text-lg text-yellow-100 mb-8">
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
        </p>
        <form @submit.prevent="subscribeNewsletter" class="flex gap-3 flex-col sm:flex-row max-w-md mx-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Votre email"
            required
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none"
          />
          <button
            type="submit"
            class="px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:shadow-lg transition-colors font-bold whitespace-nowrap hover:scale-105 transform"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Articles',
  setup() {
    const backgroundImageUrl = ref(new URL('../assets/images/_DSC4895-1200.jpg', import.meta.url).href)
    const soutenanceImageUrl = ref(new URL('../assets/images/soutenance-1200.jpg', import.meta.url).href)
    const promotionImage1Url = ref(new URL('../assets/images/image3article2.jpg', import.meta.url).href)
    const promotionImage2Url = ref(new URL('../assets/images/image2article2.jpg', import.meta.url).href)
    const promotionImage3Url = ref(new URL('../assets/images/image1article2.jpg', import.meta.url).href)
    const solarImage1Url = ref(new URL('../assets/images/articlesolaire1.jpg', import.meta.url).href)
    const solarImage2Url = ref(new URL('../assets/images/articlesolaire2.jpg', import.meta.url).href)
    const installImage1Url = ref(new URL('../assets/images/install1article.jpg', import.meta.url).href)
    const installImage2Url = ref(new URL('../assets/images/install2article.jpg', import.meta.url).href)
    const installImage3Url = ref(new URL('../assets/images/install3article.jpg', import.meta.url).href)
    const installImage4Url = ref(new URL('../assets/images/install4article.jpg', import.meta.url).href)
    const examImage1Url = ref(new URL('../assets/images/exam1article.jpg', import.meta.url).href)
    const examImage2Url = ref(new URL('../assets/images/exam2article.jpg', import.meta.url).href)
    const examImage3Url = ref(new URL('../assets/images/exam3article.jpg', import.meta.url).href)
    const examImage4Url = ref(new URL('../assets/images/exam4article.jpg', import.meta.url).href)
    const soutenanceImage1Url = ref(new URL('../assets/images/soutenance1article.jpg', import.meta.url).href)
    const soutenanceImage2Url = ref(new URL('../assets/images/soutenance2article.jpg', import.meta.url).href)
    const soutenanceImage3Url = ref(new URL('../assets/images/soutenance3article.jpg', import.meta.url).href)
    const soutenanceImage4Url = ref(new URL('../assets/images/soutenance4article.jpg', import.meta.url).href)
    const email = ref('')

    // Lightbox state
    const showLightbox = ref(false)
    const currentLightboxIndex = ref(0)
    const lightboxImages = ref([])
    const showSolarLightbox = ref(false)
    const currentSolarLightboxIndex = ref(0)
    const solarLightboxImages = ref([])
    const showInstallLightbox = ref(false)
    const currentInstallLightboxIndex = ref(0)
    const installLightboxImages = ref([])
    const showExamLightbox = ref(false)
    const currentExamLightboxIndex = ref(0)
    const examLightboxImages = ref([])
    const showSoutenanceLightbox = ref(false)
    const currentSoutenanceLightboxIndex = ref(0)
    const soutenanceLightboxImages = ref([])
    
    // Social features - Compteurs à 0 pour démarrage frais
    const likes = ref({ 1: false, 2: false, 3: false, 4: false })
    const likeCounts = ref({ 1: 0, 2: 0, 3: 0, 4: 0 })
    const commentCounts = ref({ 1: 0, 2: 0, 3: 0, 4: 0 })
    const shareCounts = ref({ 1: 0, 2: 0, 3: 0, 4: 0 })
    const newComments = ref({ 1: '', 2: '', 3: '', 4: '' })
    const showCommentForm = ref(null)

    const toggleLike = (articleId) => {
      likes.value[articleId] = !likes.value[articleId]
      if (likes.value[articleId]) {
        likeCounts.value[articleId]++
      } else {
        likeCounts.value[articleId]--
      }
    }

    const addComment = (articleId) => {
      if (newComments.value[articleId].trim()) {
        commentCounts.value[articleId]++
        newComments.value[articleId] = ''
        showCommentForm.value = null // Fermer le formulaire après l'ajout
        // Feedback visuel optionnel
        console.log(`Commentaire ajouté à l'article ${articleId}`)
      }
    }

    const shareArticle = (title, articleId) => {
      shareCounts.value[articleId]++
      
      if (navigator.share) {
        navigator.share({
          title: 'CREFER - Actualité',
          text: title,
          url: window.location.href
        }).catch(err => console.log('Erreur de partage:', err))
      } else {
        // Fallback for browsers that don't support native share
        const text = `${title} - Découvrez plus sur CREFER: ${window.location.href}`
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text)
          alert('✅ Lien copié dans le presse-papiers!')
        } else {
          alert(`Partagez ceci: ${text}`)
        }
      }
    }

    const subscribeNewsletter = () => {
      console.log('Inscription newsletter:', email.value)
      email.value = ''
      alert('Merci! Vérifiez votre email.')
    }

    const openLightbox = (index) => {
      lightboxImages.value = [promotionImage1Url.value, promotionImage2Url.value, promotionImage3Url.value]
      currentLightboxIndex.value = index
      showLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      showLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextLightboxImage = () => {
      if (currentLightboxIndex.value < lightboxImages.value.length - 1) {
        currentLightboxIndex.value++
      }
    }

    const previousLightboxImage = () => {
      if (currentLightboxIndex.value > 0) {
        currentLightboxIndex.value--
      }
    }

    const openSolarLightbox = (index) => {
      solarLightboxImages.value = [solarImage1Url.value, solarImage2Url.value]
      currentSolarLightboxIndex.value = index
      showSolarLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeSolarLightbox = () => {
      showSolarLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextSolarLightboxImage = () => {
      if (currentSolarLightboxIndex.value < solarLightboxImages.value.length - 1) {
        currentSolarLightboxIndex.value++
      }
    }

    const previousSolarLightboxImage = () => {
      if (currentSolarLightboxIndex.value > 0) {
        currentSolarLightboxIndex.value--
      }
    }

    const openInstallLightbox = (index) => {
      installLightboxImages.value = [installImage1Url.value, installImage2Url.value, installImage3Url.value, installImage4Url.value]
      currentInstallLightboxIndex.value = index
      showInstallLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeInstallLightbox = () => {
      showInstallLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextInstallLightboxImage = () => {
      if (currentInstallLightboxIndex.value < installLightboxImages.value.length - 1) {
        currentInstallLightboxIndex.value++
      }
    }

    const previousInstallLightboxImage = () => {
      if (currentInstallLightboxIndex.value > 0) {
        currentInstallLightboxIndex.value--
      }
    }

    const openExamLightbox = (index) => {
      examLightboxImages.value = [examImage1Url.value, examImage2Url.value, examImage3Url.value, examImage4Url.value]
      currentExamLightboxIndex.value = index
      showExamLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeExamLightbox = () => {
      showExamLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextExamLightboxImage = () => {
      if (currentExamLightboxIndex.value < examLightboxImages.value.length - 1) {
        currentExamLightboxIndex.value++
      }
    }

    const previousExamLightboxImage = () => {
      if (currentExamLightboxIndex.value > 0) {
        currentExamLightboxIndex.value--
      }
    }

    const openSoutenanceLightbox = (index) => {
      soutenanceLightboxImages.value = [soutenanceImage1Url.value, soutenanceImage2Url.value, soutenanceImage3Url.value, soutenanceImage4Url.value]
      currentSoutenanceLightboxIndex.value = index
      showSoutenanceLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeSoutenanceLightbox = () => {
      showSoutenanceLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextSoutenanceLightboxImage = () => {
      if (currentSoutenanceLightboxIndex.value < soutenanceLightboxImages.value.length - 1) {
        currentSoutenanceLightboxIndex.value++
      }
    }

    const previousSoutenanceLightboxImage = () => {
      if (currentSoutenanceLightboxIndex.value > 0) {
        currentSoutenanceLightboxIndex.value--
      }
    }

    return {
      email,
      subscribeNewsletter,
      backgroundImageUrl,
      soutenanceImageUrl,
      promotionImage1Url,
      promotionImage2Url,
      promotionImage3Url,
      solarImage1Url,
      solarImage2Url,
      installImage1Url,
      installImage2Url,
      installImage3Url,
      installImage4Url,
      examImage1Url,
      examImage2Url,
      examImage3Url,
      examImage4Url,
      soutenanceImage1Url,
      soutenanceImage2Url,
      soutenanceImage3Url,
      soutenanceImage4Url,
      showLightbox,
      currentLightboxIndex,
      lightboxImages,
      openLightbox,
      closeLightbox,
      nextLightboxImage,
      previousLightboxImage,
      showSolarLightbox,
      currentSolarLightboxIndex,
      solarLightboxImages,
      openSolarLightbox,
      closeSolarLightbox,
      nextSolarLightboxImage,
      previousSolarLightboxImage,
      showInstallLightbox,
      currentInstallLightboxIndex,
      installLightboxImages,
      openInstallLightbox,
      closeInstallLightbox,
      nextInstallLightboxImage,
      previousInstallLightboxImage,
      showExamLightbox,
      currentExamLightboxIndex,
      examLightboxImages,
      openExamLightbox,
      closeExamLightbox,
      nextExamLightboxImage,
      previousExamLightboxImage,
      showSoutenanceLightbox,
      currentSoutenanceLightboxIndex,
      soutenanceLightboxImages,
      openSoutenanceLightbox,
      closeSoutenanceLightbox,
      nextSoutenanceLightboxImage,
      previousSoutenanceLightboxImage,
      likes,
      likeCounts,
      commentCounts,
      shareCounts,
      newComments,
      showCommentForm,
      toggleLike,
      addComment,
      shareArticle
    }
  }
}
</script>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceHeart {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}

.animate-bounce-heart {
  animation: bounceHeart 0.6s ease-in-out;
}
</style>
