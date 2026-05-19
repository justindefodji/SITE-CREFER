<template>
  <div class="flex min-h-screen bg-gray-950">
    <AdminSidebar />

    <div class="ml-64 flex-1 flex flex-col">
      <!-- Top bar -->
      <header class="sticky top-0 z-30 flex items-center justify-between px-8 py-4 bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <div>
          <h1 class="text-white font-bold text-lg leading-none">Éditeur du site</h1>
          <p class="text-gray-500 text-xs mt-0.5">Toutes les sections des pages publiques — textes, images, vidéos</p>
        </div>
        <div v-if="globalSaved" class="flex items-center gap-2 text-green-400 text-xs font-semibold">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          Sauvegardé
        </div>
      </header>

      <div class="flex-1 p-8">
        <!-- Page tabs -->
        <div class="flex gap-1 p-1 bg-gray-900 rounded-xl mb-8 w-fit">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
            :class="['px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150', activeTab === tab.id ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-400 hover:text-white']">
            {{ tab.label }}
          </button>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="space-y-4">
          <div v-for="i in 5" :key="i" class="bg-gray-900 rounded-2xl p-6 animate-pulse">
            <div class="h-4 bg-gray-800 rounded w-40 mb-4"></div>
            <div class="space-y-3">
              <div class="h-9 bg-gray-800 rounded-lg"></div>
              <div class="h-9 bg-gray-800 rounded-lg"></div>
            </div>
          </div>
        </div>

        <!-- ═══════════════════════════════ GÉNÉRAL TAB ════════════════════════════════ -->
        <div v-if="activeTab === 'global'" class="space-y-4">
          <SectionCard title="Barre d'informations (en-tête du site)" color="yellow" :saving="saving['global_infobar']" :saved="saved['global_infobar']" @save="saveSection('global','infobar')">
            <p class="text-gray-500 text-xs mb-4">Cette barre s'affiche en haut de toutes les pages du site. Chaque élément a un libellé (noir) et une valeur (jaune).</p>
            <div class="grid grid-cols-1 gap-4">
              <div v-for="n in 3" :key="n" class="bg-gray-950 rounded-xl p-4 border border-gray-800">
                <p class="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-3">Élément {{ n }}</p>
                <div class="grid grid-cols-2 gap-3">
                  <div><label class="field-label">Libellé (noir)</label><input v-model="forms.global.infobar[`item${n}Label`]" class="field-input" :placeholder="`ex: ANNÉE`" /></div>
                  <div><label class="field-label">Valeur (jaune)</label><input v-model="forms.global.infobar[`item${n}Value`]" class="field-input" :placeholder="`ex: 2025-2026`" /></div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <!-- ═══════════════════════════════ ACCUEIL TAB ═══════════════════════════════ -->
        <div v-else-if="activeTab === 'home'" class="space-y-4">

          <!-- HERO TEXTES -->
          <SectionCard title="Section Héro — Textes" icon="home" color="yellow" :key-prefix="'home_hero'" :saving="saving['home_hero']" :saved="saved['home_hero']" @save="saveSection('home','hero')">
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2"><label class="field-label">Titre principal (partie fixe)</label><input v-model="forms.home.hero.titleMain" class="field-input" /></div>
              <div class="col-span-2"><label class="field-label">Titre — partie en dégradé jaune</label><input v-model="forms.home.hero.titleHighlight" class="field-input" /></div>
              <div class="col-span-2"><label class="field-label">Sous-titre</label><textarea v-model="forms.home.hero.subtitle" rows="2" class="field-input resize-none"></textarea></div>
              <div><label class="field-label">Badge 1</label><input v-model="forms.home.hero.badge1" class="field-input" /></div>
              <div><label class="field-label">Badge 2</label><input v-model="forms.home.hero.badge2" class="field-input" /></div>
              <div><label class="field-label">Badge 3</label><input v-model="forms.home.hero.badge3" class="field-input" /></div>
              <div><label class="field-label">Bouton CTA 1</label><input v-model="forms.home.hero.cta1" class="field-input" /></div>
              <div><label class="field-label">Bouton CTA 2</label><input v-model="forms.home.hero.cta2" class="field-input" /></div>
            </div>
          </SectionCard>

          <!-- HERO MEDIA — DIAPORAMA UNIQUEMENT -->
          <SectionCard title="Diaporama — Images de fond du héro" icon="image" color="blue" :saving="saving['home_hero_media']" :saved="saved['home_hero_media']" @save="saveSection('home','hero_media')">
            <div class="grid grid-cols-3 gap-4">
              <div>
                <label class="field-label">Diapositive 1</label>
                <AdminImageField v-model="forms.home.hero_media.slideshowImage1" storagePath="home/hero/slide1" :fallbackSrc="fb.slide1" />
              </div>
              <div>
                <label class="field-label">Diapositive 2</label>
                <AdminImageField v-model="forms.home.hero_media.slideshowImage2" storagePath="home/hero/slide2" :fallbackSrc="fb.slide2" />
              </div>
              <div>
                <label class="field-label">Diapositive 3</label>
                <AdminImageField v-model="forms.home.hero_media.slideshowImage3" storagePath="home/hero/slide3" :fallbackSrc="fb.slide3" />
              </div>
            </div>
          </SectionCard>

          <!-- STATISTIQUES -->
          <SectionCard title="Statistiques" icon="chart" color="green" :saving="saving['home_stats']" :saved="saved['home_stats']" @save="saveSection('home','stats')">
            <div class="grid grid-cols-2 gap-4">
              <div><label class="field-label">Jeunes Formés</label><input v-model.number="forms.home.stats.formes" type="number" class="field-input" /></div>
              <div><label class="field-label">En emploi</label><input v-model.number="forms.home.stats.emploi" type="number" class="field-input" /></div>
              <div><label class="field-label">Entreprises Partenaires</label><input v-model.number="forms.home.stats.partners" type="number" class="field-input" /></div>
              <div><label class="field-label">Programmes Certifiants</label><input v-model.number="forms.home.stats.certifies" type="number" class="field-input" /></div>
            </div>
          </SectionCard>

          <!-- VIDÉO & INFORMATIONS DE SESSION -->
          <SectionCard title="Vidéo & Informations de session" color="purple" :saving="saving['home_video_info']" :saved="saved['home_video_info']" @save="saveVideoAndInfo">
            <div class="grid grid-cols-2 gap-6">
              <!-- Colonne gauche : vidéo -->
              <div>
                <label class="field-label mb-3">Vidéo promotionnelle</label>
                <p class="text-gray-600 text-xs mb-3">Collez un lien YouTube ou importez un fichier. S'affiche à gauche sur le site.</p>
                <AdminVideoField v-model="forms.home.hero_media.videoUrl" previewHeight="220px" />
              </div>
              <!-- Colonne droite : textes de la boîte d'info -->
              <div class="space-y-4">
                <label class="field-label">Informations affichées à côté de la vidéo</label>
                <div><label class="field-label">Titre de la session</label><input v-model="forms.home.info_box.title" class="field-input" /></div>
                <div><label class="field-label">Date de démarrage</label><input v-model="forms.home.info_box.startDate" class="field-input" placeholder="13 AVRIL 2026" /></div>
                <div><label class="field-label">Durée de formation</label><input v-model="forms.home.info_box.duration" class="field-input" placeholder="6 à 12 mois" /></div>
                <div><label class="field-label">Texte de reconnaissance</label><input v-model="forms.home.info_box.recognition" class="field-input" /></div>
              </div>
            </div>
          </SectionCard>

          <!-- NOTRE HISTOIRE -->
          <SectionCard title="Notre Histoire — Textes" icon="book" color="yellow" :saving="saving['home_story']" :saved="saved['home_story']" @save="saveSection('home','story')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.home.story.title" class="field-input" /></div>
              <div><label class="field-label">Citation mise en avant</label><input v-model="forms.home.story.quote" class="field-input" /></div>
              <div><label class="field-label">Paragraphe 1</label><textarea v-model="forms.home.story.text1" rows="3" class="field-input resize-none"></textarea></div>
              <div><label class="field-label">Paragraphe 2 (encadré)</label><textarea v-model="forms.home.story.text2" rows="3" class="field-input resize-none"></textarea></div>
            </div>
          </SectionCard>

          <!-- HISTOIRE + JOIN CTA IMAGES -->
          <SectionCard title="Images — Histoire & Section Rejoindre" icon="image" color="blue" :saving="saving['home_story_media']" :saved="saved['home_story_media']" @save="saveSection('home','story_media')">
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="field-label">Image section "Notre Histoire"</label>
                <AdminImageField v-model="forms.home.story_media.storyImageUrl" storagePath="home/story/image" previewHeight="180px" :fallbackSrc="fb.storyImg" />
              </div>
              <div>
                <label class="field-label">Image section "Rejoindre CREFER"</label>
                <AdminImageField v-model="forms.home.story_media.joinUsImageUrl" storagePath="home/join/image" previewHeight="180px" :fallbackSrc="fb.joinUsImg" />
              </div>
            </div>
          </SectionCard>

          <!-- PROGRAMMES -->
          <SectionCard title="Programmes d'études (3 cartes)" icon="programs" color="blue" :saving="saving['home_programs']" :saved="saved['home_programs']" @save="saveSection('home','programs')">
            <div class="space-y-6">
              <div v-for="(prog, i) in [1,2,3]" :key="i" class="bg-gray-950 rounded-xl p-4 border border-gray-800">
                <h3 class="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Programme {{ i+1 }}</h3>
                <div class="grid grid-cols-2 gap-3">
                  <div class="col-span-2"><label class="field-label">Titre</label><input v-model="forms.home.programs[`p${prog}Title`]" class="field-input" /></div>
                  <div class="col-span-2"><label class="field-label">Description</label><textarea v-model="forms.home.programs[`p${prog}Desc`]" rows="2" class="field-input resize-none"></textarea></div>
                  <div><label class="field-label">Durée</label><input v-model="forms.home.programs[`p${prog}Duration`]" class="field-input" /></div>
                  <div><label class="field-label">Diplôme</label><input v-model="forms.home.programs[`p${prog}Diploma`]" class="field-input" /></div>
                  <div><label class="field-label">Badge</label><input v-model="forms.home.programs[`p${prog}Badge`]" class="field-input" /></div>
                  <div><label class="field-label">Avantage 1</label><input v-model="forms.home.programs[`p${prog}Feat1`]" class="field-input" /></div>
                  <div><label class="field-label">Avantage 2</label><input v-model="forms.home.programs[`p${prog}Feat2`]" class="field-input" /></div>
                  <div><label class="field-label">Avantage 3</label><input v-model="forms.home.programs[`p${prog}Feat3`]" class="field-input" /></div>
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- POURQUOI CREFER -->
          <SectionCard title="Pourquoi choisir CREFER" icon="star" color="green" :saving="saving['home_why_us']" :saved="saved['home_why_us']" @save="saveSection('home','why_us')">
            <div class="space-y-4">
              <div><label class="field-label">Titre de section</label><input v-model="forms.home.why_us.heading" class="field-input" /></div>
              <div><label class="field-label">Texte descriptif</label><textarea v-model="forms.home.why_us.description" rows="3" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-2 gap-4 mt-2">
                <div v-for="n in [1,2,3,4]" :key="n" class="bg-gray-950 rounded-xl p-3 border border-gray-800">
                  <label class="field-label">Carte {{ n }} — Titre</label>
                  <input v-model="forms.home.why_us[`feat${n}Title`]" class="field-input mb-2" />
                  <label class="field-label">Carte {{ n }} — Texte</label>
                  <textarea v-model="forms.home.why_us[`feat${n}Text`]" rows="2" class="field-input resize-none"></textarea>
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- PARTENAIRES -->
          <SectionCard title="Partenaires — Logos" icon="partners" color="purple" :saving="saving['home_partners']" :saved="saved['home_partners']" @save="saveSection('home','partners')">
            <div class="grid grid-cols-4 gap-4">
              <div v-for="n in [1,2,3,4]" :key="n">
                <label class="field-label">Logo {{ n }}</label>
                <AdminImageField v-model="forms.home.partners[`logo${n}`]" :storagePath="`home/partners/logo${n}`" previewHeight="100px" :fallbackSrc="partnerFallbacks[n-1]" />
              </div>
            </div>
          </SectionCard>

          <!-- PORTES OUVERTES -->
          <SectionCard title="Portes Ouvertes 2026" icon="door" color="yellow" :saving="saving['home_portes_ouvertes']" :saved="saved['home_portes_ouvertes']" @save="saveSection('home','portes_ouvertes')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Badge date (ex: 13 Avril 2026)</label><input v-model="forms.home.portes_ouvertes.dateBadge" class="field-input" /></div>
                <div><label class="field-label">Durée de formation</label><input v-model="forms.home.portes_ouvertes.duration" class="field-input" /></div>
                <div class="col-span-2"><label class="field-label">Lieu</label><input v-model="forms.home.portes_ouvertes.location" class="field-input" /></div>
                <div class="col-span-2"><label class="field-label">Horaires</label><input v-model="forms.home.portes_ouvertes.hours" class="field-input" /></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="field-label">Filière SPV — Titre</label>
                  <input v-model="forms.home.portes_ouvertes.spvTitle" class="field-input mb-2" />
                  <label class="field-label">Tags SPV (séparés par des virgules)</label>
                  <textarea v-model="forms.home.portes_ouvertes.spvTags" rows="2" class="field-input resize-none" placeholder="Électricité,Énergie solaire,Biogaz"></textarea>
                </div>
                <div>
                  <label class="field-label">Filière SST — Titre</label>
                  <input v-model="forms.home.portes_ouvertes.sstTitle" class="field-input mb-2" />
                  <label class="field-label">Tags SST (séparés par des virgules)</label>
                  <textarea v-model="forms.home.portes_ouvertes.sstTags" rows="2" class="field-input resize-none" placeholder="Réseau,Alarmes,Caméras"></textarea>
                </div>
              </div>
              <div>
                <label class="field-label">Image principale</label>
                <AdminImageField v-model="forms.home.portes_ouvertes.mainImage" storagePath="home/portes-ouvertes/main" previewHeight="200px" :fallbackSrc="fb.portesMain" />
              </div>
            </div>
          </SectionCard>

          <!-- TÉMOIGNAGES -->
          <SectionCard title="Témoignages (3 étudiants)" icon="quote" color="blue" :saving="saving['home_testimonials']" :saved="saved['home_testimonials']" @save="saveSection('home','testimonials')">
            <div class="space-y-6">
              <div v-for="n in [1,2,3]" :key="n" class="bg-gray-950 rounded-xl p-4 border border-gray-800">
                <h3 class="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Témoignage {{ n }}</h3>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="field-label">Photo</label>
                    <AdminImageField v-model="forms.home.testimonials[`t${n}Photo`]" :storagePath="`home/testimonials/t${n}`" previewHeight="100px" :fallbackSrc="testimonialFallbacks[n-1]" />
                  </div>
                  <div class="space-y-3">
                    <div><label class="field-label">Nom</label><input v-model="forms.home.testimonials[`t${n}Name`]" class="field-input" /></div>
                    <div><label class="field-label">Rôle / Promotion</label><input v-model="forms.home.testimonials[`t${n}Role`]" class="field-input" /></div>
                  </div>
                  <div class="col-span-2"><label class="field-label">Citation</label><textarea v-model="forms.home.testimonials[`t${n}Quote`]" rows="3" class="field-input resize-none"></textarea></div>
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- REJOINDRE CREFER CTA -->
          <SectionCard title='Section "Prêt à nous Rejoindre ?"' icon="cta" color="green" :saving="saving['home_join_cta']" :saved="saved['home_join_cta']" @save="saveSection('home','join_cta')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.home.join_cta.heading" class="field-input" /></div>
              <div><label class="field-label">Description</label><textarea v-model="forms.home.join_cta.description" rows="3" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Taux de réussite (chiffre)</label><input v-model="forms.home.join_cta.successRate" class="field-input" /></div>
                <div><label class="field-label">Label du taux</label><input v-model="forms.home.join_cta.successLabel" class="field-input" /></div>
              </div>
            </div>
          </SectionCard>

          <!-- À PROPOS SECTION (sur la home) -->
          <SectionCard title="Section À propos (bas de la page d'accueil)" icon="info" color="purple" :saving="saving['home_about_section']" :saved="saved['home_about_section']" @save="saveSection('home','about_section')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.home.about_section.heading" class="field-input" /></div>
              <div><label class="field-label">Description</label><textarea v-model="forms.home.about_section.description" rows="2" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-1 gap-3">
                <div v-for="n in [1,2,3]" :key="n" class="bg-gray-950 rounded-xl p-3 border border-gray-800">
                  <div class="grid grid-cols-2 gap-3">
                    <div><label class="field-label">Carte {{ n }} — Titre</label><input v-model="forms.home.about_section[`feat${n}Title`]" class="field-input" /></div>
                    <div><label class="field-label">Carte {{ n }} — Texte</label><input v-model="forms.home.about_section[`feat${n}Text`]" class="field-input" /></div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- CTA FINAL -->
          <SectionCard title='CTA Final — "Commence Ton Voyage"' icon="rocket" color="yellow" :saving="saving['home_cta_final']" :saved="saved['home_cta_final']" @save="saveSection('home','cta_final')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.home.cta_final.heading" class="field-input" /></div>
              <div><label class="field-label">Description</label><textarea v-model="forms.home.cta_final.description" rows="2" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Lien téléphone (ex: tel:+22890XXXXXX)</label><input v-model="forms.home.cta_final.phone" class="field-input" /></div>
                <div><label class="field-label">Texte du bouton téléphone</label><input v-model="forms.home.cta_final.phoneLinkText" class="field-input" /></div>
              </div>
            </div>
          </SectionCard>

        </div>

        <!-- ═══════════════════════════════ À PROPOS TAB ═══════════════════════════════ -->
        <div v-else-if="activeTab === 'about'" class="space-y-4">

          <!-- HERO -->
          <SectionCard title="En-tête page À Propos" color="yellow" :saving="saving['about_hero']" :saved="saved['about_hero']" @save="saveSection('about','hero')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Badge</label><input v-model="forms.about.hero.badge" class="field-input" /></div>
                <div><label class="field-label">Texte bouton CTA</label><input v-model="forms.about.hero.ctaText" class="field-input" /></div>
              </div>
              <div><label class="field-label">Titre principal</label><input v-model="forms.about.hero.title" class="field-input" /></div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Ligne 1 (texte)</label><input v-model="forms.about.hero.line1" class="field-input" /></div>
                <div><label class="field-label">Ligne 1 (mot jaune)</label><input v-model="forms.about.hero.line1Highlight" class="field-input" /></div>
                <div><label class="field-label">Ligne 2 (texte)</label><input v-model="forms.about.hero.line2" class="field-input" /></div>
                <div><label class="field-label">Ligne 2 (mot jaune)</label><input v-model="forms.about.hero.line2Highlight" class="field-input" /></div>
              </div>
              <div>
                <label class="field-label">Image de fond</label>
                <AdminImageField v-model="forms.about.hero.backgroundImage" :fallbackSrc="forms.about.hero.backgroundImage || fb.aboutBg" previewHeight="180px" />
              </div>
            </div>
          </SectionCard>

          <!-- HISTOIRE -->
          <SectionCard title="Notre Histoire" color="blue" :saving="saving['about_histoire']" :saved="saved['about_histoire']" @save="saveSection('about','histoire')">
            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-4">
                <div><label class="field-label">Titre</label><input v-model="forms.about.histoire.heading" class="field-input" /></div>
                <div><label class="field-label">Citation</label><textarea v-model="forms.about.histoire.quote" rows="2" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Paragraphe 1</label><textarea v-model="forms.about.histoire.text1" rows="3" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Paragraphe 2</label><textarea v-model="forms.about.histoire.text2" rows="3" class="field-input resize-none"></textarea></div>
              </div>
              <div>
                <label class="field-label">Image</label>
                <AdminImageField v-model="forms.about.histoire.image" :fallbackSrc="forms.about.histoire.image || fb.aboutHist" previewHeight="260px" />
              </div>
            </div>
          </SectionCard>

          <!-- VISION & MISSION -->
          <SectionCard title="Vision & Mission" color="green" :saving="saving['about_vision_mission']" :saved="saved['about_vision_mission']" @save="saveSection('about','vision_mission')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Titre Vision</label><input v-model="forms.about.vision_mission.visionTitle" class="field-input" /></div>
                <div><label class="field-label">Titre Mission</label><input v-model="forms.about.vision_mission.missionTitle" class="field-input" /></div>
                <div><label class="field-label">Vision — Paragraphe 1</label><textarea v-model="forms.about.vision_mission.visionText1" rows="3" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Vision — Paragraphe 2</label><textarea v-model="forms.about.vision_mission.visionText2" rows="3" class="field-input resize-none"></textarea></div>
                <div class="col-span-2"><label class="field-label">Mission — Texte</label><textarea v-model="forms.about.vision_mission.missionText" rows="3" class="field-input resize-none"></textarea></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="field-label">Image Vision</label>
                  <AdminImageField v-model="forms.about.vision_mission.image1" :fallbackSrc="forms.about.vision_mission.image1 || fb.aboutVis1" previewHeight="180px" />
                </div>
                <div>
                  <label class="field-label">Image Mission</label>
                  <AdminImageField v-model="forms.about.vision_mission.image2" :fallbackSrc="forms.about.vision_mission.image2 || fb.aboutVis2" previewHeight="180px" />
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- VALEURS -->
          <SectionCard title="Nos Valeurs Fondamentales" color="purple" :saving="saving['about_valeurs']" :saved="saved['about_valeurs']" @save="saveSection('about','valeurs')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.about.valeurs.heading" class="field-input" /></div>
              <div><label class="field-label">Description</label><textarea v-model="forms.about.valeurs.description" rows="2" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="n in 3" :key="n" class="bg-gray-950 rounded-xl p-3 border border-gray-800 space-y-2">
                  <div><label class="field-label">Valeur {{ n }} — Titre</label><input v-model="forms.about.valeurs[`val${n}Title`]" class="field-input" /></div>
                  <div><label class="field-label">Valeur {{ n }} — Description</label><textarea v-model="forms.about.valeurs[`val${n}Desc`]" rows="2" class="field-input resize-none"></textarea></div>
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- MÉTHODE -->
          <SectionCard title="Notre Méthode" color="yellow" :saving="saving['about_methode']" :saved="saved['about_methode']" @save="saveSection('about','methode')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.about.methode.heading" class="field-input" /></div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Paragraphe 1</label><textarea v-model="forms.about.methode.text1" rows="3" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Paragraphe 2</label><textarea v-model="forms.about.methode.text2" rows="3" class="field-input resize-none"></textarea></div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="n in 4" :key="n"><label class="field-label">Point {{ n }}</label><input v-model="forms.about.methode[`point${n}`]" class="field-input" /></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(methImg, i) in [fb.aboutMeth1, fb.aboutMeth2, fb.aboutMeth3, fb.aboutMeth4]" :key="i">
                  <label class="field-label">Image {{ i + 1 }}</label>
                  <AdminImageField v-model="forms.about.methode[`image${i+1}`]" :fallbackSrc="forms.about.methode[`image${i+1}`] || methImg" previewHeight="140px" />
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- DEUX SITES -->
          <SectionCard title="Nos Deux Sites de Formation" color="blue" :saving="saving['about_deux_sites']" :saved="saved['about_deux_sites']" @save="saveSection('about','deux_sites')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Titre</label><input v-model="forms.about.deux_sites.heading" class="field-input" /></div>
                <div><label class="field-label">Distance entre sites</label><input v-model="forms.about.deux_sites.distance" class="field-input" /></div>
                <div class="col-span-2"><label class="field-label">Description</label><textarea v-model="forms.about.deux_sites.description" rows="2" class="field-input resize-none"></textarea></div>
              </div>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-gray-950 rounded-xl p-3 border border-gray-800 space-y-3">
                  <p class="text-xs font-bold text-yellow-400 uppercase tracking-wider">Site 1 — Siège</p>
                  <div><label class="field-label">Nom</label><input v-model="forms.about.deux_sites.site1Name" class="field-input" /></div>
                  <div><label class="field-label">Description</label><textarea v-model="forms.about.deux_sites.site1Desc" rows="2" class="field-input resize-none"></textarea></div>
                  <div><label class="field-label">Adresse</label><input v-model="forms.about.deux_sites.site1Addr" class="field-input" /></div>
                  <AdminImageField v-model="forms.about.deux_sites.site1Image" :fallbackSrc="forms.about.deux_sites.site1Image || fb.aboutBat1" previewHeight="160px" />
                </div>
                <div class="bg-gray-950 rounded-xl p-3 border border-gray-800 space-y-3">
                  <p class="text-xs font-bold text-yellow-400 uppercase tracking-wider">Site 2 — Annexe</p>
                  <div><label class="field-label">Nom</label><input v-model="forms.about.deux_sites.site2Name" class="field-input" /></div>
                  <div><label class="field-label">Description</label><textarea v-model="forms.about.deux_sites.site2Desc" rows="2" class="field-input resize-none"></textarea></div>
                  <div><label class="field-label">Adresse</label><input v-model="forms.about.deux_sites.site2Addr" class="field-input" /></div>
                  <AdminImageField v-model="forms.about.deux_sites.site2Image" :fallbackSrc="forms.about.deux_sites.site2Image || fb.aboutBat2" previewHeight="160px" />
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- FORMATION -->
          <SectionCard title="Formation Complète et Diversifiée" color="green" :saving="saving['about_formation']" :saved="saved['about_formation']" @save="saveSection('about','formation')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.about.formation.heading" class="field-input" /></div>
              <div><label class="field-label">Description</label><textarea v-model="forms.about.formation.description" rows="2" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="n in 3" :key="n" class="bg-gray-950 rounded-xl p-3 border border-gray-800 space-y-2">
                  <div><label class="field-label">Carte {{ n }} — Titre</label><input v-model="forms.about.formation[`card${n}Title`]" class="field-input" /></div>
                  <div><label class="field-label">Carte {{ n }} — Description</label><textarea v-model="forms.about.formation[`card${n}Desc`]" rows="3" class="field-input resize-none"></textarea></div>
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- DISTINCTIONS -->
          <SectionCard title="Distinctions & Collaborations" color="purple" :saving="saving['about_distinctions']" :saved="saved['about_distinctions']" @save="saveSection('about','distinctions')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.about.distinctions.heading" class="field-input" /></div>
              <div><label class="field-label">Description</label><textarea v-model="forms.about.distinctions.description" rows="2" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="n in 3" :key="n" class="bg-gray-950 rounded-xl p-3 border border-gray-800 space-y-2">
                  <div><label class="field-label">Distinction {{ n }} — Année</label><input v-model="forms.about.distinctions[`d${n}Year`]" class="field-input" /></div>
                  <div><label class="field-label">Distinction {{ n }} — Texte</label><textarea v-model="forms.about.distinctions[`d${n}Text`]" rows="3" class="field-input resize-none"></textarea></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Texte membre (SAER-TOGO)</label><input v-model="forms.about.distinctions.memberText" class="field-input" /></div>
                <div><label class="field-label">Titre collaboration</label><input v-model="forms.about.distinctions.collab1Title" class="field-input" /></div>
                <div class="col-span-2"><label class="field-label">Texte collaboration</label><textarea v-model="forms.about.distinctions.collab1Text" rows="3" class="field-input resize-none"></textarea></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="field-label">Image Distinctions</label>
                  <AdminImageField v-model="forms.about.distinctions.image1" :fallbackSrc="forms.about.distinctions.image1 || fb.aboutDist1" previewHeight="200px" />
                </div>
                <div>
                  <label class="field-label">Image Collaborations</label>
                  <AdminImageField v-model="forms.about.distinctions.image2" :fallbackSrc="forms.about.distinctions.image2 || fb.aboutDist2" previewHeight="200px" />
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- CTA -->
          <SectionCard title="Appel à l'action (CTA)" color="yellow" :saving="saving['about_cta']" :saved="saved['about_cta']" @save="saveSection('about','cta')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.about.cta.heading" class="field-input" /></div>
              <div><label class="field-label">Description</label><textarea v-model="forms.about.cta.description" rows="2" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Bouton 1 (Admissions)</label><input v-model="forms.about.cta.btn1Text" class="field-input" /></div>
                <div><label class="field-label">Bouton 2 (Contact)</label><input v-model="forms.about.cta.btn2Text" class="field-input" /></div>
              </div>
            </div>
          </SectionCard>

        </div>

        <!-- ═══════════════════════════════ ADMISSIONS TAB ═══════════════════════════════ -->
        <div v-else-if="activeTab === 'admissions'" class="space-y-4">

          <!-- HERO ADMISSIONS -->
          <SectionCard title="En-tête page Admissions" color="yellow" :saving="saving['admissions_hero']" :saved="saved['admissions_hero']" @save="saveSection('admissions','hero')">
            <div class="grid grid-cols-2 gap-4">
              <div><label class="field-label">Badge (ex: Admission 2025)</label><input v-model="forms.admissions.hero.badge" class="field-input" /></div>
              <div><label class="field-label">Texte du bouton CTA</label><input v-model="forms.admissions.hero.ctaText" class="field-input" /></div>
              <div class="col-span-2"><label class="field-label">Titre principal</label><input v-model="forms.admissions.hero.title" class="field-input" /></div>
              <div><label class="field-label">Label ligne 1 (ex: CAP & BT :)</label><input v-model="forms.admissions.hero.capBtLabel" class="field-input" /></div>
              <div><label class="field-label">Date ligne 1 (en jaune)</label><input v-model="forms.admissions.hero.capBtDate" class="field-input" placeholder="15 SEPTEMBRE 2025" /></div>
              <div><label class="field-label">Label ligne 2 (ex: MODULAIRE :)</label><input v-model="forms.admissions.hero.modulaireLabel" class="field-input" /></div>
              <div><label class="field-label">Date ligne 2 (en jaune)</label><input v-model="forms.admissions.hero.modulaireDate" class="field-input" placeholder="13 AVRIL 2026" /></div>
              <div class="col-span-2">
                <label class="field-label">Image de fond du héro</label>
                <AdminImageField v-model="forms.admissions.hero.backgroundImage" storagePath="admissions/hero/bg" previewHeight="160px" :fallbackSrc="fb.admBg" />
              </div>
            </div>
          </SectionCard>

          <!-- FICHES & DOCUMENTS -->
          <SectionCard title="Section Fiches & Documents" color="blue" :saving="saving['admissions_fiches']" :saved="saved['admissions_fiches']" @save="saveSection('admissions','fiches')">
            <div class="space-y-4">
              <div><label class="field-label">Titre de la section</label><input v-model="forms.admissions.fiches.heading" class="field-input" /></div>
              <div><label class="field-label">Texte encadré "Important"</label><textarea v-model="forms.admissions.fiches.infoText" rows="3" class="field-input resize-none"></textarea></div>
            </div>
            <div class="mt-4 flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <svg class="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <p class="text-blue-300 text-xs">Les images et documents PDF de la galerie sont gérés dans la section <strong>Admissions</strong> du menu.</p>
            </div>
          </SectionCard>

          <!-- CONDITIONS D'ADMISSION -->
          <SectionCard title="Conditions d'Admission" color="green" :saving="saving['admissions_conditions']" :saved="saved['admissions_conditions']" @save="saveSection('admissions','conditions')">
            <div class="space-y-5">
              <div><label class="field-label">Titre de la section</label><input v-model="forms.admissions.conditions.heading" class="field-input" /></div>
              <div class="grid grid-cols-2 gap-6">
                <!-- CAP & BT -->
                <div class="bg-gray-950 rounded-xl p-4 border border-gray-800">
                  <div><label class="field-label">Titre carte CAP & BT</label><input v-model="forms.admissions.conditions.capBtTitle" class="field-input mb-3" /></div>
                  <div v-for="n in 5" :key="'cap'+n">
                    <label class="field-label">Condition {{ n }}</label>
                    <input v-model="forms.admissions.conditions['cap'+n]" class="field-input mb-2" />
                  </div>
                </div>
                <!-- MODULAIRE -->
                <div class="bg-gray-950 rounded-xl p-4 border border-gray-800">
                  <div><label class="field-label">Titre carte Formation Modulaire</label><input v-model="forms.admissions.conditions.modulaireTitle" class="field-input mb-3" /></div>
                  <div v-for="n in 5" :key="'mod'+n">
                    <label class="field-label">Condition {{ n }}</label>
                    <input v-model="forms.admissions.conditions['mod'+n]" class="field-input mb-2" />
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <!-- CTA ADMISSIONS -->
          <SectionCard title='CTA — "Prêt à nous rejoindre ?"' color="purple" :saving="saving['admissions_cta']" :saved="saved['admissions_cta']" @save="saveSection('admissions','cta')">
            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-4">
                <div><label class="field-label">Titre</label><input v-model="forms.admissions.cta.heading" class="field-input" /></div>
                <div><label class="field-label">Description</label><textarea v-model="forms.admissions.cta.description" rows="3" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Texte du bouton</label><input v-model="forms.admissions.cta.buttonText" class="field-input" /></div>
              </div>
              <div>
                <label class="field-label">Image de droite</label>
                <AdminImageField v-model="forms.admissions.cta.image" storagePath="admissions/cta/image" previewHeight="200px" :fallbackSrc="fb.admCta" />
              </div>
            </div>
          </SectionCard>

        </div>

        <!-- ═══════════════════════════════ PROGRAMMES TAB ══════════════════════════════ -->
        <div v-else-if="activeTab === 'programmes'" class="space-y-4">

          <!-- HERO -->
          <SectionCard title="En-tête page Programmes" color="yellow" :saving="saving['programmes_hero']" :saved="saved['programmes_hero']" @save="saveSection('programmes','hero')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Badge</label><input v-model="forms.programmes.hero.badge" class="field-input" /></div>
                <div><label class="field-label">Titre</label><input v-model="forms.programmes.hero.title" class="field-input" /></div>
              </div>
              <div><label class="field-label">Description (sous le titre)</label><textarea v-model="forms.programmes.hero.description" rows="2" class="field-input resize-none"></textarea></div>
              <div>
                <label class="field-label">Image de fond</label>
                <AdminImageField v-model="forms.programmes.hero.backgroundImage" :fallbackSrc="forms.programmes.hero.backgroundImage || fb.progBg" previewHeight="180px" />
              </div>
            </div>
          </SectionCard>

          <!-- INTRO -->
          <SectionCard title="Approche Pédagogique" color="blue" :saving="saving['programmes_intro']" :saved="saved['programmes_intro']" @save="saveSection('programmes','intro')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.programmes.intro.heading" class="field-input" /></div>
              <div><label class="field-label">Texte</label><textarea v-model="forms.programmes.intro.text" rows="3" class="field-input resize-none"></textarea></div>
            </div>
          </SectionCard>

          <!-- CAP -->
          <SectionCard title="CAP Électricité d'Équipement" color="blue" :saving="saving['programmes_cap']" :saved="saved['programmes_cap']" @save="saveSection('programmes','cap')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Titre</label><input v-model="forms.programmes.cap.heading" class="field-input" /></div>
                <div><label class="field-label">Sous-titre (durée)</label><input v-model="forms.programmes.cap.subtitle" class="field-input" /></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Niveau de qualification</label><textarea v-model="forms.programmes.cap.qualifText" rows="2" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Durée de la formation</label><textarea v-model="forms.programmes.cap.dureeText" rows="2" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Objectifs</label><textarea v-model="forms.programmes.cap.objectifsText" rows="3" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Débouchés professionnels</label><textarea v-model="forms.programmes.cap.debouchesText" rows="3" class="field-input resize-none"></textarea></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Label Entrée</label><input v-model="forms.programmes.cap.entreeLabel" class="field-input" /></div>
                <div><label class="field-label">Sous-titre Entrée</label><input v-model="forms.programmes.cap.entreeSub" class="field-input" /></div>
                <div><label class="field-label">Label Durée</label><input v-model="forms.programmes.cap.dureeLabel" class="field-input" /></div>
                <div><label class="field-label">Sous-titre Durée / Rentrée</label><input v-model="forms.programmes.cap.dureeSub" class="field-input" /></div>
              </div>
              <div>
                <label class="field-label">Image</label>
                <AdminImageField v-model="forms.programmes.cap.image" :fallbackSrc="forms.programmes.cap.image || fb.progCap" previewHeight="200px" />
              </div>
            </div>
          </SectionCard>

          <!-- BT -->
          <SectionCard title="BT Électrotechnique" color="yellow" :saving="saving['programmes_bt']" :saved="saved['programmes_bt']" @save="saveSection('programmes','bt')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Titre</label><input v-model="forms.programmes.bt.heading" class="field-input" /></div>
                <div><label class="field-label">Sous-titre</label><input v-model="forms.programmes.bt.subtitle" class="field-input" /></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Niveau de qualification</label><textarea v-model="forms.programmes.bt.qualifText" rows="2" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Durée de la formation</label><textarea v-model="forms.programmes.bt.dureeText" rows="2" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Objectifs</label><textarea v-model="forms.programmes.bt.objectifsText" rows="3" class="field-input resize-none"></textarea></div>
                <div><label class="field-label">Débouchés professionnels</label><textarea v-model="forms.programmes.bt.debouchesText" rows="3" class="field-input resize-none"></textarea></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Label Entrée</label><input v-model="forms.programmes.bt.entreeLabel" class="field-input" /></div>
                <div><label class="field-label">Sous-titre Entrée</label><input v-model="forms.programmes.bt.entreeSub" class="field-input" /></div>
                <div><label class="field-label">Label Durée</label><input v-model="forms.programmes.bt.dureeLabel" class="field-input" /></div>
                <div><label class="field-label">Sous-titre Durée / Rentrée</label><input v-model="forms.programmes.bt.dureeSub" class="field-input" /></div>
              </div>
              <div>
                <label class="field-label">Image</label>
                <AdminImageField v-model="forms.programmes.bt.image" :fallbackSrc="forms.programmes.bt.image || fb.progBt" previewHeight="200px" />
              </div>
            </div>
          </SectionCard>

          <!-- MODULAIRE -->
          <SectionCard title="Formations Modulaires" color="green" :saving="saving['programmes_modulaire']" :saved="saved['programmes_modulaire']" @save="saveSection('programmes','modulaire')">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Titre</label><input v-model="forms.programmes.modulaire.heading" class="field-input" /></div>
                <div><label class="field-label">Sous-titre</label><input v-model="forms.programmes.modulaire.subtitle" class="field-input" /></div>
              </div>
              <div><label class="field-label">Vue d'ensemble</label><textarea v-model="forms.programmes.modulaire.overviewText" rows="4" class="field-input resize-none"></textarea></div>
              <div><label class="field-label">Conditions d'admission</label><textarea v-model="forms.programmes.modulaire.conditionsText" rows="2" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-950 rounded-xl p-3 border border-gray-800 space-y-2">
                  <p class="text-xs font-bold text-green-400 uppercase tracking-wider">Niveau 1</p>
                  <div><label class="field-label">Titre option</label><input v-model="forms.programmes.modulaire.niveau1Title" class="field-input" /></div>
                  <div><label class="field-label">Label filière</label><input v-model="forms.programmes.modulaire.niveau1Label" class="field-input" /></div>
                  <div><label class="field-label">Description</label><textarea v-model="forms.programmes.modulaire.niveau1Text" rows="4" class="field-input resize-none"></textarea></div>
                </div>
                <div class="bg-gray-950 rounded-xl p-3 border border-gray-800 space-y-2">
                  <p class="text-xs font-bold text-green-400 uppercase tracking-wider">Niveau 2</p>
                  <div><label class="field-label">Titre option</label><input v-model="forms.programmes.modulaire.niveau2Title" class="field-input" /></div>
                  <div><label class="field-label">Label filière</label><input v-model="forms.programmes.modulaire.niveau2Label" class="field-input" /></div>
                  <div><label class="field-label">Description</label><textarea v-model="forms.programmes.modulaire.niveau2Text" rows="4" class="field-input resize-none"></textarea></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Label Entrée</label><input v-model="forms.programmes.modulaire.entreeLabel" class="field-input" /></div>
                <div><label class="field-label">Sous-titre Entrée</label><input v-model="forms.programmes.modulaire.entreeSub" class="field-input" /></div>
                <div><label class="field-label">Label Durée</label><input v-model="forms.programmes.modulaire.dureeLabel" class="field-input" /></div>
                <div><label class="field-label">Sous-titre Durée / Rentrée</label><input v-model="forms.programmes.modulaire.dureeSub" class="field-input" /></div>
              </div>
              <div>
                <label class="field-label">Image</label>
                <AdminImageField v-model="forms.programmes.modulaire.image" :fallbackSrc="forms.programmes.modulaire.image || fb.progMod" previewHeight="200px" />
              </div>
            </div>
          </SectionCard>

          <!-- CTA -->
          <SectionCard title="Appel à l'action (CTA)" color="purple" :saving="saving['programmes_cta']" :saved="saved['programmes_cta']" @save="saveSection('programmes','cta')">
            <div class="space-y-4">
              <div><label class="field-label">Titre</label><input v-model="forms.programmes.cta.heading" class="field-input" /></div>
              <div><label class="field-label">Texte</label><textarea v-model="forms.programmes.cta.text" rows="3" class="field-input resize-none"></textarea></div>
              <div class="grid grid-cols-2 gap-4">
                <div><label class="field-label">Bouton 1 (S'inscrire)</label><input v-model="forms.programmes.cta.btn1Text" class="field-input" /></div>
                <div><label class="field-label">Bouton 2 (Plus d'infos)</label><input v-model="forms.programmes.cta.btn2Text" class="field-input" /></div>
              </div>
            </div>
          </SectionCard>

        </div>

        <!-- ═══════════════════════════════ CONTACT TAB ═══════════════════════════════ -->
        <div v-else-if="activeTab === 'contact'" class="space-y-4">
          <SectionCard title="Informations de contact" icon="phone" color="yellow" :saving="saving['contact_info']" :saved="saved['contact_info']" @save="saveSection('contact','info')">
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2"><label class="field-label">Adresse</label><input v-model="forms.contact.info.address" class="field-input" /></div>
              <div><label class="field-label">Email principal</label><input v-model="forms.contact.info.email1" type="email" class="field-input" /></div>
              <div><label class="field-label">Email admissions</label><input v-model="forms.contact.info.email2" type="email" class="field-input" /></div>
              <div><label class="field-label">Téléphone 1</label><input v-model="forms.contact.info.phone1" class="field-input" /></div>
              <div><label class="field-label">Téléphone 2</label><input v-model="forms.contact.info.phone2" class="field-input" /></div>
              <div class="col-span-2"><label class="field-label">Horaires d'ouverture</label><input v-model="forms.contact.info.hours" class="field-input" /></div>
            </div>
          </SectionCard>
          <div class="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <svg class="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-blue-300 text-sm">Les informations sauvegardées ici s'affichent sur la page Contact du site public.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import AdminSidebar from '../components/AdminSidebar.vue';
import AdminImageField from '../components/AdminImageField.vue';
import AdminVideoField from '../components/AdminVideoField.vue';
import SectionCard from '../components/AdminSectionCard.vue';
import { getSiteSection, saveSiteSection, SITE_DEFAULTS } from '../services/siteContentService';

export default {
  name: 'AdminSiteEditor',
  components: { AdminSidebar, AdminImageField, AdminVideoField, SectionCard },
  setup() {
    const loading = ref(true);
    const globalSaved = ref(false);
    const tabs = [
      { id: 'global', label: 'InfoBar' },
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'À Propos' },
      { id: 'admissions', label: 'Admissions' },
      { id: 'programmes', label: 'Programmes' },
      { id: 'contact', label: 'Contact' },
    ];
    const activeTab = ref('home');
    const saving = reactive({});
    const saved = reactive({});

    // Deep clone of all defaults into reactive forms
    const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
    const forms = reactive({
      global: deepClone(SITE_DEFAULTS.global),
      home: deepClone(SITE_DEFAULTS.home),
      about: deepClone(SITE_DEFAULTS.about),
      admissions: deepClone(SITE_DEFAULTS.admissions),
      programmes: deepClone(SITE_DEFAULTS.programmes),
      contact: deepClone(SITE_DEFAULTS.contact),
    });

    const loadAll = async () => {
      loading.value = true;
      try {
        const tasks = [];
        for (const [pageId, sections] of Object.entries(SITE_DEFAULTS)) {
          for (const sectionId of Object.keys(sections)) {
            tasks.push(
              getSiteSection(pageId, sectionId).then((data) => {
                if (forms[pageId]?.[sectionId] !== undefined) {
                  Object.assign(forms[pageId][sectionId], data);
                }
              })
            );
          }
        }
        await Promise.all(tasks);
      } catch (err) {
        console.error('Error loading site content:', err);
      } finally {
        loading.value = false;
      }
    };

    const saveSection = async (pageId, sectionId) => {
      const key = `${pageId}_${sectionId}`;
      saving[key] = true;
      saved[key] = false;
      try {
        await saveSiteSection(pageId, sectionId, { ...forms[pageId][sectionId] });
        saved[key] = true;
        globalSaved.value = true;
        setTimeout(() => { saved[key] = false; globalSaved.value = false; }, 3000);
      } catch (err) {
        console.error(`Error saving ${pageId}/${sectionId}:`, err);
      } finally {
        saving[key] = false;
      }
    };

    // Sauvegarde combinée : vidéo (hero_media) + infos session (info_box)
    const saveVideoAndInfo = async () => {
      const key = 'home_video_info';
      saving[key] = true;
      saved[key] = false;
      try {
        await Promise.all([
          saveSiteSection('home', 'hero_media', { ...forms.home.hero_media }),
          saveSiteSection('home', 'info_box', { ...forms.home.info_box }),
        ]);
        saved[key] = true;
        globalSaved.value = true;
        setTimeout(() => { saved[key] = false; globalSaved.value = false; }, 3000);
      } catch (err) {
        console.error('Error saving video/info:', err);
      } finally {
        saving[key] = false;
      }
    };

    onMounted(loadAll);

    // Local fallback images shown in admin thumbnails when no Firebase image is saved yet
    const fb = {
      slide1:      new URL('../assets/images/_DSC4881-1200.webp', import.meta.url).href,
      slide2:      new URL('../assets/images/hero1.jpg', import.meta.url).href,
      slide3:      new URL('../assets/images/exam4article.jpg', import.meta.url).href,
      storyImg:    new URL('../assets/images/histoire.jpg', import.meta.url).href,
      joinUsImg:   new URL('../assets/images/_DSC4676-1200.jpg', import.meta.url).href,
      portesMain:  new URL('../assets/images/imageprin01.jpeg', import.meta.url).href,
      admBg:       new URL('../assets/images/_DSC4826.jpg', import.meta.url).href,
      admCta:      new URL('../assets/images/distinction1-1200.jpg', import.meta.url).href,
      progBg:      new URL('../assets/images/pratique-1200.jpg', import.meta.url).href,
      progCap:     new URL('../assets/images/théorie-1200.jpg', import.meta.url).href,
      progBt:      new URL('../assets/images/_DSC4864.jpg', import.meta.url).href,
      progMod:     new URL('../assets/images/théorie-1200.jpg', import.meta.url).href,
      aboutBg:     new URL('../assets/images/_DSC4828.jpg', import.meta.url).href,
      aboutHist:   new URL('../assets/images/distinction3-1200.jpg', import.meta.url).href,
      aboutVis1:   new URL('../assets/images/stage-58.jpg', import.meta.url).href,
      aboutVis2:   new URL('../assets/images/demons.jpg', import.meta.url).href,
      aboutMeth1:  new URL('../assets/images/théorie-1200.jpg', import.meta.url).href,
      aboutMeth2:  new URL('../assets/images/pratique-1200.jpg', import.meta.url).href,
      aboutMeth3:  new URL('../assets/images/stage01.jpg', import.meta.url).href,
      aboutMeth4:  new URL('../assets/images/cfr.jpg', import.meta.url).href,
      aboutBat1:   new URL('../assets/images/batiment1-1200.jpg', import.meta.url).href,
      aboutBat2:   new URL('../assets/images/batiment2-1200.jpg', import.meta.url).href,
      aboutDist1:  new URL('../assets/images/distinction1-1200.jpg', import.meta.url).href,
      aboutDist2:  new URL('../assets/images/distinction2-1200.jpg', import.meta.url).href,
    }
    const partnerFallbacks = [
      new URL('../assets/images/egent-logo.0384ff91.jpg', import.meta.url).href,
      new URL('../assets/images/part2.e6602420.png', import.meta.url).href,
      new URL('../assets/images/part3.fe0f87cf.jpg', import.meta.url).href,
      new URL('../assets/images/télécharger.jpg', import.meta.url).href,
    ]
    const testimonialFallbacks = [
      new URL('../assets/images/temois1.jpg', import.meta.url).href,
      new URL('../assets/images/temoins02.jpg', import.meta.url).href,
      new URL('../assets/images/temoins3.jpg', import.meta.url).href,
    ]

    return {
      tabs, activeTab, loading, globalSaved, forms, saving, saved, saveSection, saveVideoAndInfo,
      fb, partnerFallbacks, testimonialFallbacks,
    };
  },
};
</script>

<style scoped>
.field-label {
  @apply block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider;
}
.field-input {
  @apply w-full bg-gray-950 text-white px-3 py-2.5 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-sm placeholder-gray-600;
}
</style>
