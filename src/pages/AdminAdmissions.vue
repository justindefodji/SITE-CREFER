<template>
  <div class="min-h-screen bg-gray-50 flex">
    <AdminSidebar />

    <div class="ml-64 flex-1 flex flex-col min-h-screen">
      <!-- Top Bar -->
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 class="text-xl font-bold text-gray-900">Admissions</h1>
          <p class="text-xs text-gray-500 mt-0.5">Images et documents d'admission</p>
        </div>
        <button
          @click="openMigrationModal"
          :disabled="isMigrating"
          class="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-all text-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <span>{{ isMigrating ? 'Migration...' : 'Importer les données' }}</span>
        </button>
      </header>

      <main class="flex-1 px-8 py-8">
        <div class="grid lg:grid-cols-2 gap-6">

          <!-- COLONNE GAUCHE: Images d'Admission -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-sm font-bold text-gray-900">Images d'Admission</h2>
                  <p class="text-xs text-gray-500">{{ admissionImages.length }} image(s)</p>
                </div>
              </div>
              <button
                @click="openImageModal"
                class="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all text-xs"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                </svg>
                Ajouter
              </button>
            </div>

            <div class="flex-1 p-4">
              <!-- Loading -->
              <div v-if="imagesLoading" class="grid grid-cols-2 gap-3">
                <div v-for="i in 4" :key="i" class="rounded-xl bg-gray-100 animate-pulse h-36"></div>
              </div>

              <!-- Empty -->
              <div v-else-if="admissionImages.length === 0" class="flex flex-col items-center justify-center py-12 text-center">
                <svg class="w-10 h-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <p class="text-sm text-gray-500">Aucune image d'admission</p>
              </div>

              <!-- Grid -->
              <div v-else class="grid grid-cols-2 gap-3">
                <div
                  v-for="image in admissionImages"
                  :key="image.id"
                  class="group relative rounded-xl overflow-hidden bg-gray-100 shadow-sm aspect-[4/3]"
                >
                  <img :src="image.image" :alt="image.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <p class="text-white text-xs font-semibold truncate mb-2">{{ image.title }}</p>
                    <div class="flex gap-1.5">
                      <button @click="editImage(image)" class="flex-1 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs font-bold rounded-lg transition-colors">Modifier</button>
                      <button @click="deleteImageConfirm(image)" class="flex-1 py-1.5 bg-red-500 hover:bg-red-400 text-white text-xs font-bold rounded-lg transition-colors">Supprimer</button>
                    </div>
                  </div>
                  <div class="absolute top-2 left-2">
                    <span class="text-xs bg-black/60 text-white px-1.5 py-0.5 rounded-md backdrop-blur-sm">{{ image.category }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- COLONNE DROITE: Documents PDF -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-sm font-bold text-gray-900">Documents PDF</h2>
                  <p class="text-xs text-gray-500">{{ admissionDocuments.length }} document(s)</p>
                </div>
              </div>
              <button
                @click="openDocumentModal"
                class="inline-flex items-center gap-1.5 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all text-xs"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                </svg>
                Ajouter
              </button>
            </div>

            <div class="flex-1 p-4">
              <!-- Loading -->
              <div v-if="documentsLoading" class="space-y-3">
                <div v-for="i in 4" :key="i" class="h-16 rounded-xl bg-gray-100 animate-pulse"></div>
              </div>

              <!-- Empty -->
              <div v-else-if="admissionDocuments.length === 0" class="flex flex-col items-center justify-center py-12 text-center">
                <svg class="w-10 h-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <p class="text-sm text-gray-500">Aucun document PDF</p>
              </div>

              <!-- List -->
              <div v-else class="space-y-2">
                <div
                  v-for="doc in admissionDocuments"
                  :key="doc.id"
                  class="group flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all"
                >
                  <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-900 truncate">{{ doc.title }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ doc.type }}</p>
                    <div class="flex items-center gap-2 mt-1 text-xs text-gray-400">
                      <span>{{ formatFileSize(getApproximateFileSize(doc.document)) }}</span>
                      <span>•</span>
                      <span>{{ formatDate(doc.createdAt?.toDate?.()) }}</span>
                    </div>
                  </div>
                  <div class="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <button @click="editDocument(doc)" class="w-8 h-8 flex items-center justify-center bg-yellow-100 hover:bg-yellow-400 text-yellow-700 hover:text-gray-900 rounded-lg transition-all">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                    </button>
                    <button @click="deleteDocumentConfirm(doc)" class="w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-all">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- ========== MODAL IMAGE ========== -->
    <Teleport to="body">
      <div v-if="showImageModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md my-8 overflow-hidden">
          <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50">
            <h2 class="text-lg font-bold text-gray-900">{{ editingImageId ? 'Modifier l\'image' : 'Ajouter une image' }}</h2>
            <button @click="closeImageModal" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-200 rounded-lg transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <form @submit.prevent="saveImage" class="p-6 space-y-4 max-h-[calc(100vh-220px)] overflow-y-auto">
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Titre *</label>
              <input v-model="imageFormData.title" type="text" placeholder="Titre"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" required/>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Catégorie *</label>
              <select v-model="imageFormData.category"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" required>
                <option value="">Choisir...</option>
                <option value="Fiche Modulaire">Fiche Modulaire</option>
                <option value="Fiche BT/CAP">Fiche BT/CAP</option>
                <option value="Outils TP">Outils TP</option>
                <option value="Flyer">Flyer</option>
                <option value="Renseignement">Renseignement</option>
                <option value="Autres">Autres</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Description</label>
              <textarea v-model="imageFormData.description" placeholder="Description courte" rows="2"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm resize-none"></textarea>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Image *</label>
              <div
                @dragover.prevent="dragOverImage = true"
                @dragleave.prevent="dragOverImage = false"
                @drop.prevent="handleImageDrop"
                :class="['border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all', dragOverImage ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300']"
                @click="imageInput.click()"
              >
                <input ref="imageInput" type="file" accept="image/*" class="hidden" @change="handleImageSelect"/>
                <div v-if="!imageFormData.image" class="space-y-2">
                  <svg class="w-8 h-8 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <p class="text-sm text-gray-500">Glissez ou cliquez</p>
                </div>
                <div v-else class="space-y-2" @click.stop>
                  <img :src="imageFormData.image" alt="Preview" class="h-24 object-cover mx-auto rounded-lg"/>
                  <button type="button" @click="removeImage" class="text-xs text-red-500 hover:text-red-700 font-semibold">Retirer</button>
                </div>
              </div>
            </div>
            <div class="flex gap-3 pt-2 border-t border-gray-100">
              <button type="submit" :disabled="submittingImage"
                class="flex-1 px-4 py-3 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-bold rounded-xl transition-all text-sm disabled:opacity-50">
                {{ submittingImage ? 'Enregistrement...' : editingImageId ? 'Mettre à jour' : 'Ajouter' }}
              </button>
              <button type="button" @click="closeImageModal" class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>

    <!-- ========== MODAL DOCUMENT ========== -->
    <Teleport to="body">
      <div v-if="showDocumentModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md my-8 overflow-hidden">
          <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50">
            <h2 class="text-lg font-bold text-gray-900">{{ editingDocumentId ? 'Modifier le document' : 'Ajouter un document' }}</h2>
            <button @click="closeDocumentModal" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-200 rounded-lg transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <form @submit.prevent="saveDocument" class="p-6 space-y-4 max-h-[calc(100vh-220px)] overflow-y-auto">
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Titre *</label>
              <input v-model="documentFormData.title" type="text" placeholder="Titre du document"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" required/>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Type *</label>
              <select v-model="documentFormData.type"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" required>
                <option value="">Choisir...</option>
                <option value="Fiche d'inscription modulaire">Fiche d'inscription modulaire</option>
                <option value="Fiche d'inscription BT & CAP">Fiche d'inscription BT & CAP</option>
                <option value="Liste des outils de TP et pour le stage">Liste des outils de TP et pour le stage</option>
                <option value="Flyer Formation Modulaire 2026">Flyer Formation Modulaire 2026</option>
                <option value="Fiche de renseignement CAP">Fiche de renseignement CAP</option>
                <option value="Fiche de renseignement BT">Fiche de renseignement BT</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Description</label>
              <textarea v-model="documentFormData.description" placeholder="Description courte" rows="2"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm resize-none"></textarea>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Fichier PDF *</label>
              <div
                @dragover.prevent="dragOverDocument = true"
                @dragleave.prevent="dragOverDocument = false"
                @drop.prevent="handleDocumentDrop"
                :class="['border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all', dragOverDocument ? 'border-purple-400 bg-purple-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300']"
                @click="documentInput.click()"
              >
                <input ref="documentInput" type="file" accept=".pdf" class="hidden" @change="handleDocumentSelect"/>
                <div v-if="!documentFormData.fileName" class="space-y-2">
                  <svg class="w-8 h-8 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <p class="text-sm text-gray-500">Glissez le PDF ou cliquez</p>
                </div>
                <div v-else class="space-y-2" @click.stop>
                  <svg class="w-10 h-10 mx-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <p class="text-sm font-semibold text-gray-900">{{ documentFormData.fileName }}</p>
                  <p class="text-xs text-gray-400">{{ formatFileSize(documentFormData.fileSize) }}</p>
                  <button type="button" @click="removeDocument" class="text-xs text-red-500 hover:text-red-700 font-semibold">Retirer</button>
                </div>
              </div>
            </div>
            <div class="flex gap-3 pt-2 border-t border-gray-100">
              <button type="submit" :disabled="submittingDocument"
                class="flex-1 px-4 py-3 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-bold rounded-xl transition-all text-sm disabled:opacity-50">
                {{ submittingDocument ? 'Enregistrement...' : editingDocumentId ? 'Mettre à jour' : 'Ajouter' }}
              </button>
              <button type="button" @click="closeDocumentModal" class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>

    <!-- ========== CONFIRMS SUPPRESSION ========== -->
    <Teleport to="body">
      <div v-if="showDeleteImageConfirm" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center">
          <div class="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Supprimer l'image ?</h3>
          <p class="text-gray-500 text-sm mb-6">Action irréversible.</p>
          <div class="flex gap-3">
            <button @click="confirmDeleteImage" :disabled="submittingImage" class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm disabled:opacity-50">
              {{ submittingImage ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button @click="showDeleteImageConfirm = false" class="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm">Annuler</button>
          </div>
        </div>
      </div>
    </Teleport>

    <Teleport to="body">
      <div v-if="showDeleteDocumentConfirm" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center">
          <div class="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Supprimer le document ?</h3>
          <p class="text-gray-500 text-sm mb-6">Action irréversible.</p>
          <div class="flex gap-3">
            <button @click="confirmDeleteDocument" :disabled="submittingDocument" class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm disabled:opacity-50">
              {{ submittingDocument ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button @click="showDeleteDocumentConfirm = false" class="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm">Annuler</button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- ========== MODAL MIGRATION ========== -->
    <Teleport to="body">
      <div v-if="showMigrationModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
          <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50">
            <h3 class="text-lg font-bold text-gray-900">Importer les données d'admission</h3>
            <button @click="closeMigrationModal" :disabled="isMigrating" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-200 rounded-lg transition-all disabled:opacity-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6 space-y-5">
            <!-- Info avant migration -->
            <div v-if="!isMigrating && migrationLog.length === 0" class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
              <p class="font-bold mb-2">Cette action va importer:</p>
              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <p class="font-semibold text-xs uppercase tracking-wide text-blue-700 mb-1">Images (5)</p>
                  <ul class="space-y-0.5 text-xs">
                    <li>• Fiche d'inscription Modulaire</li>
                    <li>• Liste des outils TP</li>
                    <li>• Flyer Formation Modulaire 2026</li>
                    <li>• Fiche de renseignement CAP</li>
                    <li>• Fiche de renseignement BT</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-xs uppercase tracking-wide text-blue-700 mb-1">Documents PDF (6)</p>
                  <ul class="space-y-0.5 text-xs">
                    <li>• Fiche d'inscription modulaire</li>
                    <li>• Fiche d'inscription BT & CAP</li>
                    <li>• Liste des outils de TP</li>
                    <li>• Flyer Formation Modulaire 2026</li>
                    <li>• Fiche de renseignement CAP</li>
                    <li>• Fiche de renseignement BT</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Progress -->
            <div v-if="isMigrating" class="space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="font-semibold text-gray-900">
                  {{ migrationProgress.phase === 'images' ? 'Images' : migrationProgress.phase === 'documents' ? 'Documents' : 'Initialisation' }}
                </span>
                <span class="text-gray-500">{{ migrationProgress.current }} / {{ migrationProgress.total }}</span>
              </div>
              <div class="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  :style="{ width: migrationProgress.total > 0 ? (migrationProgress.current / migrationProgress.total * 100) + '%' : '0%' }"
                  class="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                ></div>
              </div>
              <p class="text-sm text-gray-600">{{ migrationProgress.status }}</p>
            </div>

            <!-- Log -->
            <div v-if="migrationLog.length > 0" class="bg-gray-50 border border-gray-200 rounded-xl p-4 max-h-48 overflow-y-auto">
              <p class="text-xs font-bold text-gray-700 mb-2">Journal de migration:</p>
              <div class="space-y-1">
                <div
                  v-for="(log, idx) in migrationLog"
                  :key="idx"
                  :class="['text-xs font-mono p-1.5 rounded', log.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700']"
                >
                  <span class="text-gray-400">[{{ log.timestamp }}]</span> {{ log.message }}
                </div>
              </div>
            </div>

            <div v-if="migrationProgress.error" class="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
              <p class="font-semibold mb-1">Erreur:</p>
              <p>{{ migrationProgress.error }}</p>
            </div>
          </div>

          <div class="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
            <button @click="closeMigrationModal" :disabled="isMigrating" class="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl text-sm disabled:opacity-50">Fermer</button>
            <button
              v-if="!isMigrating && migrationLog.length === 0"
              @click="startMigration"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Démarrer l'import
            </button>
            <button v-else-if="isMigrating" disabled class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-400 text-white font-bold rounded-xl text-sm">
              <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Migration...
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AdminSidebar from '../components/AdminSidebar.vue'
import { useAdmissionImages } from '../services/admissionsImagesService'
import { useAdmissionDocuments } from '../services/admissionsDocumentsService'
import { migrateAdmissionsToFirebase } from '../services/admissionsMigration'

export default {
  name: 'AdminAdmissions',
  components: { AdminSidebar },
  setup() {
    const { images: admissionImages, loading: imagesLoading, fetchAdmissionImages, addAdmissionImage, editAdmissionImage, removeAdmissionImage } = useAdmissionImages()
    const { documents: admissionDocuments, loading: documentsLoading, fetchAdmissionDocuments, addAdmissionDocument, editAdmissionDocument, removeAdmissionDocument } = useAdmissionDocuments()

    // IMAGE STATE
    const showImageModal = ref(false)
    const editingImageId = ref(null)
    const submittingImage = ref(false)
    const dragOverImage = ref(false)
    const showDeleteImageConfirm = ref(false)
    const imageInput = ref(null)
    const imageToDelete = ref(null)
    const imageFormData = ref({ title: '', category: '', description: '', image: null })

    // DOCUMENT STATE
    const showDocumentModal = ref(false)
    const editingDocumentId = ref(null)
    const submittingDocument = ref(false)
    const dragOverDocument = ref(false)
    const showDeleteDocumentConfirm = ref(false)
    const documentInput = ref(null)
    const documentToDelete = ref(null)
    const documentFormData = ref({ title: '', type: '', description: '', fileName: '', fileSize: 0, file: null })

    // MIGRATION STATE
    const showMigrationModal = ref(false)
    const isMigrating = ref(false)
    const migrationProgress = ref({ phase: '', current: 0, total: 0, status: '', error: null })
    const migrationLog = ref([])

    // --- MIGRATION ---
    const openMigrationModal = () => { showMigrationModal.value = true }
    const closeMigrationModal = () => {
      showMigrationModal.value = false
      migrationProgress.value = { phase: '', current: 0, total: 0, status: '', error: null }
      migrationLog.value = []
    }

    const startMigration = async () => {
      if (isMigrating.value) return
      isMigrating.value = true
      migrationLog.value = []
      try {
        const result = await migrateAdmissionsToFirebase((progress) => {
          migrationProgress.value = progress
          if (progress.status) {
            migrationLog.value.push({ timestamp: new Date().toLocaleTimeString('fr-FR'), message: progress.status, error: progress.error || null })
          }
        })
        await fetchAdmissionImages()
        await fetchAdmissionDocuments()
        alert(`Migration terminée!\nImages: ${result.images.successCount}\nDocuments: ${result.documents.successCount}`)
      } catch (error) {
        migrationProgress.value.error = error.message
        alert('Erreur: ' + error.message)
      } finally {
        isMigrating.value = false
      }
    }

    // --- IMAGE FUNCTIONS ---
    const openImageModal = () => {
      editingImageId.value = null
      imageFormData.value = { title: '', category: '', description: '', image: null }
      showImageModal.value = true
    }
    const closeImageModal = () => { showImageModal.value = false; imageFormData.value = { title: '', category: '', description: '', image: null } }

    const handleImageDrop = (e) => {
      dragOverImage.value = false
      const file = e.dataTransfer.files[0]
      if (file?.type.startsWith('image/')) loadImageAsBase64(file)
    }
    const handleImageSelect = (e) => { const file = e.target.files[0]; if (file) loadImageAsBase64(file) }

    const loadImageAsBase64 = async (file) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let width = img.width, height = img.height
        if (width > 1200) { height = Math.round((1200 * height) / width); width = 1200 }
        canvas.width = width; canvas.height = height
        canvas.getContext('2d').drawImage(img, 0, 0, width, height)
        let base64 = canvas.toDataURL('image/jpeg', 0.7)
        while (base64.length > 900000) base64 = canvas.toDataURL('image/jpeg', 0.5)
        imageFormData.value.image = base64
      }
      img.src = URL.createObjectURL(file)
    }
    const removeImage = () => { imageFormData.value.image = null; if (imageInput.value) imageInput.value.value = '' }

    const editImage = (image) => {
      editingImageId.value = image.id
      imageFormData.value = { title: image.title, category: image.category, description: image.description, image: image.image }
      showImageModal.value = true
    }

    const saveImage = async () => {
      if (!imageFormData.value.title || !imageFormData.value.category || !imageFormData.value.image) { alert('Veuillez remplir tous les champs requis'); return }
      submittingImage.value = true
      try {
        const data = { title: imageFormData.value.title, category: imageFormData.value.category, description: imageFormData.value.description, image: imageFormData.value.image }
        if (editingImageId.value) { await editAdmissionImage(editingImageId.value, data) } else { await addAdmissionImage(data) }
        closeImageModal()
      } catch (error) { console.error('Erreur save image:', error); alert('Erreur lors de la sauvegarde') } finally { submittingImage.value = false }
    }

    const deleteImageConfirm = (image) => { imageToDelete.value = image; showDeleteImageConfirm.value = true }
    const confirmDeleteImage = async () => {
      if (!imageToDelete.value) return
      submittingImage.value = true
      try { await removeAdmissionImage(imageToDelete.value.id); showDeleteImageConfirm.value = false; imageToDelete.value = null }
      catch (error) { console.error('Erreur delete:', error); alert('Erreur lors de la suppression') }
      finally { submittingImage.value = false }
    }

    // --- DOCUMENT FUNCTIONS ---
    const openDocumentModal = () => {
      editingDocumentId.value = null
      documentFormData.value = { title: '', type: '', description: '', fileName: '', fileSize: 0, file: null }
      showDocumentModal.value = true
    }
    const closeDocumentModal = () => { showDocumentModal.value = false; documentFormData.value = { title: '', type: '', description: '', fileName: '', fileSize: 0, file: null } }

    const handleDocumentDrop = (e) => {
      dragOverDocument.value = false
      const file = e.dataTransfer.files[0]
      if (file?.type === 'application/pdf') { setDocumentFile(file) } else { alert('Veuillez sélectionner un PDF') }
    }
    const handleDocumentSelect = (e) => {
      const file = e.target.files[0]
      if (file?.type === 'application/pdf') { setDocumentFile(file) } else { alert('Veuillez sélectionner un PDF') }
    }
    const setDocumentFile = (file) => { documentFormData.value.file = file; documentFormData.value.fileName = file.name; documentFormData.value.fileSize = file.size }
    const removeDocument = () => { documentFormData.value.file = null; documentFormData.value.fileName = ''; documentFormData.value.fileSize = 0; if (documentInput.value) documentInput.value.value = '' }

    const editDocument = (doc) => {
      editingDocumentId.value = doc.id
      documentFormData.value = { title: doc.title, type: doc.type, description: doc.description, fileName: doc.fileName, fileSize: doc.fileSize, file: null }
      showDocumentModal.value = true
    }

    const saveDocument = async () => {
      if (!documentFormData.value.title || !documentFormData.value.type) { alert('Veuillez remplir tous les champs requis'); return }
      if (!editingDocumentId.value && !documentFormData.value.file) { alert('Veuillez sélectionner un PDF'); return }
      submittingDocument.value = true
      try {
        if (editingDocumentId.value) {
          await editAdmissionDocument(editingDocumentId.value, { title: documentFormData.value.title, type: documentFormData.value.type, description: documentFormData.value.description })
        } else {
          await addAdmissionDocument({ title: documentFormData.value.title, type: documentFormData.value.type, description: documentFormData.value.description, file: documentFormData.value.file })
        }
        closeDocumentModal()
      } catch (error) { console.error('Erreur save document:', error); alert('Erreur lors de la sauvegarde') } finally { submittingDocument.value = false }
    }

    const deleteDocumentConfirm = (doc) => { documentToDelete.value = doc; showDeleteDocumentConfirm.value = true }
    const confirmDeleteDocument = async () => {
      if (!documentToDelete.value) return
      submittingDocument.value = true
      try { await removeAdmissionDocument(documentToDelete.value.id); showDeleteDocumentConfirm.value = false; documentToDelete.value = null }
      catch (error) { console.error('Erreur delete:', error); alert('Erreur lors de la suppression') }
      finally { submittingDocument.value = false }
    }

    const formatFileSize = (bytes) => {
      if (!bytes) return 'N/A'
      const k = 1024
      const sizes = ['B', 'KB', 'MB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
    }

    const getApproximateFileSize = (base64String) => {
      if (!base64String) return 0
      return Math.round(base64String.length * 0.75)
    }

    const formatDate = (date) => {
      if (!date) return ''
      return new Intl.DateTimeFormat('fr-FR').format(date)
    }

    onMounted(async () => {
      await fetchAdmissionImages()
      await fetchAdmissionDocuments()
    })

    return {
      admissionImages, imagesLoading, showImageModal, editingImageId, submittingImage, dragOverImage, showDeleteImageConfirm, imageInput, imageFormData,
      openImageModal, closeImageModal, handleImageDrop, handleImageSelect, removeImage, editImage, saveImage, deleteImageConfirm, confirmDeleteImage,
      admissionDocuments, documentsLoading, showDocumentModal, editingDocumentId, submittingDocument, dragOverDocument, showDeleteDocumentConfirm, documentInput, documentFormData,
      openDocumentModal, closeDocumentModal, handleDocumentDrop, handleDocumentSelect, removeDocument, editDocument, saveDocument, deleteDocumentConfirm, confirmDeleteDocument,
      showMigrationModal, isMigrating, migrationProgress, migrationLog,
      openMigrationModal, closeMigrationModal, startMigration,
      formatFileSize, getApproximateFileSize, formatDate
    }
  }
}
</script>
