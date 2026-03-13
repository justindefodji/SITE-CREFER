import { isAuthenticated, authInitialized } from '../services/authService.js';

let lastRedirectPath = null;

export function adminAuthGuard(to, from, next) {
  // Attendre que Firebase soit initialisé
  if (!authInitialized.value) {
    // Firebase est en cours d'initialisation, attendre et réessayer
    const checkAuthInterval = setInterval(() => {
      if (authInitialized.value) {
        clearInterval(checkAuthInterval);
        adminAuthGuard(to, from, next);
      }
    }, 50);
    return;
  }

  // Check if accessing login or other non-protected admin routes
  if (to.path === '/admin/login') {
    // If already logged in, redirect to dashboard
    if (isAuthenticated.value) {
      next('/admin/dashboard');
    } else {
      next();
    }
    return;
  }

  // For all other /admin/* routes
  if (to.path.startsWith('/admin')) {
    if (!isAuthenticated.value) {
      // Prevent infinite redirect loops
      if (lastRedirectPath !== to.path) {
        lastRedirectPath = to.path;
        next('/admin/login');
      } else {
        next();
      }
    } else {
      lastRedirectPath = null;
      next();
    }
  } else {
    next();
  }
}
