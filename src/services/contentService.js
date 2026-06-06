import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  writeBatch,
} from 'firebase/firestore';
import { db } from './firebase';

/**
 * Get all pages
 */
export const getAllPages = async () => {
  try {
    const pagesCollection = collection(db, 'pages');
    const snapshot = await getDocs(pagesCollection);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting pages:', error);
    throw error;
  }
};

/**
 * Get a single page with all its sections
 */
export const getPageWithSections = async (pageId) => {
  try {
    const pageDoc = await getDoc(doc(db, 'pages', pageId));
    if (!pageDoc.exists()) {
      throw new Error('Page not found');
    }

    const pageData = {
      id: pageDoc.id,
      ...pageDoc.data(),
      sections: {},
    };

    // Get all sections for this page
    const sectionsCollection = collection(db, 'pages', pageId, 'sections');
    const sectionsSnapshot = await getDocs(sectionsCollection);

    sectionsSnapshot.forEach((sec) => {
      pageData.sections[sec.id] = {
        id: sec.id,
        ...sec.data(),
      };
    });

    return pageData;
  } catch (error) {
    console.error('Error getting page with sections:', error);
    throw error;
  }
};

/**
 * Get a specific section from a page
 */
export const getSection = async (pageId, sectionId) => {
  const sectionDoc = await getDoc(
    doc(db, 'pages', pageId, 'sections', sectionId)
  );
  if (!sectionDoc.exists()) {
    return null;
  }
  return {
    id: sectionDoc.id,
    ...sectionDoc.data(),
  };
};

/**
 * Create or update a section
 */
export const saveSection = async (pageId, sectionId, data) => {
  try {
    const sectionRef = doc(db, 'pages', pageId, 'sections', sectionId);
    await setDoc(
      sectionRef,
      {
        ...data,
        updatedAt: new Date(),
      },
      { merge: true }
    );
    return {
      id: sectionId,
      ...data,
      updatedAt: new Date(),
    };
  } catch (error) {
    console.error('Error saving section:', error);
    throw error;
  }
};

/**
 * Update a section partially
 */
export const updateSection = async (pageId, sectionId, data) => {
  try {
    const sectionRef = doc(db, 'pages', pageId, 'sections', sectionId);
    await updateDoc(sectionRef, {
      ...data,
      updatedAt: new Date(),
    });
    return {
      id: sectionId,
      ...data,
      updatedAt: new Date(),
    };
  } catch (error) {
    console.error('Error updating section:', error);
    throw error;
  }
};

/**
 * Delete a section
 */
export const deleteSection = async (pageId, sectionId) => {
  try {
    await deleteDoc(doc(db, 'pages', pageId, 'sections', sectionId));
  } catch (error) {
    console.error('Error deleting section:', error);
    throw error;
  }
};

/**
 * Create a new page
 */
export const createPage = async (pageId, data) => {
  try {
    const pageRef = doc(db, 'pages', pageId);
    await setDoc(
      pageRef,
      {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { merge: true }
    );
    return {
      id: pageId,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  } catch (error) {
    console.error('Error creating page:', error);
    throw error;
  }
};

/**
 * Update a page
 */
export const updatePage = async (pageId, data) => {
  try {
    const pageRef = doc(db, 'pages', pageId);
    await updateDoc(pageRef, {
      ...data,
      updatedAt: new Date(),
    });
    return {
      id: pageId,
      ...data,
      updatedAt: new Date(),
    };
  } catch (error) {
    console.error('Error updating page:', error);
    throw error;
  }
};

/**
 * Delete a page and all its sections
 */
export const deletePage = async (pageId) => {
  try {
    // Delete all sections first
    const sectionsCollection = collection(db, 'pages', pageId, 'sections');
    const sectionsSnapshot = await getDocs(sectionsCollection);

    const batch = writeBatch(db);
    sectionsSnapshot.forEach((sec) => {
      batch.delete(sec.ref);
    });
    await batch.commit();

    // Delete the page
    await deleteDoc(doc(db, 'pages', pageId));
  } catch (error) {
    console.error('Error deleting page:', error);
    throw error;
  }
};

/**
 * Get all sections of a page (simple list)
 */
export const getPageSections = async (pageId) => {
  try {
    const sectionsCollection = collection(db, 'pages', pageId, 'sections');
    const snapshot = await getDocs(sectionsCollection);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting page sections:', error);
    throw error;
  }
};

/**
 * Initialize default pages structure
 */
export const initializeDefaultPages = async () => {
  try {
    const defaultPages = ['home', 'about', 'articles', 'blog', 'gallery', 'contact'];

    for (const pageId of defaultPages) {
      const pageRef = doc(db, 'pages', pageId);
      const pageDoc = await getDoc(pageRef);

      if (!pageDoc.exists()) {
        await setDoc(pageRef, {
          title: pageId.charAt(0).toUpperCase() + pageId.slice(1),
          description: `${pageId} page`,
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        // Create a default section for each page
        const sectionRef = doc(db, 'pages', pageId, 'sections', 'default');
        await setDoc(sectionRef, {
          name: 'Default Section',
          content: {},
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    console.log('Default pages initialized');
  } catch (error) {
    console.error('Error initializing default pages:', error);
    throw error;
  }
};
