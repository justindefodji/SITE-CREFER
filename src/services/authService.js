import { ref, computed } from 'vue';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase';

export const currentUser = ref(null);
export const loading = ref(true);
export const firebaseReady = ref(false);
export const authInitialized = ref(false);

export const isAuthenticated = computed(() => !!currentUser.value);

// Initialize auth state listener
export const initializeAuth = () => {
  return new Promise((resolve) => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        currentUser.value = user;
        loading.value = false;
        firebaseReady.value = true;
        authInitialized.value = true;
        resolve();
      });
    } catch (error) {
      console.error('Auth initialization error:', error);
      loading.value = false;
      firebaseReady.value = false;
      authInitialized.value = true;
      resolve();
    }
  });
};

export const loginWithEmail = async (email, password) => {
  loading.value = true;
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    currentUser.value = result.user;
    return result.user;
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  } finally {
    loading.value = false;
  }
};

export const createAdminUser = async (email, password) => {
  loading.value = true;
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    currentUser.value = result.user;
    return result.user;
  } catch (error) {
    console.error('Signup error:', error.message);
    throw error;
  } finally {
    loading.value = false;
  }
};

export const logout = async () => {
  loading.value = true;
  try {
    await signOut(auth);
    currentUser.value = null;
  } catch (error) {
    console.error('Logout error:', error.message);
    throw error;
  } finally {
    loading.value = false;
  }
};
