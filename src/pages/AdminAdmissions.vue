<template>
  <div class="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
    <!-- Header -->
    <div class="max-w-7xl mx-auto mb-8">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button
            @click="goToDashboard"
            class="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2 font-semibold"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour
          </button>
          <h1 class="text-3xl font-bold text-gray-900">📝 Gestion des Admissions</h1>
        </div>
        <button
          @click="openMigrationModal"
          :disabled="isMigrating"
          class="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <span v-if="!isMigrating">📥 Importer les données</span>
          <span v-else>Migration en cours...</span>
        </button>
      </div>
    </div>

    <!-- Main Layout: Two Columns -->
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
      <!-- LEFT COLUMN: ADMISSION IMAGES -->
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🖼️</span>
              <h2 class="text-2xl font-bold text-gray-900">Images d'Admission</h2>
            </div>
            <button
              @click="openImageModal"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              + Ajouter
            </button>
          </div>

          <!-- Images Grid -->
          <div v-if="imagesLoading" class="text-center py-8">
            <div class="inline-block w-8 h-8 border-4 border-blue-400 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <div v-else-if="admissionImages.length === 0" class="text-center py-12 text-gray-500">
            <p class="text-lg">Aucune image d'admission</p>
          </div>
          <div v-else class="grid grid-cols-2 gap-4">
            <div
              v-for="image in admissionImages"
              :key="image.id"
              class="group relative bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
            >
              <!-- Image -->
              <img :src="image.image" :alt="image.title" class="w-full h-48 object-cover"/>
              
              <!-- Info on Hover -->
              <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-3 space-y-2">
                <p class="text-sm font-semibold">{{ image.title }}</p>
                <p class="text-xs text-gray-300">{{ image.category }}</p>
                <div class="flex gap-2 justify-center pt-2">
                  <button
                    @click="editImage(image)"
                    class="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded"
                  >
                    Modifier
                  </button>
                  <button
                    @click="deleteImageConfirm(image)"
                    class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: ADMISSION DOCUMENTS -->
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <span class="text-2xl">📄</span>
              <h2 class="text-2xl font-bold text-gray-900">Documents (PDF)</h2>
            </div>
            <button
              @click="openDocumentModal"
              class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              + Ajouter
            </button>
          </div>

          <!-- Documents List -->
          <div v-if="documentsLoading" class="text-center py-8">
            <div class="inline-block w-8 h-8 border-4 border-purple-400 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
          <div v-else-if="admissionDocuments.length === 0" class="text-center py-12 text-gray-500">
            <p class="text-lg">Aucun document d'admission</p>
          </div>
          <div v-else class="space-y-3">
            <div
              v-for="doc in admissionDocuments"
              :key="doc.id"
              class="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600 hover:shadow-md transition-shadow"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900">{{ doc.title }}</h3>
                  <p v-if="doc.description" class="text-sm text-gray-600 mt-1">{{ doc.description }}</p>
                  <div class="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <span>📦 {{ formatFileSize(getApproximateFileSize(doc.document)) }}</span>
                    <span>•</span>
                    <span>{{ formatDate(doc.createdAt?.toDate?.()) }}</span>
                  </div>
                </div>
                <div class="flex gap-2 ml-4">
                  <button
                    @click="editDocument(doc)"
                    class="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded"
                  >
                    Modifier
                  </button>
                  <button
                    @click="deleteDocumentConfirm(doc)"
                    class="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- IMAGE MODAL: Add/Edit -->
    <div v-if="showImageModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h3 class="text-xl font-bold text-gray-900">
            {{ editingImageId ? 'Modifier l\'image' : 'Ajouter une image' }}
          </h3>
        </div>

        <form @submit.prevent="saveImage" class="p-6 space-y-4">
          <!-- Title -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Titre *</label>
            <input
              v-model="imageFormData.title"
              type="text"
              placeholder="Titre de l'image"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <!-- Category -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Catégorie *</label>
            <select
              v-model="imageFormData.category"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="Fiche Modulaire">Fiche Modulaire</option>
              <option value="Fiche BT/CAP">Fiche BT/CAP</option>
              <option value="Outils TP">Outils TP</option>
              <option value="Flyer">Flyer</option>
              <option value="Renseignement">Renseignement</option>
              <option value="Autres">Autres</option>
            </select>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Description</label>
            <textarea
              v-model="imageFormData.description"
              placeholder="Description courte"
              rows="2"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <!-- Image Upload -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Image *</label>
            <div
              @dragover.prevent="dragOverImage = true"
              @dragleave.prevent="dragOverImage = false"
              @drop.prevent="handleImageDrop"
              :class="['relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors', 
                dragOverImage ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:border-gray-400']"
            >
              <input
                ref="imageInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleImageSelect"
              />
              
              <div v-if="!imageFormData.image" class="space-y-2">
                <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-sm font-semibold text-gray-900">Glissez l'image ici</p>
                  <p class="text-xs text-gray-500">ou</p>
                  <button
                    type="button"
                    @click="imageInput.click()"
                    class="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    cliquez pour importer
                  </button>
                </div>
              </div>

              <div v-else class="space-y-3">
                <img :src="imageFormData.image" alt="Preview" class="h-32 object-cover mx-auto rounded" />
                <button
                  type="button"
                  @click="removeImage"
                  class="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  ✕ Retirer
                </button>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-4 border-t">
            <button
              type="submit"
              :disabled="submittingImage"
              class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
            >
              {{ submittingImage ? 'Sauvegarde...' : (editingImageId ? 'Mettre à jour' : 'Ajouter') }}
            </button>
            <button
              type="button"
              @click="closeImageModal"
              class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- DOCUMENT MODAL: Add/Edit -->
    <div v-if="showDocumentModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h3 class="text-xl font-bold text-gray-900">
            {{ editingDocumentId ? 'Modifier le document' : 'Ajouter un document' }}
          </h3>
        </div>

        <form @submit.prevent="saveDocument" class="p-6 space-y-4">
          <!-- Title -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Titre *</label>
            <input
              v-model="documentFormData.title"
              type="text"
              placeholder="Titre du document"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <!-- Type -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Type *</label>
            <select
              v-model="documentFormData.type"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Sélectionner un type</option>
              <option value="Fiche d'inscription modulaire">Fiche d'inscription modulaire</option>
              <option value="Fiche d'inscription BT & CAP">Fiche d'inscription BT & CAP</option>
              <option value="Liste des outils de TP et pour le stage">Liste des outils de TP et pour le stage</option>
              <option value="Flyer Formation Modulaire 2026">Flyer Formation Modulaire 2026</option>
              <option value="Fiche de renseignement CAP">Fiche de renseignement CAP</option>
              <option value="Fiche de renseignement BT">Fiche de renseignement BT</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Description</label>
            <textarea
              v-model="documentFormData.description"
              placeholder="Description courte"
              rows="2"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <!-- PDF Upload -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Fichier PDF *</label>
            <div
              @dragover.prevent="dragOverDocument = true"
              @dragleave.prevent="dragOverDocument = false"
              @drop.prevent="handleDocumentDrop"
              :class="['relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors', 
                dragOverDocument ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-gray-50 hover:border-gray-400']"
            >
              <input
                ref="documentInput"
                type="file"
                accept=".pdf"
                class="hidden"
                @change="handleDocumentSelect"
              />
              
              <div v-if="!documentFormData.fileName" class="space-y-2">
                <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-sm font-semibold text-gray-900">Glissez le PDF ici</p>
                  <p class="text-xs text-gray-500">ou</p>
                  <button
                    type="button"
                    @click="documentInput.click()"
                    class="text-purple-600 hover:text-purple-700 font-semibold text-sm"
                  >
                    cliquez pour importer
                  </button>
                </div>
              </div>

              <div v-else class="space-y-3">
                <div class="flex items-center justify-center">
                  <svg class="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p class="text-sm font-semibold text-gray-900">{{ documentFormData.fileName }}</p>
                <p class="text-xs text-gray-500">{{ formatFileSize(documentFormData.fileSize) }}</p>
                <button
                  type="button"
                  @click="removeDocument"
                  class="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  ✕ Retirer
                </button>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-4 border-t">
            <button
              type="submit"
              :disabled="submittingDocument"
              class="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold rounded-lg transition-colors"
            >
              {{ submittingDocument ? 'Sauvegarde...' : (editingDocumentId ? 'Mettre à jour' : 'Ajouter') }}
            </button>
            <button
              type="button"
              @click="closeDocumentModal"
              class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- DELETE CONFIRM MODALS -->
    <!-- Image Delete Confirm -->
    <div v-if="showDeleteImageConfirm" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Supprimer l'image ?</h3>
          <p class="text-gray-600 mb-6">Cette action est irréversible.</p>
          <div class="flex gap-3">
            <button
              @click="confirmDeleteImage"
              :disabled="submittingImage"
              class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition-colors"
            >
              {{ submittingImage ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button
              @click="showDeleteImageConfirm = false"
              class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Document Delete Confirm -->
    <div v-if="showDeleteDocumentConfirm" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Supprimer le document ?</h3>
          <p class="text-gray-600 mb-6">Cette action est irréversible.</p>
          <div class="flex gap-3">
            <button
              @click="confirmDeleteDocument"
              :disabled="submittingDocument"
              class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition-colors"
            >
              {{ submittingDocument ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button
              @click="showDeleteDocumentConfirm = false"
              class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Migration Modal -->
    <div v-if="showMigrationModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <div class="flex items-center gap-3">
            <span class="text-2xl">📥</span>
            <h3 class="text-xl font-bold text-gray-900">Importer les données d'admission</h3>
          </div>
          <button
            @click="closeMigrationModal"
            :disabled="isMigrating"
            class="text-gray-600 hover:text-gray-900 disabled:text-gray-400"
          >
            ✕
          </button>
        </div>

        <!-- Content -->
        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <!-- Status Info -->
          <div v-if="!isMigrating && migrationLog.length === 0" class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p class="text-sm text-blue-900">
              <strong>Cette action va importer:</strong>
            </p>
            <p class="text-sm text-blue-900 mt-2 font-semibold">Images (5):</p>
            <ul class="text-sm text-blue-900 ml-4 space-y-1">
              <li>• Fiche d'inscription Modulaire</li>
              <li>• Liste des outils TP</li>
              <li>• Flyer Formation Modulaire 2026</li>
              <li>• Fiche de renseignement CAP</li>
              <li>• Fiche de renseignement BT</li>
            </ul>
            <p class="text-sm text-blue-900 mt-3 font-semibold">Documents PDF (6):</p>
            <ul class="text-sm text-blue-900 ml-4 space-y-1">
              <li>• Fiche d'inscription modulaire</li>
              <li>• Fiche d'inscription BT & CAP</li>
              <li>• Liste des outils de TP et pour le stage</li>
              <li>• Flyer Formation Modulaire 2026</li>
              <li>• Fiche de renseignement CAP</li>
              <li>• Fiche de renseignement BT</li>
            </ul>
            <p class="text-sm text-blue-900 mt-3">
              Les données seront stockées dans Firestore (collections <strong>admissions_images</strong> et <strong>admissions_documents</strong>).
            </p>
          </div>

          <!-- Progress -->
          <div v-if="isMigrating" class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-900">
                {{ migrationProgress.phase === 'images' ? 'Images' : migrationProgress.phase === 'documents' ? 'Documents' : 'Initialisation' }}
              </span>
              <span class="text-sm text-gray-600">
                {{ migrationProgress.current }} / {{ migrationProgress.total }}
              </span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                :style="{ width: migrationProgress.total > 0 ? (migrationProgress.current / migrationProgress.total * 100) + '%' : '0%' }"
                class="bg-green-600 h-2 rounded-full transition-all duration-300"
              ></div>
            </div>
            <p class="text-sm text-gray-700">{{ migrationProgress.status }}</p>
          </div>

          <!-- Log -->
          <div v-if="migrationLog.length > 0" class="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto">
            <p class="text-xs font-semibold text-gray-900 mb-2">Détails de la migration:</p>
            <div class="space-y-1">
              <div
                v-for="(log, idx) in migrationLog"
                :key="idx"
                :class="['text-xs font-mono p-2 rounded', log.error ? 'bg-red-50 text-red-900' : 'bg-green-50 text-green-900']"
              >
                <span class="text-gray-600">[{{ log.timestamp }}]</span>
                <span>{{ log.message }}</span>
              </div>
            </div>
          </div>

          <!-- Error -->
          <div v-if="migrationProgress.error" class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p class="text-sm font-semibold text-red-900">Erreur lors de la migration:</p>
            <p class="text-sm text-red-800 mt-1">{{ migrationProgress.error }}</p>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-6 border-t border-gray-200 bg-gray-50 flex gap-3 justify-end sticky bottom-0">
          <button
            @click="closeMigrationModal"
            :disabled="isMigrating"
            class="px-6 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
          >
            Fermer
          </button>
          <button
            v-if="!isMigrating && migrationLog.length === 0"
            @click="startMigration"
            class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m0 0h6"/>
            </svg>
            Démarrer l'import
          </button>
          <button
            v-else-if="isMigrating"
            disabled
            class="px-6 py-2 bg-gray-400 text-white font-semibold rounded-lg flex items-center gap-2"
          >
            <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Migration en cours...
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAdmissionImages } from '../services/admissionsImagesService'
import { useAdmissionDocuments } from '../services/admissionsDocumentsService'
import { migrateAdmissionsToFirebase } from '../services/admissionsMigration'

export default {
  name: 'AdminAdmissions',
  setup() {
    const router = useRouter()
    
    // Images composable
    const { 
      images: admissionImages, 
      loading: imagesLoading, 
      fetchAdmissionImages, 
      addAdmissionImage, 
      editAdmissionImage, 
      removeAdmissionImage 
    } = useAdmissionImages()
    
    // Documents composable
    const { 
      documents: admissionDocuments, 
      loading: documentsLoading, 
      fetchAdmissionDocuments, 
      addAdmissionDocument, 
      editAdmissionDocument, 
      removeAdmissionDocument 
    } = useAdmissionDocuments()

    // IMAGE FORM STATE
    const showImageModal = ref(false)
    const editingImageId = ref(null)
    const submittingImage = ref(false)
    const dragOverImage = ref(false)
    const showDeleteImageConfirm = ref(false)
    const imageInput = ref(null)
    const imageToDelete = ref(null)
    
    const imageFormData = ref({
      title: '',
      category: '',
      description: '',
      image: null
    })

    // DOCUMENT FORM STATE
    const showDocumentModal = ref(false)
    const editingDocumentId = ref(null)
    const submittingDocument = ref(false)
    const dragOverDocument = ref(false)
    const showDeleteDocumentConfirm = ref(false)
    const documentInput = ref(null)
    const documentToDelete = ref(null)
    
    const documentFormData = ref({
      title: '',
      type: '',
      description: '',
      fileName: '',
      fileSize: 0,
      file: null
    })

    // MIGRATION STATE
    const showMigrationModal = ref(false)
    const isMigrating = ref(false)
    const migrationProgress = ref({
      phase: '',
      current: 0,
      total: 0,
      status: '',
      error: null
    })
    const migrationLog = ref([])

    // ============ MIGRATION FUNCTIONS ============
    const openMigrationModal = () => {
      showMigrationModal.value = true
    }

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
          
          // Ajouter au log
          if (progress.status) {
            migrationLog.value.push({
              timestamp: new Date().toLocaleTimeString('fr-FR'),
              message: progress.status,
              phase: progress.phase,
              error: progress.error || null
            })
          }
        })
        
        // Recharger les données
        await fetchAdmissionImages()
        await fetchAdmissionDocuments()
        
        alert(`Migration terminée!\nImages: ${result.images.successCount}/${result.images.successCount + result.images.errorCount}\nDocuments: ${result.documents.successCount}/${result.documents.successCount + result.documents.errorCount}`)
      } catch (error) {
        console.error('Erreur migration:', error)
        migrationProgress.value.error = error.message
        alert('Erreur lors de la migration: ' + error.message)
      } finally {
        isMigrating.value = false
      }
    }

    // ============ IMAGE FUNCTIONS ============
    const openImageModal = () => {
      editingImageId.value = null
      imageFormData.value = { title: '', category: '', description: '', image: null }
      showImageModal.value = true
    }

    const closeImageModal = () => {
      showImageModal.value = false
      imageFormData.value = { title: '', category: '', description: '', image: null }
    }

    const handleImageDrop = (e) => {
      dragOverImage.value = false
      const file = e.dataTransfer.files[0]
      if (file?.type.startsWith('image/')) {
        loadImageAsBase64(file)
      }
    }

    const handleImageSelect = (e) => {
      const file = e.target.files[0]
      if (file) {
        loadImageAsBase64(file)
      }
    }

    const loadImageAsBase64 = async (file) => {
      try {
        const canvas = document.createElement('canvas')
        const img = new Image()
        
        img.onload = () => {
          let width = img.width
          let height = img.height
          const maxWidth = 1200
          
          if (width > maxWidth) {
            height = Math.round((maxWidth * height) / width)
            width = maxWidth
          }
          
          canvas.width = width
          canvas.height = height
          
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          
          let quality = 0.7
          let base64 = canvas.toDataURL('image/jpeg', quality)
          
          while (base64.length > 900000 && quality > 0.3) {
            quality -= 0.2
            base64 = canvas.toDataURL('image/jpeg', quality)
          }
          
          imageFormData.value.image = base64
        }
        
        img.src = URL.createObjectURL(file)
      } catch (error) {
        console.error('Erreur chargement image:', error)
        alert('Impossible de charger l\'image')
      }
    }

    const removeImage = () => {
      imageFormData.value.image = null
      if (imageInput.value) imageInput.value.value = ''
    }

    const editImage = (image) => {
      editingImageId.value = image.id
      imageFormData.value = {
        title: image.title,
        category: image.category,
        description: image.description,
        image: image.image
      }
      showImageModal.value = true
    }

    const saveImage = async () => {
      if (!imageFormData.value.title || !imageFormData.value.category || !imageFormData.value.image) {
        alert('Veuillez remplir tous les champs requis')
        return
      }

      submittingImage.value = true
      try {
        const data = {
          title: imageFormData.value.title,
          category: imageFormData.value.category,
          description: imageFormData.value.description,
          image: imageFormData.value.image
        }

        if (editingImageId.value) {
          await editAdmissionImage(editingImageId.value, data)
        } else {
          await addAdmissionImage(data)
        }

        closeImageModal()
      } catch (error) {
        console.error('Erreur save image:', error)
        alert('Erreur lors de la sauvegarde')
      } finally {
        submittingImage.value = false
      }
    }

    const deleteImageConfirm = (image) => {
      imageToDelete.value = image
      showDeleteImageConfirm.value = true
    }

    const confirmDeleteImage = async () => {
      if (!imageToDelete.value) return
      
      submittingImage.value = true
      try {
        await removeAdmissionImage(imageToDelete.value.id)
        showDeleteImageConfirm.value = false
        imageToDelete.value = null
      } catch (error) {
        console.error('Erreur delete image:', error)
        alert('Erreur lors de la suppression')
      } finally {
        submittingImage.value = false
      }
    }

    // ============ DOCUMENT FUNCTIONS ============
    const openDocumentModal = () => {
      editingDocumentId.value = null
      documentFormData.value = { title: '', type: '', description: '', fileName: '', fileSize: 0, file: null }
      showDocumentModal.value = true
    }

    const closeDocumentModal = () => {
      showDocumentModal.value = false
      documentFormData.value = { title: '', type: '', description: '', fileName: '', fileSize: 0, file: null }
    }

    const handleDocumentDrop = (e) => {
      dragOverDocument.value = false
      const file = e.dataTransfer.files[0]
      if (file?.type === 'application/pdf') {
        setDocumentFile(file)
      } else {
        alert('Veuillez sélectionner un fichier PDF')
      }
    }

    const handleDocumentSelect = (e) => {
      const file = e.target.files[0]
      if (file?.type === 'application/pdf') {
        setDocumentFile(file)
      } else {
        alert('Veuillez sélectionner un fichier PDF')
      }
    }

    const setDocumentFile = (file) => {
      documentFormData.value.file = file
      documentFormData.value.fileName = file.name
      documentFormData.value.fileSize = file.size
    }

    const removeDocument = () => {
      documentFormData.value.file = null
      documentFormData.value.fileName = ''
      documentFormData.value.fileSize = 0
      if (documentInput.value) documentInput.value.value = ''
    }

    const editDocument = (doc) => {
      editingDocumentId.value = doc.id
      documentFormData.value = {
        title: doc.title,
        type: doc.type,
        description: doc.description,
        fileName: doc.fileName,
        fileSize: doc.fileSize,
        file: null
      }
      showDocumentModal.value = true
    }

    const saveDocument = async () => {
      if (!documentFormData.value.title || !documentFormData.value.type) {
        alert('Veuillez remplir tous les champs requis')
        return
      }

      if (!editingDocumentId.value && !documentFormData.value.file) {
        alert('Veuillez sélectionner un fichier PDF')
        return
      }

      submittingDocument.value = true
      try {
        const data = {
          title: documentFormData.value.title,
          type: documentFormData.value.type,
          description: documentFormData.value.description,
          file: documentFormData.value.file
        }

        if (editingDocumentId.value) {
          await editAdmissionDocument(editingDocumentId.value, {
            title: documentFormData.value.title,
            type: documentFormData.value.type,
            description: documentFormData.value.description
          })
        } else {
          await addAdmissionDocument(data)
        }

        closeDocumentModal()
      } catch (error) {
        console.error('Erreur save document:', error)
        alert('Erreur lors de la sauvegarde')
      } finally {
        submittingDocument.value = false
      }
    }

    const deleteDocumentConfirm = (doc) => {
      documentToDelete.value = doc
      showDeleteDocumentConfirm.value = true
    }

    const confirmDeleteDocument = async () => {
      if (!documentToDelete.value) return
      
      submittingDocument.value = true
      try {
        await removeAdmissionDocument(documentToDelete.value.id)
        showDeleteDocumentConfirm.value = false
        documentToDelete.value = null
      } catch (error) {
        console.error('Erreur delete document:', error)
        alert('Erreur lors de la suppression')
      } finally {
        submittingDocument.value = false
      }
    }

    const formatFileSize = (bytes) => {
      if (bytes === 0) return '0 B'
      if (!bytes) return 'N/A'
      const k = 1024
      const sizes = ['B', 'KB', 'MB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
    }

    // Calculer la taille approximative du PDF à partir du base64
    const getApproximateFileSize = (base64String) => {
      if (!base64String) return 0
      // La taille en bytes ≈ longueur du base64 * 3/4
      return Math.round(base64String.length * 0.75)
    }

    const formatDate = (date) => {
      if (!date) return ''
      return new Intl.DateTimeFormat('fr-FR').format(date)
    }

    const goToDashboard = () => {
      router.push({ name: 'AdminDashboard' })
    }

    onMounted(async () => {
      await fetchAdmissionImages()
      await fetchAdmissionDocuments()
    })

    return {
      // Images
      admissionImages,
      imagesLoading,
      showImageModal,
      editingImageId,
      submittingImage,
      dragOverImage,
      showDeleteImageConfirm,
      imageInput,
      imageFormData,
      openImageModal,
      closeImageModal,
      handleImageDrop,
      handleImageSelect,
      removeImage,
      editImage,
      saveImage,
      deleteImageConfirm,
      confirmDeleteImage,

      // Documents
      admissionDocuments,
      documentsLoading,
      showDocumentModal,
      editingDocumentId,
      submittingDocument,
      dragOverDocument,
      showDeleteDocumentConfirm,
      documentInput,
      documentFormData,
      openDocumentModal,
      closeDocumentModal,
      handleDocumentDrop,
      handleDocumentSelect,
      removeDocument,
      editDocument,
      saveDocument,
      deleteDocumentConfirm,
      confirmDeleteDocument,

      // Migration
      showMigrationModal,
      isMigrating,
      migrationProgress,
      migrationLog,
      openMigrationModal,
      closeMigrationModal,
      startMigration,

      // Utils
      formatFileSize,
      getApproximateFileSize,
      formatDate,
      goToDashboard
    }
  }
}
</script>
