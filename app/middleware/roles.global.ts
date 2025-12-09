function hasRole(): boolean {
  return true;
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (hasRole() === false) {
    return navigateTo('/login');
  }
});
